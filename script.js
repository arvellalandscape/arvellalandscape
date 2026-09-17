document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".desktop-menu");

  if (!nav) return;

  // Paksa navbar tetap menempel di viewport
  const lockNav = () => {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.width = "100%";
    nav.style.zIndex = "2147483647";
    nav.style.transform = "translate3d(0,0,0)";
  };

  lockNav();

  window.addEventListener("scroll", lockNav, { passive: true });
  window.addEventListener("resize", lockNav, { passive: true });

  // Mobile menu
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("mobile-open");
    });
  }
});
