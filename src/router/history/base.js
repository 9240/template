export function createRoute(record, location) {
  let res = [];
  if (record) {
    //record = {path:/about/a,component:xxxx,parent}
    while (record) {
      res.unshift(record);
      record = record.parent;
    }
  }
  return {
    ...location,
    matched: res
  };
}
export default class History {
  constructor(router) {
    this.router = router;
    this.current = createRoute(null, {
      path: "/"
    });
  }
  /**
   * 跳转的核心逻辑，
   * @param {String} location 跳转的目的地
   * @param {function} onComplete complete 回调
   */

  transitionTo(location, onComplete) {
    // /about/a =>{path:'/about/a',matched:[about,aboutA]}
    let route = this.router.match(location);
    console.log(route); //当前路径 要匹配的记录
    if (
      this.current == location &&
      this.current.matched.length === route.matched.length
    ) {
      return; //相同路径不跳转
    }
    this.updateRoute(route);
    onComplete && onComplete();
  }
  updateRoute(route) {
    this.current = route;
    this.cb && this.cb(route);
  }
  listen(cb) {
    this.cb = cb;
  }
}
