// 내코드

// const buttonClick = document.querySelector("button");

// buttonClick.addEventListener("click", () => {
//   buttonClick.innerHTML = "라이트모드로 바꾸기";
//   buttonClick.style.backgroundColor = "black";
//   buttonClick.style.color = "white";
//   if (buttonClick.classList.contains("active")) {
//     buttonClick.classList.add("active");
//   } else {
//     buttonClick.classList.remove("active");
//   }
// });

//// 쌤코드

// 버튼 누르면 다크모드 > 라이트모드로 변경
// toggle > 있으면 제거, 없으면 주는 것

const bodyTag = document.querySelector("body");
const toggleBtn = document.querySelector("button");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (!document.body.classList.contains("dark")) {
    toggleBtn.innerText = "다크모드로 바꾸기";
  } else {
    toggleBtn.innerText = "라이트모드로 바꾸기";
  }
});
