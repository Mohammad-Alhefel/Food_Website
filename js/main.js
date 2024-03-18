let haeder = document.querySelector("header");
let navbar = document.querySelector(".navbar");
let menu = document.querySelector("#menu-icon");

window.addEventListener("scroll", () => {
  haeder.classList.toggle("active", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};
