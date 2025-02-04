/*

1. 변수
2. 자료형
3. 형변환
4. 연산자
5. 조건문
6. 반복문
7. 함수
8. DOM

9. EVENT *오늘*
- 브라우저를 통해서 특정 웹페이지 도착
- 사용자가 하는 행위 모든 것
- 페이지를 확인 // 버튼 클릭 // 스크롤 이동
- 이벤트를 설정
- even handler => on + click = onclick
- addEventListener() 
- 이벤트 설정 > 이벤트 실행 > 로컬 컴퓨터 > 메모리 공간 > 이벤트 객체 생성 > 이벤트 객체를 참조변수 값으로 찾아올 수 있다
- 이벤트 객체 > preventDefault() : 유일한 메서트 함수

*/

// window.onload = alert("안녕하세요");

//// html에 defer속성 사용하지 않고 아래 처럼도 가능(비동기 / 동기)
// onload
// window.onload = () =>{

// }

//// click Event

// 방식 1
// const button = document.querySelector("button");

// // button.onclick = function () {
// //   document.body.style.backgroundColor = "green";
// // };

// //// 방식 2 (*선생님 선호 방식)
// // 속성 & 매서드함수 : -문자열 x > camel표기법(대문자)
// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "blue";
// });

//// keydown
document.body.addEventListener("keydown", (event) => {
  document.querySelector(
    "#result"
  ).innerText = `code : ${event.code}, key : ${event.key}`;
});
