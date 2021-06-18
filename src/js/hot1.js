import png2 from "../assets/2.png";
let module1 = function () {
  let count = 0;
  let odiv = document.createElement("div");
  odiv.setAttribute("id", "count");
  odiv.style.background = `url(${png2})`;
  odiv.textContent = count;
  odiv.onclick = function () {
    this.textContent = count++;
  };
  document.querySelector("#app").appendChild(odiv);
};

let module2 = function () {
  console.log("hot2");
};
export { module1, module2 };
