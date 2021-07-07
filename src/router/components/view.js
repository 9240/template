export default {
  functional: true,
  render(h, { parent, data }) {
    // /about/a  matched = [about,aboutA]
    let route = parent.$route;
    let matched = route.matched;
    data.routerView = true;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      parent = parent.$parent;
    }
    console.log(matched);
    console.log(depth);
    let record = matched[depth];
    if (!record) {
      return h();
    }
    let component = record.component;
    console.log(data);
    return h(component, data);
  },
};
