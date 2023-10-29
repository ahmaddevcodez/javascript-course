const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   console.log("Ahmad");
//   console.log("value of This");
//   console.log(this);

//   main_heading.style.transition = "border 1s, padding 0.5s";
//   main_heading.style.border = "13px groove #0C8C";
//   main_heading.style.padding = "20px";

//   main_heading.style.width = "100%";
// });
btn.addEventListener("click", function () {
  console.log("Ahmad");
  console.log("value of This");
  console.log(this);

  main_heading.style.transition = "border 1s, padding 0.5s";
  main_heading.style.border = "13px groove #0C8C";
  main_heading.style.padding = "20px";

  main_heading.style.width = "100%";
});
