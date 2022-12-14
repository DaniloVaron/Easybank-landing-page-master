addEventListener("DOMContentLoaded", () => {
  const button_nav = document.querySelector(".button_nav");
  if (button_nav) {
    button_nav.addEventListener("click", () => {
      const nav_menu = document.querySelector(".nav_menu");
      nav_menu.classList.toggle("nav_hidden");
      const nav_icon = document.querySelector(".nav_icon");
      nav_icon.classList.toggle("icon_hamburger");
      nav_icon.classList.toggle("icon_close");
    });
  }
});
