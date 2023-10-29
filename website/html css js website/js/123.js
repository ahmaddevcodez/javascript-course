const buttons = document.querySelectorAll(".container button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    document.body.style.backgroundColor = "#3D9494";
    button.textContent = "Baber waleed ka abu";
  });
});
