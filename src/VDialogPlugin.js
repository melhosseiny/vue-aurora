import VDialog from './VDialog.vue';

const plugin = {
  install: function (Vue) {
    const Dialog = Vue.extend(VDialog);
    const instance = new Dialog();
    instance.$mount();
    document.body.prepend(instance.$el);

    Vue.prototype.$dialog = function (options) {
      console.log(options);
      instance.$slots.default = ['Some content'];
      instance.show();
    }
  }
}

export default plugin;
