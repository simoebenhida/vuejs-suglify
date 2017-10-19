# Slugify VueJs

A Vue component that slugify your v-model

### Installation :

```javascript
npm install vue-suglify
```

### Getting Started

In your script entry point:

```javascript
window.Vue = require('vue');

import VueSuglify from 'vue-suglify'

const app = new Vue({
    el: '#app',
    components: {
          VueSuglify
    },
    data: {
         title : '',
         slug : ''
    },
});
```

### Usage

Just apply the name and the model name that you want to have the value of the slug

```html

 <div id="app">

 <input type="text" v-model="title">

 <vue-suglify name="title" model="slug"></vue-suglify>

 </div>

 <script>
 const app = new Vue({
    el: '#app',
    components: {
          VueSuglify
    },
    data: {
         title : '',
         slug : ''
    },
});
</script>
```

You can also disable the input by passing the ``disabled`` attribute as boolean

```javascript
 <vue-suglify name="title" model="slug" disabled="true"></vue-suglify>
```
Or The input class as ``classname`` attribute
```javascript
<vue-suglify name="title" model="slug" classname="form-control" disabled="true"></vue-suglify>
```
The separator can be change by passing ``sep`` attribute by default is ``-``
```javascript
<vue-suglify name="title" model="slug" sep="--"></vue-suglify>
```
If You want the first letter to be UpperCase you can use `` lowerCase ``
```javascript
<vue-suglify name="title" model="slug" :lowerCase="false"></vue-suglify>
```
For The errors you need to add ``is-danger`` class css and pass the ``errors`` attribute as boolean
```css
<style>
    .is-danger {
        border-color:#ff3860
    }
</style>
<vue-suglify name="title" model="slug" :errors="true"></vue-suglify>
```
### Demo

<a href="http://devma.net/demo/suglify">Check Demo Here</a>

### Contributing

You are more than welcome to contribute to this repo with anything you think is useful. fixes are more than welcome.
