Vue.component ('task', {
    props: ['taskname'],
    template: '<li> {{ taskname }} </li>',
});

Vue.component ('card', {
    template: '#card',
    props: ['cardtitle']
});


Vue.component ('book', {
    template: '#books',
    props: ['bookauthor', 'booktitle', 'bookdescription']
})


new Vue ({
    el: '#app',
    data: {
        author: 'Джефф Сазерленд',
        title: 'Scrum. Революционный метод управления проектами',
        description: 'Книга основателя методики Scrum, которая поможет вам реализовывать проекты в несколько раз быстрее и эффективнее.'
    }
});