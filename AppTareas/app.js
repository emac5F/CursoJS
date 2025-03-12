const taskContainer = document.querySelector('.task__container');
const taskForm = document.querySelector('.task__form');
const taskTemplate = document.querySelector(".task__template");
const taskContainerButtons = document.querySelector(".task__buttons");

// Evento para agregar una tarea
taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputFormValue = taskForm.querySelector(".task__input").value;
    const task = createTask(inputFormValue);
    renderTask(task);
    taskForm.reset();
});

// Evento para eliminar una tarea
taskContainer.addEventListener('click', function(e) {
    const currentElement = e.target;
    // Eliminar tarea
    if(currentElement.matches('.task__delete, .task__delete *')) {
        const currentTask = currentElement.closest('[data-task]');
        currentTask.remove();
    }
    // Marcar tarea como completada
    else if(currentElement.matches(".task__status")) {
        const currentTask = currentElement.closest("[data-task]");
        const span = currentTask.querySelector(".task__name");
        span.contenteditable = !currentElement.checked;
    }
});

// navegar entre tareas
taskContainerButtons.addEventListener("click", function(e) {
    const currentElement = e.target;
    if(currentElement.matches(".task__btn")) {
        const currentButtonActive = taskContainerButtons.querySelector(".task__btn--active");
        currentButtonActive.classList.remove("task__btn--active");

        currentElement.classList.add("task__btn--active");
    }
});

//funcion que crea la tarea
function createTask(name) {
    const task = {
        name,
        done: false,
        id: Date.now()
    }
    return task;
}

// funcion que renderiza las tareas en el dom
function renderTask(task) {
    const currentTaskElement = taskTemplate.content.cloneNode(true);

    const p = currentTaskElement.querySelector('[data-task]');
    p.setAttribute("data-id", task.id);

    const span =  currentTaskElement.querySelector(".task__name");
    span.textContent = task.name;

    const inputCheckbox = currentTaskElement.querySelector(".task__status");
    inputCheckbox.checked = task.done;

    taskContainer.append(currentTaskElement);
}
