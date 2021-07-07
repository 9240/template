import { module1 } from "./js/hot1.js";
import hot2 from "./hot2.js";
import hot3 from "./hot3.js";
import "./style/index.css";
import "./style/index.styl";
module1();
hot2();
hot3();
if (module.hot) {
  module.children
    .filter(
      (item) => item.endsWith(".js") && !item.startsWith("./node_modules")
    )
    .forEach((item) => {
      console.log(item);
      module.hot.accept(
        item,
        function () {
          console.log(item + "———————————————————change");
          console.log(module.hot._acceptedDependencies[item]);
        },
        function (err, arg) {
          console.log(arg);
        }
      );
    });
  // module.hot.accept("./hot1.js", function () {
  //   console.log("hot1.js———————————————————change");
  // });
  // module.hot.accept("./hot2.js", function () {
  //   console.log("hot2.js———————————————————change");
  //   document
  //     .querySelector("body")
  //     .insertBefore(hot2(), document.querySelector("#number"));
  // });
  // module.hot.accept("./hot3.js", function () {
  //   console.log("hot3.js———————————————————change");
  // });
}
