
  var persistData = (localStorage.getItem('Todo') ? JSON.parse(localStorage.getItem('Todo')) : {todo: [],completed: []});
  /* ON LOAD OF THE APPLICATION */

renderData();
  document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
     var text = document.getElementById('textbox').value;
     var todo = document.getElementById('list').value
     if(text){
       additemTodo(text);
     }
   });

function renderData(){
  if(!persistData.todo.length && !persistData.completed.length) return;

  for(var i = 0; i < persistData.todo.length; i++){
    
  }

}

   /* UPDATE LOCALSTORAGE */
function dataUpdate(){
  localStorage.setItem('Todo', JSON.stringify(persistData));
}
function additemTodo(text){
  let list = document.getElementById('list');
  let add = document.createElement('li');  
  add.innerText = text;
  list.appendChild(add);
  persistData.todo.push(text);
  dataUpdate();
  
  document.getElementById('textbox').value = '';

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
  let value = item.innerText;
  parent.removeChild(item);

/* LOCAL STORAGE REMOVE ITEM */
  if(parent.id == "list"){
    persistData.todo.splice(persistData.todo.indexOf(value), 1);
  } else if (parent.id == "completed") {
    persistData.completed.splice(persistData.completed.indexOf(value), 1);
  }  
  dataUpdate();
}


function completedItem(){
  let item = this.parentNode.parentNode; /* WHOLE INDIVIDUAL <LI> ITEM */
  completeList.appendChild(item);
  let value = item.innerText;
  
  /* LOCAL STORAGE INPUT */
  persistData.todo.splice(persistData.todo.indexOf(value), 1);
  persistData.completed.push(value);
  dataUpdate();

  var btns = item.getElementsByTagName('button');
  var btnparent = btns[0].parentNode;
  btnparent.removeChild(btns[0]);
  btns[0].style.color = 'rgb(250, 34, 34)';  
  item.style.textDecoration = "line-through";
}
var completeList = document.getElementById('completed');