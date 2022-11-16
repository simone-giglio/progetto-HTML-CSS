//hamburger-menu
const burgerMenu = document.querySelector(".burger");
const navbarMenu = document.querySelector(".navbar-nav");
burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navbarMenu.classList.toggle("active");
    });
//logo-animation//
const logo = document.querySelectorAll("#logo-path");
for(let i = 0; i<logo.length; i++){
    console.log("Letter ${i} is ${logo[i].getTotalLength()}");
}
//button-hide-function//
function myFunction() {
    let x = document.getElementById("text-container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}