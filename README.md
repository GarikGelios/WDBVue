# WDBVue
Vue js уроки https://www.youtube.com/playlist?list=PLVfMKQXDAhGWFP61AzOs_PowY7OAaFRHU

## Lesson 1 — Директивы

- ``v-text="message"`` как аттрибут указывает текстовое содержимое тега
- ``{{ name }}`` в теле тэга интерпалирует переменную
- ``v-html="list"`` передаёт полный html-код
- ``v-show="display"`` примает булевое значение для отображения или скрытия элемента, остаётся в DOM
- ``v-if="display"`` примает булевое значение для отображения или скрытия элемента, вырезает из DOM
- ``v-else`` если в директиве v-if будет false, то сработает это значение
- ``v-model="name"`` принимает значение в input и присваивает указанному ключу

## Lesson 2 

- ``v-on:click="countUp"`` вызов события клика на элемент со срабатываением функции
- ``@click="countDown"`` то же самое, но вместо *v-on:* можно писать символ *@*
- ``v-model="url"`` значение в инпуте передаёт в эту переменную (текст, числов, булевое)
- ``v-bind:href="url"`` подставляет переменную в атрибут элемента 

## Lesson 3

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
