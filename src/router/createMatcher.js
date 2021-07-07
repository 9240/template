import createRouteMap from "./createRouteMap";
import { createRoute } from "./history/base";
export default function createMatcher(routes) {
  // routes用户传入的路由配置
  // 扁平化用户传入的数据 创建路由映射表

  // [/,/about,/about/a,/about/b]
  // {/:记录，/about:记录，/about/a:记录，/about/b:记录}
  let { pathList, pathMap } = createRouteMap(routes); //初始化配置
  function addRoutes(routes) {
    //动态添加路由的方法
    createRouteMap(routes, pathList, pathMap); //添加配置
  }
  function match(location) {
    //用来匹配的方法
    // 1.需要找到对应的记录，并且要根据记录产生一个匹配数组
    let record = pathMap[location];
    let local = {
      path: location,
    };
    if (record) {
      //找到记录
      return createRoute(record, local);
    }
    return createRoute(null, local);
  }
  return {
    match,
    addRoutes,
  };
}
