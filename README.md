# WDBVue
Vue js уроки https://www.youtube.com/playlist?list=PLVfMKQXDAhGWFP61AzOs_PowY7OAaFRHU

## Lesson 2 — Директивы

- ``v-text="message"`` как аттрибут указывает текстовое содержимое тега
- ``{{ name }}`` в теле тэга интерпалирует переменную
- ``v-html="list"`` передаёт полный html-код
- ``v-show="display"`` примает булевое значение для отображения или скрытия элемента, остаётся в DOM
- ``v-if="display"`` примает булевое значение для отображения или скрытия элемента, вырезает из DOM
- ``v-else`` если в директиве v-if будет false, то сработает это значение
- ``v-model="name"`` принимает значение в input и присваивает указанному ключу

## Lesson 3 — События

- ``v-on:click="countUp"`` вызов события клика на элемент со срабатываением функции
- ``@click="countDown"`` то же самое, но вместо *v-on:* можно писать символ *@*
- ``v-model="url"`` значение в инпуте передаёт в эту переменную (текст, числов, булевое)
- ``v-bind:href="url"`` подставляет переменную в атрибут элемента 

## Lesson 4 — CSS

- ``v-bind:class="[sizeToggle ? 'large' : '', {'rounded' :  isRounded}]"`` подстановке классов в зависимости от булевого состояния переменных
- ``v-bind:disabled="disabled"`` то же смое
- ``v-bind:style="styles"`` подстановке стилей из одной переменной собранной из инпутов в помощью *v-model*

```js
computed: {
        styles: function() {
            return {
                color: this.fontColor,
                background: this.backgroundColor
            }
        }
    },
```

## Lesson 5 — Компоненты

- глобальные компаненты надо описывать в отдельном экземпляре: свой html-тэг *task* отобразит содержимое ``template:``
 
```js
Vue.component ('task', {
    template: '<li> 1 task </li>',
});
```

- чтобы вписывать контент в свой тэг html-тэг, следует использовать тэг *slot* ``template: '<li><slot></slot></li>'``
- в любом месте html-документа можно создать полноценный компонент внутри тэга *template* с указанием его id ← на этот id и следует ссылаться в экземляре вместо написания там html:``template: '#card'``
- передавай значения в компоненты через свои аттрибуты ``<task taskname="Hey! Task is here"></task>``

```js
props: ['taskname'],
    template: '<li> {{ taskname }} </li>',
```

- значения _title_ из _data_ надо передавать в свой тэг как  ``v-bind:booktitle='title'``, предварительно указав его в ``props: ['booktitle']`` и тогда в _temlate_ можно использовать ``{{ booktitle }}``

## Lesson 6 — Анимации

- анимуруемую область надо обернуть в тэг *transition* и указать ему название аттрибута ``name='fade'`` для которого будет описана анамация
- name тэга *transition* используется как приставка для классов в которых описывается анимация (см. [документацию](https://ru.vuejs.org/v2/guide/transitions.html) там много текста)

```css
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}
.fade-enter,
.fade-leave {
    opacity: 0;
}
```

## Lesson 7 — Маршрутизация

- подключается отдельно ``<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>``
- ссылки оборачиваются тэгом ``<router-link to="/foo">Перейти к Foo</router-link>``
- место отображаемого контента обозначается тэгом ``<router-view></router-view>``
- в js файле шаблон надо привязать к переменной и потом указать его маршрут (см. [документацю](https://router.vuejs.org/ru/guide/#javascript) там много текста)

## Lesson 7 — Tasklist

- передавай значения из инпута реактивно в переменную с помощью ``v-model="tasksinput"``
- в переборе массива указывай и таску и её индекс ``v-for="(task, index) in tasklist"`` понадобится для работы конкретнон над ней, например удаления
