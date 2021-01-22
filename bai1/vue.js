var app = new Vue({
    el: '.app',
    data: {
        messages: 'Hello word',
    }
});

//sử dụng bind ràng buộc thuộc tính
var app1 = new Vue({
    el: '.app1',
    data: {
        messages: 'Hiển thị title khi move chuột vào text trên',
        thong_bao: 'this is messages',
        active: 'active',
    }
})

//Câu lệnh if
var app2 = new Vue({
    el: '.app2',
    data: {
        seen: "true",
    }
});

//vòng lặp v-for
var app3 = new Vue({
    el: '.app3',
    data: {
        items: [
            { text: 'Học php' },
            { text: 'Học laravel' },
            { text: 'Học Vue' }
        ]
    }
});

//v-click
var app4 = new Vue({
    el: '.app4',
    data: {
        click: 'click',
    },
    methods: {
        Click: function() {
            this.click = false;
        }
    }
})

//v-model
var app5 = new Vue({
    el: '.app5',
    data: {
        text: "Hiển thị text theo form input"
    }
})

//compoment
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app6 = new Vue({
    el: '.app6',
    data: {
        items: [
            { text: 'thực tập sinh' },
            { text: 'học việc' },
            { text: 'nhân viên' },
        ]
    }
})