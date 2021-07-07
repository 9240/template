export default function () {
  let odiv = document.createElement("div");
  odiv.setAttribute("id", "number");
  odiv.textContent = "12345";
  document.querySelector("#app").appendChild(odiv);
}
