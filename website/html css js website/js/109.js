// get element by class name
// get element by querySe2lector
// ARRAY LIKE OBJECT MEAN ---> LENGTH , INDEXING (PROPERTIES)
// let navItems = document.getElementsByTagName("a");
// console.log(navItems.length);

// simple for loop
//  for of loop
// forEach (WE CANNOT USE FOREACH LOOP BY HTML COLLECTION)
// for (let i = 0; i < navItems.length; i++) {
//   const navItemStyle = navItems[i];
//   navItemStyle.style.backgroundColor = "#000"; // Changing background color to blue
//   navItemStyle.style.color = "gold"; // Changing text color to blue
//   navItemStyle.style.fontWeight = "bolder"; // Changing text color to blue
// }
// for (let navItemStyle of navItems) {
//   navItemStyle.style.backgroundColor = "#000"; // Changing background color to blue
//   navItemStyle.style.color = "gold"; // Changing text color to blue
//   navItemStyle.style.fontWeight = "bolder"; // Changing text color to blue
// }
// let navItems = document.querySelectorAll(". nav-item");
// console.log(navItems[0]);

let navItems = document.querySelectorAll("a");
console.log(navItems);

//  AP NODE LIST KE SATH SARE YE WALE LOOP ISTAMAL KR SAKTA HAAAN
//                                   |
//                                   |
//                                   |
//                                  \_/
//                            simple for loop
//                            for of loop
//                            forEach
