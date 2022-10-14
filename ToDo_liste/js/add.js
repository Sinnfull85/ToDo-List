const APP = document.getElementById("App");
const AddButton = document.getElementById("AddButton");
const input = document.getElementById("addInput");
// const detailsInpt = document.getElementById("details");
// const datetimeInput = document.getElementById("datetime");

let inputList = [];

function handleInput(event) {
    const newInput = event.target.value;
    inputList.push(newInput);
    // input.value = "";
    console.log(inputList);
}
let inputList2 = [];

function handleInput2(event) {
    const newInput = event.target.value;
    inputList2.push(newInput);
    // input.value = "";
    console.log(inputList2);
}
let inputList3 = [];
function handleInput3(event) {
    const newInput = event.target.value;
    inputList3.push(newInput);
    // input.value = "";
    console.log(inputList3);
}
input.addEventListener("change", handleInput);

// detailsInpt.addEventListener("change", handleInput2);
// datetimeInput.addEventListener("change", handleInput3);

AddButton.addEventListener("click", handleButtonClick);

function handleButtonClick() {
    const listContainer = document.createElement("div");
    listContainer.setAttribute("id", "divToDo");
    const list = document.createElement("ul");
    const li = document.createElement("li");
    const liAlsInput = document.createElement("input");
    liAlsInput.setAttribute("id", "li-als-input");

    // const details = document.createElement("details");
    // const summary = document.createElement("summary");

    // const datetime = document.createElement("div");

    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    editBtn.innerHTML = "Bearbeiten";
    deleteBtn.innerHTML = "Löschen";

    editBtn.setAttribute("id", "mv-edit-2");
    deleteBtn.setAttribute("id", "mv-delete-2");

    // datetime.setAttribute("id", "datetime");

    liAlsInput.value = inputList[inputList.length - 1];
    console.log("GHfdj", inputList[inputList.length - 1]);
    // summary.innerText = inputList2[inputList2.length - 1];
    // datetime.innerHTML = inputList3[inputList2.length - 1];
    console.log("button clicked");

    input.value = "";

    // detailsInpt.value = "";
    // datetimeInput.value = "";

    APP.appendChild(listContainer);
    listContainer.appendChild(list);
    list.appendChild(li);
    // details.appendChild(summary);
    li.appendChild(liAlsInput);
    // li.appendChild(details);
    // li.appendChild(datetime);
    listContainer.appendChild(editBtn);
    listContainer.appendChild(deleteBtn);
}

// ToDO Array
