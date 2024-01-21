const URL = "https://jsonplaceholder.typicode.com/posts";

function sendsRequest(method, url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something went wrong"));
      }
    };
    xhr.onerror = function () {
      reject(new Error("Something went wrong"));
    };

    xhr.send();
  });
}

sendsRequest("GET", URL)
  .then((response) => {
    const data = JSON.parse(response);
    return data;
  })
  .then((data) => {
    console.log(data[8]); // Log the element at index 8 of the array
    return data;
  })
  .then((data) => {
    const id = data[3].id; // Access the id property of the element at index 3
    const url = `${URL}/${id}`;
    return sendsRequest("GET", url); // Use sendsRequest instead of sendRequest
  })
  .then((newResponse) => {
    const newData = JSON.parse(newResponse);
    console.log(newData);
  })
  .catch((error) => {
    console.error(error); // Log errors to the console
  });
