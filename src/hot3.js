import png1 from "./assets/1.png";
export default function () {
  let img = document.createElement("img");
  img.src = png1;
  document.querySelector("#app").appendChild(img);
}
