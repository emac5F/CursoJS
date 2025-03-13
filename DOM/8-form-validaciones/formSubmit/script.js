const myForm = document.querySelector("form");
const error = document.createElement("text");
error.innerText = "verificar campos vacíos";

function verifyForm() {
  const items = document.querySelectorAll("input");

  items.forEach((item) => {
    if (item.value == "") {
      item.classList.add("error");
      myForm.appendChild(error);
    } else {
      return true;
    }
  });
}

myForm.addEventListener("submit", function (event) {
  if (!verifyForm()) {
    event.preventDefault(); // Previene el envío del formulario hasta que se verifique la validación
  }
});
