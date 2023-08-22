let myForm = document.getElementById("myForm");
let myField = document.getElementById("myField");
let myList = document.getElementById("myList");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(myField.value);
  addTodo(myField.value);
});

function addTodo(todo) {
  let myHtml = `<li>${todo} <button onclick="removeTodo(this)">Delete</button></li>`;

  myList.insertAdjacentHTML("beforeend", myHtml);

  myField.value = "";

  myField.focus();
}

function removeTodo(todo) {
  todo.parentElement.remove();
}
