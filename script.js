const hamburger = document.querySelector(".hamburger");
const menu_bar = document.querySelector(".navbar-menu .menu_bar");

hamburger.addEventListener("click", () => {
    menu_bar.classList.toggle("show");
});

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    // Body ki 'dark-mode' class add/remove chestundi
    document.body.classList.toggle("dark-mode");

    // Button icon change cheyadaniki (Optional)
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});