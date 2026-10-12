import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./about.js";
import loadAbout from "./about.js";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

function clearContent() {
    content.innerHTML = "";
}

homeButton.addEventListener("click", () => {
    clearContent();
    loadHome();
});

menuButton.addEventListener("click", () => {
    clearContent();
    loadMenu();
});

aboutButton.addEventListener("click", () => {
    clearContent();
    loadAbout();
});

loadHome();