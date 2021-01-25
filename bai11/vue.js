Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Số lần click: {{ count }}</button>'
})

var app1 = new Vue({
    el: "#compoment",
})

Vue.component('blog-post', {
    props: ['title'],
    template: '<p>{{ title }}</p>'
})
var app2 = new Vue({
    el: '#prop',
    data: {
        posts: [
            { id: 1, title: "Do" },
            { id: 2, title: "Vu" },
            { id: 3, title: "Ngoc" },
            { id: 4, title: "Huy" },
        ]
    }
})