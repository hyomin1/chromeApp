const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos =[];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); 
    //텍스트로 저장이 되기때문에 array 형태로 저장하고싶음 
}

function deleteTodo(event) {
    const li = event.target.parentElement; //target은 클릭된 html요소 parentElements는 target의 부모 html요소
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos(); //저장해줘야함
    
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const label = document.createElement("label");
    const span = document.createElement("span");
    const div = document.createElement("div");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    label.innerText = "🚀";
    button.innerText = "💨";
    div.appendChild(label);
    div.appendChild(span);
    button.addEventListener("click",deleteTodo);
    li.appendChild(div);
    li.appendChild(button);
    toDoList.appendChild(li); //ul에 li넣어서 todo list 화면에 띄워줌

}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // 값을 비우기전에 저장
    toDoInput.value=""; //submit시 값 비우기
    const newToDoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newToDoObj); //todo 입력할때 마다 배열에 넣어주기
    paintToDo(newToDoObj); //화면에 todo 보여줌
    saveToDos(); //localStoarge에 toDos 배열에 있는것들을 저장해줌
    
}

toDoForm.addEventListener("submit",handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //localStarage에 있는 savedToDos를 array형태로 변환
    toDos = parsedToDos; //덮어쓰기 되는걸 막기 위해 toDos에 기존에 있는 데이터들을 넣어줌
    parsedToDos.forEach(paintToDo);
}



//filter 유지하고싶은 item은 true 지우고싶은 item false , 기존의 arr를 변경하지 않음