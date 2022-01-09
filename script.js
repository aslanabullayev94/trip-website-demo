
document.querySelector(".sandwich-icon").addEventListener("click", openMenu);

function openMenu() {
    document.querySelector(".menu").classList.toggle("sandwich");
    document.querySelector(".sandwich-icon").classList.toggle("fa-window-close");
    document.querySelector(".sandwich-icon").classList.toggle("fa-bars");
}