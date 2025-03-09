const taskContainer = document.querySelector('.task__container');
const taskForm = document.querySelector('.task__form');
const taskTemplate = document.querySelector(".task__template");
const taskContainerButtons = document.querySelector('.task__buttons');

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
    const currentTaskElement = taskTemplate.textContent.cloneNode(true);
    currentTaskElement.querySelector('[data-task]').setAttribute('data-id', task.id);
    currentTaskElement.querySelector('.task__name').textContent = task.name;
    currentTaskElement.querySelector('.task__status').checked = task.done;
}
