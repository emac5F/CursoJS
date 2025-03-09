const lista = document.querySelectorAll('.item');

lista.forEach(function (elemento, i ) {
    if (i % 2) {
        elemento.classList.toggle('celeste');
    }
});