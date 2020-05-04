new Vue ({
    el: '#app',
    data: {
        title: 'Hello world',
        isRounded: false,
        sizeToggle: false,
        disabled: false,
        fontColor: '#ccc',
        backgroundColor: 'yellow'
    },
    computed: {
        styles: function() {
            return {
                color: this.fontColor,
                background: this.backgroundColor
            }
        }
    },
    methods: {
    }
})