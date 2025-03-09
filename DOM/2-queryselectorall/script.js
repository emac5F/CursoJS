const lista = document.querySelectorAll(".lista");
// console.log(lista, 123);
console.log(lista);

lista.forEach((elemento) => {  
    console.log(elemento);
    elemento.textContent = "Hola";
});
