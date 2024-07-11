function openNav() {
    document.querySelector(".navbar-item > ul").style.display = "block";
    document.querySelector(".fa-times").style.display = "block";
    }

    function closeNav() {
        document.querySelector(".navbar-item > ul").style.display = "none";
        }
        
let openMenu = document.querySelector("#open-menu")
let menu = document.querySelector(".said-menu li > ul")

openMenu.addEventListener(("mouseover") ,e => {
    menu.style.display = "block"
})

openMenu.addEventListener(("click") ,e => {
    menu.style.display = "block"
})

openMenu.addEventListener(("mouseout") ,e => {
    menu.style.display = "none"
})