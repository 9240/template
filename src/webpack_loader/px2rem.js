const Css = require("css");
module.exports = function loader(source, map, meta) {
  if (!this.getOptions().exclude.test(this.resource)) {
    var cssArr = Css.parse(source);
    cssArr.stylesheet.rules.forEach((items) => {
      items.declarations.forEach((item) => {
        if (item.value.endsWith("px")) {
          item.value = item.value.replace("px", "rem");
        }
      });
    });
    return Css.stringify(cssArr);
  } else {
    return source;
  }
};
