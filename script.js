new Vue ({
    el: '#app',
    data: {
        headingtext: 'Tasklist',
        tasksinput: '',
        counttasks: 1,
        tasklist: [
            { number: 1, text: 'Create your own tasks!'}
        ]
    },
    methods: {
        addTask: function () {
            if (this.tasksinput !== '') {
                this.counttasks ++;
                this.tasklist.push ({
                    number: this.counttasks,
                    text: this.tasksinput
                })
                this.tasksinput = '';
            }
        },
        deleteTask: function (taskIndex) {
            this.tasklist.splice(taskIndex, 1);
        }
    }
})