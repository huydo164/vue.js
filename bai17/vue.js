var mixin = {
    methods: {
        test1: function() {
            console.log('Test 1')
        },
        test2: function() {
            console.log('Test 2')
        }
    }
}

var extend = new Vue({
    mixins: [mixin],
    methods: {
        test1: function() {
            console.log('Test 1')
        },
        test2: function() {
            console.log('Test 2')
        }
    }
})

extend.test1()
extend.test2()