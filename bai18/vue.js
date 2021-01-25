var test = new Vue({
    el: '.test',
    data: {
        name: 'Chữ đầu viết hoa',
    },
    filters: {
        capitalize: function(value) {
            return value.toUpperCase();
        }
    }
})