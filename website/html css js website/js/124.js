const btn = document.querySelector(".btn-1");
const rgb = document.querySelector("#rgb");
let body = document.body;
function randomColorGenerator() {
  const red = Math.floor(Math.random() * 225);
  const green = Math.floor(Math.random() * 225);
  const blue = Math.floor(Math.random() * 225);
  const randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
}
btn.addEventListener("click", () => {
  const randomColor = randomColorGenerator();
  body.style.background = randomColor;
  rgb.style.color = randomColor;
  rgb.textContent = randomColor;
  btn.style.background = "transparent";
  btn.style.border = "2px solid white";
});
