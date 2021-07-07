import Vue from "vue";
import entry2 from "./entry2.vue";
import router from "./entry2/router.js";
new Vue({
  router,
  render: (h) => h(entry2),
}).$mount("#entry2");
