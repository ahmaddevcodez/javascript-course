// const body = document.body;
// const btn = document.querySelector(".btn");
// const intervalId = setInterval(() => {
//   const red = Math.floor(Math.random() * 225);
//   const green = Math.floor(Math.random() * 225);
//   const blue = Math.floor(Math.random() * 225);
//   const RGB = `rgb(${red},${green},${blue})`;
//   body.style.background = RGB;
// }, 800);
// btn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   btn.textContent = button.style.background;
// });

const btn = document.querySelector(".btn");
let gradientInterval;

btn.addEventListener("click", () => {
  if (gradientInterval) {
    clearInterval(gradientInterval);
    btn.textContent = "Start Gradient";
    gradientInterval = undefined;
  } else {
    btn.textContent = "Stop Gradient";
    gradientInterval = startGradient();
  }
});

function startGradient() {
  return setInterval(() => {
    // Generate random colors for the gradient stops
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Set the gradient color
    const gradientColor = `rgb(${red},${green},${blue})`;
    const gradientColor2 = `rgb(${red},${blue},${green})`;
    const gradientColor3 = `rgb(${blue},${green},${red})`;
    const gradientColor4 = `rgb(${green},${red},${blue})`;
    const gradientColor5 = `rgb(${green},${blue},${red})`;
    const gradientColor6 = `rgb(${red},${green},${blue})`;

    // Apply the color to the gradient
    document.body.style.backgroundImage = `linear-gradient(to right, ${gradientColor}, ${gradientColor2}, ${gradientColor3},${gradientColor4}, ${gradientColor5}, ${gradientColor6}, ${gradientColor3})`;
  }, 1000);
}
