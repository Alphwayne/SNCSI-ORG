// JavaScript for Dropdown 
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownContent = document.querySelector(".dropdown-content");

    const submenuToggle = document.querySelector(".dropdown-submenu > .dropdown-toggle");
    const submenuContent = document.querySelector(".dropdown-submenu-content");

    dropdownToggle.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link action
        dropdownContent.classList.toggle("show");
    });

    submenuToggle.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link action
        submenuContent.classList.toggle("show");
    });
});

// for the footer 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

