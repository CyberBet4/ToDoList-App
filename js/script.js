
  document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
     var text = document.getElementById('textbox').value;
     var todo = document.getElementById('list').value
     if(text){
       additemTodo(text);
     }

   });

function additemTodo(text){
  let list = document.getElementById('list');
  let add = document.createElement('li');
  add.innerText = text;
  list.appendChild(add);
  
  document.getElementById('textbox').value = '';
  /* console.log(add.childNodes[0]); */

  list.insertBefore(add, list.childNodes[0]); /* NEW ITEM ADDED BEFORE THE FIRST CHILD NODE */

  /* DIV HOUSING THE BUTTONS */
  let button = document.createElement('div');
  button.className = 'buttons';

/* COMPLETE BUTTON */
  let completed = document.createElement('button');
  let completeIcon = document.createElement('i');
  completeIcon.className = 'fa fa-check-circle';
  completed.appendChild(completeIcon);

  /* DELETE BUTTON */
  let remove = document.createElement('button');
  let removeIcon = document.createElement('i');
  removeIcon.className = 'fa fa-trash';
  remove.appendChild(removeIcon);

  button.append(completed, remove);
  add.appendChild(button);
  remove.addEventListener('click', removeItem);
  completed.addEventListener('click', completedItem);
}

function removeItem(){
  let item = this.parentNode.parentNode; /* WHOLE INDIVIDUAL <LI> ITEM */
  let parent = item.parentNode;
  parent.removeChild(item);
}


function completedItem(){
  let item = this.parentNode.parentNode; /* WHOLE INDIVIDUAL <LI> ITEM */
  completeList.appendChild(item);
  var btns = item.getElementsByTagName('button');
  var btnparent = btns[0].parentNode;
  btnparent.removeChild(btns[0]);
  btns[0].style.color = 'rgb(250, 34, 34)';  
  item.style.textDecoration = "line-through";
}
var completeList = document.getElementById('completed');

/* hello.childNodes, hello.children
document.querySelectorAll
hello.nextElementSibling, hello.previousElementSibling
hello.insertBefore(hello, hello1) */