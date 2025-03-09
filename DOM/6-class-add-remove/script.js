const div = document.querySelectorAll('div');

div[0].addEventListener('click', function(event) {
    div[1].classList.add('active');
});

div[1].addEventListener('click', function(event) {
    div[0].classList.add('active');
});