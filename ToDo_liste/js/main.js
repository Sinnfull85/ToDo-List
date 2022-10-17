const KEY_ENTER = 13;

document.addEventListener("DOMContentLoaded", () => {
    const APP = document.getElementById("App");

    const newTodo = document.getElementById("neuTodo");
    const addTodo = document.getElementById("addTodo");
    const todoList = document.getElementById("todoList");

    addTodo.addEventListener("click", handleButtonClick);

    function handleButtonClick() {
        if (newTodo.value !== "") {
            const liElement = document.createElement("li");
            const divContainer = document.createElement("div");

            const inputCheckbox = document.createElement("input");
            const toDoText = document.createElement("label");

            const divButton = document.createElement("div");
            const editBtn = document.createElement("button");
            const deleteBtn = document.createElement("button");

            deleteBtn.innerHTML = "Löschen";
            editBtn.innerHTML = "Bearbeiten";
            deleteBtn.classList.add("delete");
            editBtn.classList.add("edit");

            toDoText.innerText = newTodo.value;

            inputCheckbox.type = "checkbox";

            divContainer.classList.add("divToDo");
            liElement.classList.add("liElement");

            divButton.appendChild(editBtn);
            divButton.appendChild(deleteBtn);

            divContainer.appendChild(inputCheckbox);
            divContainer.appendChild(toDoText);
            divContainer.appendChild(divButton);

            liElement.appendChild(divContainer);
            console.log(liElement);
            todoList.appendChild(liElement);

            newTodo.value = "";
        }
    }

    newTodo.addEventListener("change", (event) => {
        if (newTodo.value !== "") {
            console.log(newTodo.value);
        }
    });
});
