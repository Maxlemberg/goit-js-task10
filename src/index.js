import style from "./css/style.css";
import menu from "./dataBases/menu.json";
import element from "./templates/elementMenu.hbs";

const listMenu = menu.reduce((acc, e) => {
  return (acc += element(e));
}, "");

const listRef = document.querySelector(".js-menu");
const switcher = document.querySelector(".theme-switch__toggle");
const bodyRef = document.querySelector("body");

listRef.insertAdjacentHTML("beforeend", listMenu);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const handleTheme = function () {
  if (
    bodyRef.classList.contains("light-theme") ||
    !bodyRef.getAttribute("class")
  ) {
    bodyRef.classList.add("dark-theme");
    bodyRef.classList.remove("light-theme");
    localStorage.setItem("DARK", Theme.DARK);
    localStorage.removeItem("LIGHT");
  } else {
    bodyRef.classList.add("light-theme");
    bodyRef.classList.remove("dark-theme");
    localStorage.setItem("LIGHT", Theme.LIGHT);
    localStorage.removeItem("DARK");
  }
};

switcher.addEventListener("change", handleTheme);

if (localStorage.getItem("LIGHT")) {
  bodyRef.classList.toggle(localStorage.getItem("LIGHT"));
}
if (localStorage.getItem("DARK")) {
  bodyRef.classList.toggle(localStorage.getItem("DARK"));
  switcher.checked = true;
}
