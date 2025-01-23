// 선언 & 호출

// function code() {
//   console.log("오늘은 목요일입니다");
// }

// code();

// const obj = {
//   title: "자바스크립트",
//   fnc: function () {
//     console.log("스크립트 짱");
//   },
// };

// obj.fnc();

// 메서드함수 = 방법(론)

// 더하기
// function calcSum() {

// }

// calcSum();

///////

// 1-10까지 더한 값 > 콘솔창에 출력

// 내코드

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result;

// console.log(result);

//

//썜코드 > 반복문 - for

// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}입니다`);
// }

// calcSum();

///

// 매개체
// 매개변수-함수의 이름 뒤에 선언 (sum(여기)) >> 선언부에서 필요
// a , b ()공간에 들어가야함
// function sum(a, b) {
//   const result = a + b;
//   console.log(result);
// }

// // 아래()값 = 인자값 , 인수
// sum(10, 20);

/////
// 반환 = return문
// const num = parseInt(prompt("더하고 싶은 숫자를 입력하세요"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}`);

/////

// 기본매개변수 -대기조

// function multiple(a, b = 0, c = 0) {
//   return a + b + c;
// }

// console.log(multiple(2, 4, 8));
// console.log(multiple(2, 4));
// console.log(multiple(2));

////

// function calcSum(n) {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더한 결과값은 ${sum}입니다`);
// }

// calcSum(10);

////

// Scope = 범위

/* 
전역스코프사용 사례 1
// 전역 스코프 = global scope > 전국방송 = var

var hi = "hello";

function greeting() {
  console.log(hi);
}

greeting();

*/

/* 
전역스코프사용 사례 2

var hi = "hello";

function greeting() {
  hi = "bye";
}

greeting();

*/

/* 
전역스코프사용 사례 3 = 좋은 방법 아님

function greeting() {
  hi = "hello";
}

greeting();

console.log(hi);

*/

// var를 사용하거나 혹은 어떤 키워드도 존재하지 않는 경우 > 전역에서 사용가능한 변수가 됨 => 함수 내부에서도 사용 가능

/* 블록스코프 = 블록에서만 쓸 수 있는 범위( 전역스코프는 통제 어려움 > 블록스코프 영역의 변수가 나옴(let var const)) 
const factor = 5;

function calc() {
  return num * factor;
}

{
  const num = 10;
  let result = calc();
  console.log(`result : ${result}`);
}

 */

/*  
function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

var num = 5;

console.log(`1부터 ${num}까지 더한 결과값은 ${calcSum(num)}입니다`);

// calcSum(10);

*/
