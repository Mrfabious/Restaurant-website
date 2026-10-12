import restImage from "./assets/rest.jpg";
function loadHome() {
        const content = document.querySelector("#content");

        const home = document.createElement("div");
        home.classList.add("home");

        const heading = document.createElement("h1");
        heading.textContent = "Dynamo's bar and lounge";

        const image = document.createElement("img");
        image.src = restImage;
        image.alt = "Restaurant image";

        const paragraph = document.createElement("p");
        paragraph.textContent = "Welcome to our restaurant! We serve delicious food made with fresh ingredient";

        home.appendChild(heading)
        home.appendChild(image)
        home.appendChild(paragraph);

        content.appendChild(home);

}
export default loadHome;