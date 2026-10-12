function loadAbout() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const phone = document.createElement("p");
    phone.textContent = "Phone: +2349137943318";

    const address = document.createElement("p");
    address.textContent = "Address: 123 Food street, Kentucky";

    const email = document.createElement("p");
    email.textContent = "Email: adewaletokunbo157@gmail.com";

    content.appendChild(heading);
    content.appendChild(phone);
    content.appendChild(address);
    content.appendChild(email);

}
export default loadAbout;