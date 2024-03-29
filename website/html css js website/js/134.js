function myPromise() {
  return new Promise((reject, resolve) => {
    const value = true;
    setTimeout(() => {
      if (value) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

myPromise()
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("not resolved");
  });
