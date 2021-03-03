let nameInputs = [];
let nameInput;
    do{
    nameInput = prompt('enter names');
    nameInputs.push(nameInput);
    }while(nameInput !== "");
    nameInputs.pop();
let orderedlist = document.createElement("ol");
let listItem;
let i = 0;
nameInputs.forEach(function(element){
    listItem = document.createElement("li");
    listItem.innerText = element;
    listItem.style.color = (i++ % 2 == 0)?"#eee":"#ddd";
    
    orderedlist.appendChild(listItem);

})
document.body.appendChild(orderedlist);