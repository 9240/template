import Vue from "vue";
import entry1 from "./entry1.vue";
import router from "./entry1/router.js";
import "jquery";
new Vue({
  router,
  render: (h) => h(entry1),
}).$mount("#entry1");
