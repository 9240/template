import Vue from "vue";
class Store {
  constructor(opt) {
    // this.state = opt.state||{}
    this.vm = new Vue({
      data: {
        state: opt.state
      }
    });
    // getters
    let getters = opt.getter || {};
    this.getters = {};
    Object.keys(getters).forEach(getterName => {
      Object.defineProperty(this.getters, getterName, {
        get: () => {
          return getters[getterName](this.state);
        }
      });
    });
    // mutations
    let mutations = opt.mutations || {};
    this.mutations = {};
    Object.keys(mutations).forEach(mutationsName => {
      this.mutations[mutationsName] = arg => {
        mutations[mutationsName](this.state, arg);
      };
    });
    // action
    let actions = opt.actions;
    this.actions = {};
    Object.keys(actions).forEach(actionsName => {
      this.actions[actionsName] = arg => {
        actions[actionsName](this, arg);
      };
    });
  }
  get state() {
    return this.vm.state;
  }
  // commit
  commit = (method, arg) => {
    this.mutations[method](arg);
  };
  // dispatch
  dispatch(method, arg) {
    this.actions[method](arg);
  }
}

let install = function(Vue) {
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store;
      } else {
        this.$store = this.$parent && this.$parent.$store;
      }
    }
  });
};
let Vuex = {
  Store,
  install
};

export default Vuex;
