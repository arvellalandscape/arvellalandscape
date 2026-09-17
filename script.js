window.addEventListener("load", () => {
  setTimeout(() => document.body.classList.add("loaded"), 350);
});

const nav = document.getElementById("nav");


document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".desktop-menu").classList.toggle("mobile-open");
});
