Vue.component('child', {
    template: '<div class="children">' +
        '<h2>Con</h2>' +
        '<slot></slot>' +
        '</div>'
})

new Vue({
    el: '#app'
})