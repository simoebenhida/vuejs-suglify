// On plugin.js file
import Suglify from './Suglify.vue';

const VueSuglify = {
  install (Vue) {
    Vue.component('suglify', Suglify)
  }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueSuglify)
}

export default VueSuglify
