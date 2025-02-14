// let numA: 100 = 100;
// let strA = "hello";
// // undefined를 타입 설정 > 값을 받아오기로 했을 때
// let message: undefined = undefined;
//// 배열
// 배열의 타입 정의 >>
// array라는 타입 존재 (형태가 배열이면 다 인정) >
// 어떤 값을 가진 배열인지 <>형식으로 알려줌  : 제레릭 타입 **
// Object, Array 도 타입- 아직 안 배움
const numArr = [1, 2, 3];
const strArr = ["Hello", "World"];
// 정의 1
// 제네릭 형식 정의 방법 2
let boolArr01 = [true, false, true];
boolArr01 = [true, true];
const boolArr02 = [true, false, true];
// 배열 안 값이 한 가지가 아닌 경우 - 합집합 형식 방법 3
// | : 합집합
const multiArr = [1, "hello"];
// 중첩배열 타입 정의 4
const doubleArr = [[1, 2, 3], [4, 5], [6]];
// 중첩배열 타입 정의 5 - 숫자 문자 결합
const doubleArr2 = [[1, "2", 3], [4, 5], [6]];
// 튜플
// 값을 2개만 받기로 했기에 3개가 오면 오류
const tup1 = [1, 2];
//// 값을 2개만 받기로 했기에 3개가 오면 오류
// tup1 = [1, 2, 3];
// 튜플은 값은 number , string, boolean 값으로만 가능 (*엄격)
// let tup2: [number, string, boolean] = [1, "Hello", true];
// tup2 = [1, 2];
// 그러나 튜플도 배열 > 배열의 값을 줄 수는 있음(약점: 믿으면 안 됨)
let tup3 = [1, 2];
tup3.push(1);
console.log(tup3);
export {};
