document.addEventListener("DOMContentLoaded", function () {

    const nav = document.createElement("nav");
    nav.id = "main-navigation";

    nav.innerHTML = `
        <div class="nav-container">

            <a href="index.html">About Me</a>

            <a href="work-experience.html">Work Experience</a>

            <a href="leadership.html">Leadership</a>

            <a href="projects.html">Projects</a>

            <a href="contact.html">Contact</a>

        </div>
    `;

    const placeholder = document.getElementById("navigation-placeholder");

    if (placeholder) {
        placeholder.appendChild(nav);
    }

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")) {

            link.classList.add("active");
        }

    });

});
