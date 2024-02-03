document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");


    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    });


    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            this.style.color = "#ffcc00";
        });
        item.addEventListener("mouseout", function () {
            this.style.color = "#fff";
        });
    });
});
