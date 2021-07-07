let _Vue;
import createMatcher from "./createMatcher";
import HashHistory from "./history/hash";
import routerView from "./components/view";
import routerLink from "./components/link";
export default class VueRouter {
  constructor(options) {
    console.log("constructor");
    this.matcher = createMatcher(options.routes || []);
    this.mode = options.mode || "hash";
    this.history = new HashHistory(this);
  }
  init(app) {
    // console.log(app)
    // 先根据当前路由 显示指定的组件
    const history = this.history;
    const setupHashLister = () => {
      history.setupLister();
    };
    history.transitionTo(history.getCurrentLocation(), setupHashLister); //跳转后监听路由变化
    history.listen((route) => {
      app._route = route;
    });
  }
  match(location) {
    return this.matcher.match(location);
  }
}
// 安装插件
VueRouter.install = (Vue) => {
  console.log("install");
  _Vue = Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, "_route", this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot;
        // this._router
      }
    },
  });
  Object.defineProperty(Vue.prototype, "$route", {
    //都是属性
    get() {
      return this._routerRoot._route;
    },
  });
  Object.defineProperty(Vue.prototype, "$router", {
    //都是方法
    get() {
      return this._routerRoot._router;
    },
  });
  Vue.component("RouterView", routerView);
  Vue.component("RouterLink", routerLink);
};
