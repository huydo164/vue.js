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

var watch = new Vue({
    el: '#watch-example',
    data: {
        example: 'lorem ipsum'
    },
    watch: {
        data: function() {
            alert(this.example);
        }
    }
})
watch.example = "Hello word";