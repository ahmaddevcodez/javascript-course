let element = document.getElementById("navbar");

const navTemplate = `
<h1 class="logo">hennry Codes</h1>
<ul class="nav-items">
  <li class="nav-item"><a href="#home">Home</a></li>
  <li class="nav-item"><a href="">Todo</a></li>
  <li class="nav-item"><a href="">Sign Up</a></li>
</ul>`;

if (element) {
  element.innerHTML = navTemplate;
}
