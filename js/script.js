const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");

open.addEventListener("click", () => {
  nav.classList.add("nav-active");
  main.classList.add("main-active");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav-active");
  main.classList.remove("main-active");
});
