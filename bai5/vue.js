var vm = new Vue({
    el: '#example',
    data: {
        message: 'Do vu ngoc huy'
    },
    computed: {
        reversedMessage: function() {
            return this.message.split(' ').reverse().join(' ')
        }
    }
})

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'Không thể trả lời nếu bạn chưa đặt câu hỏi!'
    },
    watch: {
        question: function(newQuestion, oldQuestion) {
            this.answer = 'Đang chờ bạn đặt xong câu hỏi...'
            this.getAnswer()
        }
    },
    methods: {
        getAnswer: _.debounce(
            function() {
                if (this.question.indexOf('?') === -1) {
                    this.answer = 'Câu hỏi thì thường chứa một dấu "?" ;-)'
                    return
                }
                this.answer = 'Đang suy nghĩ...'
                var vm = this
                axios.get('https://yesno.wtf/api')
                    .then(function(response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function(error) {
                        vm.answer = 'Lỗi! Không thể truy cập API. ' + error
                    })
            },
            500
        )
    }
})