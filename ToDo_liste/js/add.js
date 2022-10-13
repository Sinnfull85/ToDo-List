const APP = document.getElementById('App');
const AddButton = document.getElementById('AddButton');
const input = document.getElementById('addInput');



let inputList = [];

function handleInput(event){
    const newInput = event.target.value;
    inputList.push(newInput);
    input.value ="";
    console.log()
}


input.addEventListener("change", handleInput);


AddButton.addEventListener('click', handleButtonClick);


function handleButtonClick(){

const listContainer = document.createElement('div');
listContainer.setAttribute('id', "divToDo");
const list = document.createElement('ul');
const li = document.createElement('li');
const details = document.createElement('details');
const datetime = document.createElement('div');

const editBtn = document.createElement('button');
const deleteBtn = document.createElement('button');

editBtn.innerHTML ="Bearbeiten";
deleteBtn.innerHTML ="Löschen";

editBtn.setAttribute('id', "mv-edit-2");
deleteBtn.setAttribute('id', "mv-delete-2");



datetime.setAttribute('id', "datetime");
datetime.innerHTML ="Datum: ";

li.innerText = "ToDO-Item";



    console.log("button clicked");

    APP.appendChild(listContainer,);
    listContainer.appendChild(list);
    list.appendChild(li);
    li.appendChild(details);
    li.appendChild(datetime);
    listContainer.appendChild(editBtn);
    listContainer.appendChild(deleteBtn);
    
}


// ToDO Array 
const ToDos = ["wert1", "wert2", "wert3", "wert4", "wert5"];










