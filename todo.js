const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
const todos = document.querySelector(".todos")

let todoSaved = []

function paintTodo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    const button = document.createElement("button")
    li.appendChild(span)
    span.innerText = newTodo.text
    button.innerText = "❌"
    todoList.appendChild(li)
    li.appendChild(button)
    saveTodos()
    button.addEventListener("click", deleteTodo)
}

function deleteTodo(todo) {
    const liToDelete = todo.target.parentElement;
    liToDelete.remove()
    todoSaved = todoSaved.filter((todo) => todo.id !== parseInt(liToDelete.id))
    saveTodos()
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now()          //randomness
    }
    todoSaved.push(newTodoObj)
    paintTodo(newTodoObj)
}

function saveTodos() {
    localStorage.setItem("todo", JSON.stringify(todoSaved))
}

todoForm.addEventListener("submit", handleTodoSubmit)

const get = localStorage.getItem("todo")

if (get !==null){
    const parsedTodo = JSON.parse(get)
    parsedTodo.forEach(paintTodo)
    todoSaved = parsedTodo
}
