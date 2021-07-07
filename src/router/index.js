import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home.vue";
import About from "../view/About.vue";
// import VueRouter from "./vueRouter";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: Home, name: "home" },
    {
      path: "test1",
      name: "test1",
      component: {
        render(h) {
          return <h1>test1</h1>;
        },
      },
    },
    {
      path: "/about",
      component: About,
      name: "about",
      children: [
        {
          path: "a",
          component: {
            render(h) {
              return h("h2", "about -a");
            },
          },
        },
        {
          path: "b",
          component: {
            render(h) {
              return h("h2", "about -b");
            },
          },
        },
      ],
    },
  ],
});
