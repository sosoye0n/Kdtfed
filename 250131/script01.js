//// DOM
// DOM안에서의 이벤트로 움직임
// classList : 배열의 자료 구조 밖에 볼 수 없음
// contains

querySelector / All; // getElementBy

console.log(document.querySelector("h1").innerText);
console.log(document.querySelector("#profile"));
console.log(document.querySelector(".imgSrc"));
console.log(document.querySelectorAll(".user"));

console.log(document.getElementById("profile"));
console.log(document.getElementsByClassName("imgSrc"));
console.log(document.getElementsByTagName("h1"));

// innerText(none상태는 console창에 보이지 x) / textContent(none 해도 보임) (*display:none상태에서의 차이 있음 > 많이 사용하지는 x (사용자의 이벤트=육안으로 보여주기 위해 사용))
// console.log(document.querySelector("#desc").innerText);
// console.log(document.querySelector("#desc").textContent);

//// My Profile(클릭했을 때 문구 변경)
// 1. 옛날 방식으로 이벤트 부여(타이틀 하나에 이벤트를 주기 위해서 1:1매칭만 좋고 번거로움 >> add Event listener로 많이 씀)

const title = document.querySelector("h1");
const userName = document.querySelectorAll("#desc > p")[0];
const pfImg = document.querySelector("#profile > img");

// title.onclick = () => {
//   title.innerText = "나의 프로필";
// };

// 2. add Event Listener로 변경해 봄
// script에서 style영역의 변경을 원한다면 style을 꼭 뒤에 사용 후 > 변경하고픈 값 입력
title.addEventListener("click", () => {
  title.innerHTML = "마이 프로필";
  title.style.backgroundColor = "black";
  title.style.color = "white";
});

// innerHTML : <b>태그 먹음 // innerText는 불가 <b>는 문자열로 인식(태그로 인식 x)

userName.addEventListener("click", () => {
  userName.innerHTML = "이름 : <b>태연</b>";
  pfImg.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOem5wxFxXSSGRJBcV7MZ0QoprJ-kUsBOfQ&s";
  if (!userName.classList.contains("active")) {
    userName.classList.add("active");
  } else {
    userName.classList.remove("active");
  }
  // userName.classList.add("active");
});

// console.log(userName.classList.contains("active"));

// console.log(document.querySelectorAll("#desc p")[0].classList);
