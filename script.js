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

    // Apply the same centered site identity to every page.
    const headerInfo = document.querySelector(".header-info");

    if (headerInfo) {
        headerInfo.innerHTML = `
            <h1>Marketing and Entrepreneurship student</h1>
            <p>at Iowa State University</p>
        `;
    }

    const sharedHeaderStyles = document.createElement("style");
    sharedHeaderStyles.textContent = `
        header {
            position: relative;
        }

        .header-info {
            position: absolute;
            inset: 0;
            width: 100%;
            padding: 25px 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            pointer-events: none;
        }

        .header-info h1 {
            font-size: 21px;
            color: #1d3557;
            margin-bottom: 3px;
        }

        .header-info p {
            color: #4d6989;
            font-size: 17px;
            font-weight: 600;
            letter-spacing: 0.01em;
        }

        .logo {
            position: relative;
            z-index: 1;
        }

        @media (max-width: 900px) {
            header {
                position: relative;
            }

            .header-info {
                position: relative;
                inset: auto;
                width: 100%;
                padding: 10px 20px 25px;
            }
        }
    `;
    document.head.appendChild(sharedHeaderStyles);

});
