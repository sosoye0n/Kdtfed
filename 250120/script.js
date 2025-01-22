//산술연산자

// const x = 10;
// const y = 4;

// let result;

// result = x / y;
// console.log(result);

// result = x % y;
// console.log(result);

// 증감연산자

// let a = 10;

// console.log(a);
// // 증감연산자 적용 전 : 10

// a = ++a;

// console.log(a);
// // 재할당 (a값 증가 + : 1 증가 = 11)
// // ++ : 값을 증가

// //감소 연산자
// a = --a;

// console.log(a);
// 1감소
// -- : 값을 감소

// let x = 10;
// let y = 4;
// let result;

// > 위 값 축약
// let x = 10,
//   y = 4,
//   result;

// //result 값 할당 > y 값 즉각적 감소 적용 x
// // 증감 연산자의 위치에 따라 값 달라짐 y-- // --y : p연산자의 앞 뒤에 따라
// result = x + --y;

// console.log(result);
// console.log(y);

// 연결연산자 : +

// Garbage Collector = GC
// 의도적인 행위로 더 이상 값이 사용 되지 않을 때 > garbage collector 자동으로 이동

// const actor = "현빈";
// const movie = "하얼빈";

// // const result = actor + "님은" + movie + "에 출연하였습니다";
// // > template literal 사용 > ` ${} `
// const result = `${actor}님은 ${movie}에 출연하였습니다`;

// console.log(result);

// 복합대입연산자
// let x = 3;
// y = 3;

// // y = x + 3;

// // y값에 x값을 더한 값을 재할당
// // y += x;

// // 9가 나오고 싶다면
// // y *= x;

// // y에 나머지 값 주고 싶음
// // y %= x;
// // console.log(y);

// let str = "<table border='1'>";
// str += "<tr>";
// str += "<td>1</td><td>2</td><td>3</td>";
// str += "</tr>";
// str += "</table>";

// document.write(str);

// 비교연산자

// 얕은 비교 > type은 비교 x > 타입안에 값만 비교
// console.log(3 == "3");

// //깊은 비교 > 엄격한 비교 type까지 비교
// console.log(3 === "3");

// // 값이 다른지 ! == : !-부정
// console.log(3 != "3");
// console.log(3 !== "3");

//논리연산자
// let a = 10,
//   b = 20;

// // || : 둘 중 하나 참이면 = ture
// console.log(a > 10 || b > 20);
// console.log(a <= 10 || b > 20);

// // && : 두 가지 모두가 참이어야 함
// console.log(a <= 10 && b > 20);

let a = 10,
  b = 3;

let result = a < b ? "Java" : "Typescript";

console.log(result);
