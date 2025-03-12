const buttonMenu = document.querySelector('.button');
const buttonImg = document.querySelector('.button__img');

buttonMenu.addEventListener('click', function() {
    if(buttonMenu.getAttribute("data-info") === "open") {
        buttonImg.src = "./assets/close.svg";
        buttonMenu.setAttribute("data-info", "close");
    } else{
        buttonImg.src = "./assets/menu.svg";
        buttonMenu.setAttribute("data-info", "open");
    }
});