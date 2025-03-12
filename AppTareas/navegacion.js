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

// lista de tareas
list.addEventListener('click', function(e){
    const currentElement = e.target;
    if(currentElement.matches('.element-p')) {
       const listElement = currentElement.closest(".element");
       listElement.classList.toggle("element-show");
       listElement.querySelector(".rotate").classList.toggle("rotate-show");
    }
});  





//con tempalte se podria crear un monton de tareas y son completamente independientes
const tempalte = document.querySelector('template');

document.body.append(tempalte.content.cloneNode(true));
document.body.append(tempalte.content.cloneNode(true));
document.body.append(tempalte.content.cloneNode(true));
document.body.append(tempalte.content.cloneNode(true));
document.body.append(tempalte.content.cloneNode(true));
document.body.append(tempalte.content.cloneNode(true)); 