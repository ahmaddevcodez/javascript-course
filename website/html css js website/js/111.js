// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);
// console.log(htmlElementNode.childNodes);

// const headElemntNode = htmlElementNode.childNodes[0];
// const textNode = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];

// console.log(headElemntNode);
// console.log(textNode);
// console.log(bodyElementNode);
//   console.log(htmlElementNode.nextSibling);
// console.log(headElemntNode.nextSibling);
// console.log(headElemntNode.childNodes);

const heading = document.querySelector("h1");
const div = heading.parentNode.parentNode;
div.style.backgroundColor = "#333";
div.style.color = "#efefef";
