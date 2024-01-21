const URL = "https://jsonplaceholder.typicode.com/posts/";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     const response = xhr.response;
//     const json = JSON.parse(response);
//     console.log(typeof json);
//   }
// };
xhr.onload = function () {
  console.log(xhr.readyState);
  const response = xhr.response;
  const json = JSON.parse(response);
  console.log(json);
};
xhr.send();
