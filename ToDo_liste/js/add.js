const APP = document.getElementById('App');
const AddButton = document.getElementById('AddButton');


AddButton.addEventListener('click', handleButtonClick);


function handleButtonClick(){

const listContainer = document.createElement('div');
listContainer.setAttribute('id', "divToDo");
const list = document.createElement('ul');
const li = document.createElement('li');
const details = document.createElement('details');
const datetime = document.createElement('div');
datetime.setAttribute('id', "datetime");
datetime.innerHTML ="Datum: ";

li.innerText = "ToDO-Item";


    console.log("button clicked");

    APP.appendChild(listContainer,);
    listContainer.appendChild(list);
    list.appendChild(li);
    li.appendChild(details);
    li.appendChild(datetime);

    listContainer.style.height = "50px";
    listContainer.style.width = "60vw";
    listContainer.style.border = "1px solid black";

}


// ToDO Array 
const ToDos = ["wert1", "wert2", "wert3", "wert4", "wert5"];










