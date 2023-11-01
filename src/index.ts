const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const mobileNav = document.getElementById("mobile-nav");

if (menuOpen && mobileNav) {
  menuOpen.addEventListener("click", () => {
    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("flex");
  });
}

if (menuClose && mobileNav) {
  menuClose.addEventListener("click", () => {
    mobileNav.classList.remove("flex");
    mobileNav.classList.add("hidden");
  });
}
