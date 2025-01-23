// 내장함수 : 개발자가 많이 사용할 것 같은 것을 내장 > 시간과 관련된 함수(일정시간마다 감소, 실행, 멈추게, 지연시킨 이후에 하거나 > 자바스크립트에 내장 되어있는 함수)

// 시간과 관련있는 자바스크립트의 내장함수 시리즈 >>

/* 
일정시간마다 반복하는 함수 = setInterval()
두개의 매개변수 1.콜백함수 2. 시간값
  
3초에 한 번씩 무언가를  실행해라
> 밀리초 => 1초 1000밀리초
 */

// setInterval(() => {
//   console.log("Hello world");
// }, 3000);

// >> 위 코드 리팩토링

/*
const hello = () => {
  console.log("Hello world");
};
setInterval(hello, 3000);
*/

/* 
반복적인 실행을 멈추게하는 함수 = clearInterval()

*/

// let counter = 0;

// let timer = setInterval(() => {
//   console.log("Hello World");
//   counter++;

//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// console.log(timer);

/*
특정시간 경과 후 무언가를 실행시키게 하는 함수 = setTimeout()
*/

setTimeout(() => {
  console.log("안녕하세요");
}, 3000);
