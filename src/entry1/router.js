import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/component1",
      name: "entry1Home",
      component: {
        render(h) {
          return h("div", "入口1组件1");
        },
      },
    },
    {
      path: "/component2",
      component: {
        render(h) {
          return h("div", "入口1组件2");
        },
      },
    },
    {
      path: "/component3",
      component: {
        render(h) {
          return h("div", "入口1组件3");
        },
      },
    },
  ],
});
