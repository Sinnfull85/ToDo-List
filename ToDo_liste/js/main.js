document.addEventListener("DOMContentLoaded", () => {
    const APP = document.getElementById("App");

    const newTodo = document.getElementById("neuTodo");
    const addTodo = document.getElementById("addTodo");
    const todoList = document.getElementById("todoList");

    let m_todoList = [{ name: "Javascript lernen" }];

    addTodo.addEventListener("click", handleButtonClick);

    // let add_button = document.getElementById("addTodo");
    // add_button.onclick = saveData;

    // function saveData() {
    //     let input = document.getElementById("neuToDo");
    //     localStorage.setItem("neuToDo", input.value);
    //     var storedValue = localStorage.getItem("neuToDo");
    // }

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

            //Local speicher
            const todoElement = { name: newTodo.value };
            m_todoList.push(todoElement);
            // console.log(m_todoList);
            const jsonToDoList = JSON.stringify(m_todoList);
            localStorage.setItem("todoList", jsonToDoList);

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
