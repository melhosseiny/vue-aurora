import VToast from './VToast.vue';

const plugin = {
  install: function (Vue) {
    const Toast = Vue.extend(VToast);
    const instance = new Toast();
    instance.$mount();
    document.body.prepend(instance.$el);

    Vue.prototype.$toast = function (options) {
      console.log(options);
      instance.show(options.message);
    }
  }
}

export default plugin;
