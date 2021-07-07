import Vue from "vue";
import Vuex from "vuex";
// import Vuex from './vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "zhangsan",
    age: 20,
    count: 0
  },
  getter: {
    getName: state => {
      return state.name;
    },
    getAge: state => {
      return state.age;
    }
  },
  mutations: {
    addCount(state, arg) {
      state.count += arg;
    }
  },
  actions: {
    asyncAdd({ commit }, arg) {
      setTimeout(() => {
        commit("addCount", arg);
      }, 1000);
    }
  },
  modules: {}
});
