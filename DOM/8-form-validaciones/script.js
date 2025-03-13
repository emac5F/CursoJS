console.log("a");

const addButton = document.querySelector("button");
const parent = document.querySelector(".lista");

addButton.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  addTask(input.value);
  input.value = "";
});

function addTask(text) {
  const item = document.createElement("li");
  item.innerText = text;
  parent.appendChild(item);
}

parent.addEventListener("click", function (event) {
  markDone(event.target);
});

function markDone(task) {
  task.classList.toggle("marked");
}
