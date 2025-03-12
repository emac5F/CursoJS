const buttonMenu = document.querySelector('.button');
const buttonImg = document.querySelector('.button__img');

const nav = document.querySelector('.nav');

const list = document.querySelector('.list');

buttonMenu.addEventListener('click', function() {
    if(buttonMenu.getAttribute("data-info") === "open") {
        buttonImg.src = "./assets/close.svg";
        buttonMenu.setAttribute("data-info", "close");
    
        nav.classList.add('nav--show');

    } else{
        buttonImg.src = "./assets/menu.svg";
        buttonMenu.setAttribute("data-info", "open");

        nav.classList.remove('nav--show');
    }
});

list.addEventListener('click', function(e){
    const currentElement = e.target;
    if(currentElement.matches('.element-p')) {
       const listElement = currentElement.closest(".element");
       listElement.classList.toggle("element-show");
    }
});   