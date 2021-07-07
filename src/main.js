import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

//引入svg组件
import IconSvg from "@/components/IconSvg";

//全局注册icon-svg
Vue.component("icon-svg", IconSvg);
Vue.config.productionTip = false;
console.log(router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
