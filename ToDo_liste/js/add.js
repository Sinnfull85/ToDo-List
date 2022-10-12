const APP = document.getElementById('App');
const AddButton = document.getElementById('AddButton');


AddButton.addEventListener('click', handleButtonClick);


function handleButtonClick(){

const listContainer = document.createElement('div');
listContainer.setAttribute('id', "divToDo");
const list = document.createElement('ul');
const li = document.createElement('li');
li.innerText = "ToDO-Item";


    console.log("button clicked");

    APP.appendChild(listContainer,);
    listContainer.appendChild(list);
    list.appendChild(li);

    listContainer.style.height = "50px";
    listContainer.style.width = "60vw";
    listContainer.style.border = "1px solid black";

}


// ToDO Array 
const ToDos = ["wert1", "wert2", "wert3", "wert4", "wert5"];


