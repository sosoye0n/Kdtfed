/* Event Trigger : 등록(*submit) 버튼 > 클릭시

*/

// const accept = document.querySelector("input[type='submit']");

// accept.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("click");
// });

//// submit > 기본으로 Event handdler 기능 있음 (**이게 앞에 거 보다 더 정석적인 방법)

// form안에 submit 있다면 의도가 있는 것 > 이벤트 핸들러 주면 됨
const form = document.querySelector("form");
const userInput = document.querySelector("#todo-item");
const ul = document.querySelector("ul");
let todos = [];

const delItem = (event) => {
  const target = event.target.parentElement;
  target.remove();
};

const addItem = (text) => {
  if (text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.append(span, button);
    ul.prepend(li);
  }
};

const handler = (event) => {
  event.preventDefault();

  const todo = userInput.value;
  todos.push(todo);

  addItem(todo);
  userInput.value = "";
};

form.addEventListener("submit", handler);

console.log(todos);

// 삭제 fuction >27번행
// span태그 전체가 삭제 되어야 > 자신의 부모인 li가 삭제되어야

//// local storage 사용 방법 > 저장, 찾아오는 방법
// localStorage.setItem("hello", "world");
// const myData = localStorage.getItem("hello");

// console.log(myData);

// key값이 너무 많아지면 x >> key 값을 분리 x > 배열의 형태로 저장
