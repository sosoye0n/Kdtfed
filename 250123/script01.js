// 함수의 형태 , 함수를 사용하는 방법

/* 함수 선언식 
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));
*/

/* 익명함수 표현식 
// > 함수의 이름을 쓰지 않았지만(fuction) >> 결국 num이 이름이 됨
const num = function (a, b) {
  return a + b;
};


console.log(sum(10, 20));
*/

/* 화살표 함수 표현식 
const num01 = (a, b) => {
  return a + b;
};

console.log(sum(10, 20));
*/

// > 즉시실행함수
/* 선언 & 호출까지 를 못기다리고 > 선언 즉시 실행- 생각보다 많이 사용
익명함수 선언부에 () , 매개변수 ()
(function (a, b) {
  let result = a + b;
  console.log(`함수 실행 결과값 : ${result}`);
})(100, 200);
 */

//// const hi = () => "안녕하세요";

//// 콜백 함수 : Call(*호출)의 제어를 받음 / call의 제어를 자유롭게 할 수 있는 함수와 제어를 받는 함수(*콜백함수)

// const btn = document.querySelector("button");

// btn.addEventListener("click", function display() {
//   alert("클릭했습니다");
// });

// > 화살표 함수로 쓰면 , return , 콜백지옥
// btn.addEventListener("click", () => {
//   console.log("클릭");
//   return () => {
//     console.log("클릭클릭");
//     return () => {
//       console.log("클릭클릭클릭");
//       return () => {
//         console.log("이제그만");
//       };
//     };
//   };
// });

// 콜백 함수 다른거
// const showData = (name, age) => {
//   alert(`안녕하세요 ${name}님, 나이가 ${age}이시군요`);
// };

// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이를 입력하세요");
//   callback(userName, userAge);
// };

// getData(showData);

/* 
자바스크림트라는 언어에서 => 함수가 다이내믹 함

자바스크립트의 함수 => 1급 시민이라 부름

1. 변수에 함수를 담을 수 있음: 원래 전통적으로 함수 선언식으로만 함수를 호출했었는데, 익명함수가 등장하면서 함수를 보다 편리하게 작성할 수 있게 됨

2. 다른 함수의 매개변수로 등장할 수 있음 : 콜백함수라는 스타일 형식을 창조해낼 수 있게 됨

3. 다른 함수의 반환값(*return)으로 함수가 등장할 수 있음

*/
