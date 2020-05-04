new Vue ({
    el: '#app',
    data: {
        count: 1,
        url: "",
        cleanUrl: ""
    },
    methods: {
        countUp: function () {
            this.count += 1;
        },
        countDown: function () {
            this.count -= 1;
        },
        urlCleaner: function () {
            this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
        }
    }
})