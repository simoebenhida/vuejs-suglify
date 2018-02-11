# Slugify VueJs

A Vue component that slugify your v-model inputs We make a little changement so you can handle the input with your own stuff.

### Demo

<a href="http://devma.net/package/Suglify">Demo</a>

### Installation :

```javascript
npm install vue-suglify
```

### Getting Started

In your script entry point:

```javascript
window.Vue = require("vue");

import VueSuglify from "vue-suglify";

//Vue.component("suglify", VueSuglify); If you want a global Component

const app = new Vue({
  el: "#app",
  components: {
    VueSuglify
  },
  data: {
    title: "",
    titleSlug: ""
  }
});
```

### Usage

Just apply the name and the model name that you want to have the value of the slug

```html
<div id="app">

<input type="text" v-model="title" class="form-control">

<suglify :slugify="title" :slug.sync="titleSlug">
        <input slot-scope="{inputBidding}" v-bind="inputBidding"
               type="text" class="form-control" placeholder="Slug ...">
</suglify>

 </div>

 <script>
 const app = new Vue({
    el: '#app',
    components: {
          VueSuglify
    },
    data: {
         title : '',
         titleSlug : ''
    },
});
</script>
```

The separator can be change by passing `sep` attribute by default is `-`

```html
<suglify :slugify="title" :slug.sync="titleSlug" sep="---">
        <input slot-scope="{inputBidding}" v-bind="inputBidding"
               type="text" class="form-control" placeholder="Slug ...">
</suglify>
```

If You want the first letter to be UpperCase you can use `lowerCase`

```html
<suglify :slugify="title" :slug.sync="titleSlug" :lowerCase="false">
        <input slot-scope="{inputBidding}" v-bind="inputBidding"
               type="text" class="form-control" placeholder="Slug ...">
</suglify>
```

Limit the number letters using `limit` by default is `100`

```html
<suglify :slugify="title" :slug.sync="titleSlug" :limit="30">
        <input slot-scope="{inputBidding}" v-bind="inputBidding"
               type="text" class="form-control" placeholder="Slug ...">
</suglify>
```

You can now pass object named extras where you replace a letter with something of your choice

* In this example we remplace letter `s` with letter `Suglify`

```html
<suglify :slugify="title" :slug.sync="titleSlug" :extras="{'s' : 'Suglify'}">
        <input slot-scope="{inputBidding}" v-bind="inputBidding"
               type="text" class="form-control" placeholder="Slug ...">
</suglify>

### Contributing

You are more than welcome to contribute to this repo with anything you think is useful. fixes are more than welcome.
```
