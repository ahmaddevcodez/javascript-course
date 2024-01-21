const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeText(
  element,
  text,
  color,
  time,
  onSuccessCallback,
  onFailureCallback
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("Allah hafiz");
      }
    }, time);
  });
}
changeText(heading1, "Ahmad", "#232678", 1000)
  .then(() => {
    return changeText(heading2, "Waleed", "#340191", 2000);
  })
  .then(() => {
    return changeText(heading3, "Zain", "#140191", 3000);
  })
  .then(() => {
    return changeText(heading4, "Hafiz", "#390191", 4000);
  })
  .then(() => {
    return changeText(heading5, "Aiza", "#110191", 4000);
  })
  .catch((error) => {
    alert("error");
  });
