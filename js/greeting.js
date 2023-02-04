const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const loginBar = document.querySelector(".login-bar");

const toDo = document.querySelector("#todo-form");
const quoteHidden = document.querySelector("#quote");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
    toDo.classList.remove("hidden");
    quoteHidden.classList.remove("hidden");
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${username}`;
}
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginBar.classList.add(HIDDEN_CLASSNAME);
    
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginBar.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
}