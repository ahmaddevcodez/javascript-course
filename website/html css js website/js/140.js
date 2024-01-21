const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 400) {
    const json = JSON.parse(xhr.response);
    const id = json[3].id;
    console.log(id);
    // console.log(json);
    const URL2 = `${URL}/${id}`;
    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", URL2);
    xhr2.onload = () => {
      let response = JSON.parse(xhr2.response);
      console.log(response);
    };
    xhr2.send();
  }
};
xhr.send();
