// Clock
const dateClass = document.querySelector(".date")
const clockClass = document.querySelector(".clock")

function time() {
    const date = new Date();
    const dateString = date.toDateString()
    const month = dateString.slice(4,7)
    const day = dateString.slice(8,10)
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    dateClass.textContent = `${month} ${day}`;
    clockClass.textContent = `${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`
}

time()
setInterval(time, 1000)

// Greetings
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input")
const greetings = document.querySelector("#greetings");

const HIDDEN = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN)
    const username = loginInput.value
    greetings.textContent = `Hello, ${username}`
    greetings.classList.remove(HIDDEN)
    localStorage.setItem(USERNAME_KEY, username)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

function saveUsernameInLocalStorage(username) {
    loginForm.classList.add(HIDDEN);
    greetings.classList.remove(HIDDEN);
    greetings.textContent = `Hello, ${username}`
}

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    saveUsernameInLocalStorage(savedUsername)
}
