import png2 from "../assets/2.png";
let hot1 = function () {
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

export { hot1 };
