document.addEventListener("DOMContentLoaded", () => {
    const APP = document.getElementById("App");

    const newTodo = document.getElementById("neuTodo");
    const addTodo = document.getElementById("addTodo");
    const todoList = document.getElementById("todoList");

    const divFilter = document.querySelector(".divFilter");
    const todoCountElement = document.querySelector(".todoCount strong");
    const completetTodoCountElement = document.querySelector(
        ".completedTodoCount strong"
    );

    const deleteCompletedElement = document.querySelector("#deleteCompleted");

    let m_todoList = [];

    const verifyTodoList = () => {
        if (todoList.children.length === 0) {
            console.log("todoList.children.length", todoList.children.length);
            divFilter.style.display = "none";
        } else {
            divFilter.style.display = "";
        }

        let todoCounter = 0;
        for (const item of todoList.children) {
            // console.log(item.classList.contains("completed")); //return true oder false
            if (!item.classList.contains("completed")) {
                todoCounter++;
            }
        }
        todoCountElement.innerText = todoCounter;

        let completettodoCounter = 0;
        for (const item of todoList.children) {
            // console.log(item.classList.contains("completed")); //return true oder false
            if (item.classList.contains("completed")) {
                completettodoCounter++;
            }
        }
        completetTodoCountElement.innerText = completettodoCounter;
        console.log("Hallo ", completettodoCounter);

        if (completettodoCounter === 0) {
            console.log(deleteCompletedElement);
            deleteCompletedElement.style.display = "none";
        } else {
            deleteCompletedElement.style.display = "";
        }
    };

    verifyTodoList();
    const doneDeletetask = (liElement) => {
        const checkboxElement = liElement.querySelector(".checkInput");
        const deleteButtonElement = liElement.querySelector(".delete");

        // console.log("liElement", liElement.innerText);

        checkboxElement.addEventListener("change", () => {
            if (checkboxElement.checked) {
                liElement.classList.add("completed");
            } else {
                liElement.classList.remove("completed");
            }
            verifyTodoList();
        });

        deleteButtonElement.addEventListener("click", () => {
            liElement.remove();
            verifyTodoList();
        });

        if (todoList.children.length > 0) {
            console.log("todoList.children.length ", todoList.children.length);
            const deleteAllButtonElement =
                document.querySelector("#deleteAllButton");
            // deleteAllButtonElement.style.display = "";
            console.log(deleteAllButtonElement);

            deleteAllButtonElement.addEventListener("click", () => {
                for (let item of todoList.children) {
                    item.remove();
                    verifyTodoList();
                }
            });
        }

        let completettodoCounter = 0;
        for (const item of todoList.children) {
            // console.log(item.classList.contains("completed")); //return true oder false
            if (item.classList.contains("completed")) {
                completettodoCounter++;
            }
        }
        console.log("completettodoCounter", completettodoCounter);
    };

    // let add_button = document.getElementById("addTodo");
    // add_button.onclick = saveData;

    // function saveData() {
    //     let input = document.getElementById("neuToDo");
    //     localStorage.setItem("neuToDo", input.value);
    //     var storedValue = localStorage.getItem("neuToDo");
    // }

    addTodo.addEventListener("click", handleButtonClick);

    function handleButtonClick() {
        if (newTodo.value !== "") {
            const liElement = document.createElement("li");
            const divContainer = document.createElement("div");

            const inputCheckbox = document.createElement("input");
            const toDoText = document.createElement("label");

            const divButton = document.createElement("div");
            const editBtn = document.createElement("button");
            const editIcon = document.createElement("div");
            const deleteBtn = document.createElement("button");
            const deleteIcon = document.createElement("div");

            // deleteBtn.innerHTML = "Löschen";
            // editBtn.innerHTML = "Bearbeiten";
            // const editIcontext = "&#xf142;";
            // const deleteIcontext = "&#xf014;";

            editIcon.classList.add("fa");
            editIcon.classList.add("fa-edit");
            // editIcon.innerText = editIcontext;
            editBtn.classList.add("edit");
            editBtn.appendChild(editIcon);

            deleteIcon.classList.add("fa");
            deleteIcon.classList.add("fa-trash-o");

            // deleteBtn.innerText = deleteIcontext;
            deleteBtn.classList.add("delete");
            deleteBtn.appendChild(deleteIcon);

            //Local speicher
            const todoElement = { name: newTodo.value };
            m_todoList.push(todoElement);
            // console.log(m_todoList);
            const jsonToDoList = JSON.stringify(m_todoList);
            localStorage.setItem("todoList", jsonToDoList);

            toDoText.classList.add("todoText");
            toDoText.classList.add("container");

            toDoText.innerText = newTodo.value;

            inputCheckbox.type = "checkbox";
            inputCheckbox.classList.add("checkInput");

            divContainer.classList.add("divToDo");
            liElement.classList.add("liElement");

            divButton.appendChild(deleteBtn);
            divButton.appendChild(editBtn);

            divContainer.appendChild(inputCheckbox);

            divContainer.appendChild(toDoText);
            divContainer.appendChild(divButton);

            liElement.appendChild(divContainer);

            todoList.prepend(liElement);
            doneDeletetask(liElement);

            newTodo.value = "";
            verifyTodoList();
        }
    }

    newTodo.addEventListener("change", (event) => {
        if (newTodo.value !== "") {
            console.log(newTodo.value);
        }
    });

    deleteCompletedElement.addEventListener("click", (event) => {
        const completedLiElements = todoList.querySelectorAll("li.completed");
        for (const completedLiElement of completedLiElements) {
            completedLiElement.remove();
        }

        verifyTodoList();
    });
});
