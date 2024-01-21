const URL = "https://jsonplaceholder.typicode.com/posts/";

// fetch(URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
async function getPost() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
getPost().then((data) => {
  console.log(data);
});
