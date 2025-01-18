// 변수

// 자료형

// > 자동 형 변환

// const one = "20";
// const two = 25;
// const result = one - two;
// console.log(typeof result);

// 수동 형 변환
// 숫자로의 형변환 : Number // parseInt / parseFloat(장단점 있음)
// parseInt/ parsFloat - 소수점 차이 flaat- 소수점o
// 소수점 살리는 건 float / number : 소수점0   ///   정수 : int /
const str = parseFloat("20");
console.log(typeof str);

const num99 = "17.8";

console.log(Number(num99));
console.log(parseInt(num99));
console.log(parseFloat(num99));

console.log(Number(true));
console.log(parseInt(true));

// NaN : Not a Number

// toString() // String() : string더 많이 사용
// 문자열로 변환

const num77 = 77;
console.log(typeof num77.toString());

// null & undefined => 문자열(falsy한 값도 문자로 변환)
console.log(typeof String(num77));

// 논리(bollean)형으로 형변환 : true / false

console.log(Boolean("Hello"));
console.log(Boolean(undefined));

//>>다음수업: 연산자 & 제어문
