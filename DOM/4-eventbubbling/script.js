const article = document.querySelector('.my-article');
const div = document.querySelector('.my-div');
const boton = document.querySelector('.my-button');

article.addEventListener('click', function () {
    console.log('Hicimos click en ' + article.classList); 
});

div.addEventListener('click', function (event) {
    console.log('Hicimos click en ' + div.classList);
    event.stopPropagation(); 
});

boton.addEventListener("click", function (event) {
    console.log('Hicimos click en ' + boton.classList); 
    event.stopPropagation();
});

document.addEventListener('click', function () {
    console.log('Hicimos click en todo el body'); 
});