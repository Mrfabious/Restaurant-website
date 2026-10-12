function loadMenu() {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const heading = document.createElement('h1');
    heading.textContent = "Our Menu";

    const item1 = document.createElement("p");
    item1.textContent = "Pizza - $30";

    const item2 = document.createElement("p");
    item2.textContent = "Burger - $30";

    const item3 = document.createElement("p");
    item3.textContent = "Pasta - $30";

    menu.appendChild(heading);
    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);

    content.appendChild(menu);

}
export default loadMenu;