let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    var btn1=document.createElement('BUTTON');
    btn1.innerHTML="Remove";
     toDoContainer.appendChild(btn1);
      btn1.classList.add('btn1-style');
      var btn2=document.createElement('BUTTON');
      btn2.innerHTML="Delete";
     toDoContainer.appendChild(btn2);
     
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})

