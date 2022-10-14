const APP = document.getElementById("App");
const AddButton = document.getElementById("AddButton");
const input = document.getElementById("addInput");

let inputList = [];

function handleInput(event) {
    const newInput = event.target.value;
    inputList.push(newInput);
    // input.value = "";
    console.log(inputList);
}

input.addEventListener("change", handleInput);

AddButton.addEventListener("click", handleButtonClick);

function handleButtonClick() {
    const listContainer = document.createElement("div");
    listContainer.setAttribute("id", "divToDo");
    const list = document.createElement("ul");
    const li = document.createElement("li");
    const liAlsInput = document.createElement("input");
    liAlsInput.setAttribute("id", "li-als-input");

    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    editBtn.innerHTML = "Bearbeiten";
    deleteBtn.innerHTML = "Löschen";

    editBtn.setAttribute("id", "mv-edit-2");
    deleteBtn.setAttribute("id", "mv-delete-2");

    liAlsInput.value = inputList[inputList.length - 1];

    console.log("button clicked");

    input.value = "";

    APP.appendChild(listContainer);
    listContainer.appendChild(list);
    list.appendChild(li);

    li.appendChild(liAlsInput);

    listContainer.appendChild(editBtn);
    listContainer.appendChild(deleteBtn);
}

// ToDO Array
