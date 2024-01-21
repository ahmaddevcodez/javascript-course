function ricePromise() {
  const bucket = ["coffee", "chip", "vegetable", "salt", "rice"];
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("salt") &&
      bucket.includes("rice")
    ) {
      resolve({ value: "friedrice" });
    } else {
      reject("could not do it");
    }
  });
}

ricePromise()
  .then((myfriedRice) => {
    console.log("Let's eat", myfriedRice.value);
  })
  .catch((error) => {
    console.log(error);
  });
