const APP = document.getElementById("App");
const AddButton = document.getElementById("AddButton");
const input = document.getElementById("addInput");

let inputList = [];

// beispiel
// let inputList_v1 = ["kaufen", "Kochen"];
// let inputList_v2 = [
//     { aufgabe: "kaufen", zeit: "" },
//     { aufgabe: "Kochen" },
//     { aufgabe: "spielen" },
// ];

// let inputList_v3 = [
//     { aufgabe: "kaufen", mehrdetais: "Milch, käse", datum: "heute" },
//     { aufgabe: "Kochen", mehrdetais: "Milch, käse", datum: "heute" },
//     { aufgabe: "spielen", mehrdetais: "", datum: "heute Abend" },
// ];

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
    const list = document.createElement("ul");
    const li = document.createElement("li");
    const liAlsInput = document.createElement("input");
    const divButton = document.createElement("div");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    listContainer.setAttribute("class", "divToDo");
    // listContainer.setAttribute("id", "divToDo");
    liAlsInput.setAttribute("class", "li-als-input");
    // liAlsInput.setAttribute("id", "li-als-input");
    divButton.setAttribute("class", "divButton");
    editBtn.setAttribute("class", "edit");
    deleteBtn.setAttribute("class", "delete");

    editBtn.innerHTML = "Bearbeiten";
    deleteBtn.innerHTML = "Löschen";

    // editBtn.setAttribute("id", "mv-edit-2");
    // deleteBtn.setAttribute("id", "mv-delete-2");

    liAlsInput.value = inputList[inputList.length - 1];

    console.log("button clicked");

    input.value = "";

    li.appendChild(liAlsInput);
    list.appendChild(li);
    listContainer.appendChild(list);
    divButton.appendChild(editBtn);
    divButton.appendChild(deleteBtn);
    listContainer.appendChild(divButton);
    APP.appendChild(listContainer);
}

// ToDO Array
