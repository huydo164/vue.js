Vue.component('blog-post', {
    props: ['title'],
    template: '<p>{{ title }}</p>'
})
var app2 = new Vue({
    el: '#prop',
    data: {
        posts: [
            { id: 1, title: "PHP" },
            { id: 2, title: "Laravel" },
            { id: 3, title: "Mysql" },
            { id: 4, title: "Vue" },
        ]
    }
})