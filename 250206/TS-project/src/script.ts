// let numA: 100 = 100;
// let strA = "hello";

// // undefined를 타입 설정 > 값을 받아오기로 했을 때
// let message: undefined = undefined;

//// 배열
// 배열의 타입 정의 >>
// array라는 타입 존재 (형태가 배열이면 다 인정) >
// 어떤 값을 가진 배열인지 <>형식으로 알려줌  : 제레릭 타입 **

// Object, Array 도 타입- 아직 안 배움

const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["Hello", "World"];

// 정의 1
// 제네릭 형식 정의 방법 2

let boolArr01: boolean[] = [true, false, true];
boolArr01 = [true, true];

const boolArr02: Array<boolean> = [true, false, true];

// 배열 안 값이 한 가지가 아닌 경우 - 합집합 형식 방법 3
// | : 합집합
const multiArr: (number | string)[] = [1, "hello"];

// 중첩배열 타입 정의 4
const doubleArr: number[][] = [[1, 2, 3], [4, 5], [6]];

// 중첩배열 타입 정의 5 - 숫자 문자 결합
const doubleArr2: (number | string)[][] = [[1, "2", 3], [4, 5], [6]];

// 튜플
// 값을 2개만 받기로 했기에 3개가 오면 오류
const tup1: [number, number] = [1, 2];
//// 값을 2개만 받기로 했기에 3개가 오면 오류
// tup1 = [1, 2, 3];

// 튜플은 값은 number , string, boolean 값으로만 가능 (*엄격)
// let tup2: [number, string, boolean] = [1, "Hello", true];
// tup2 = [1, 2];

// 그러나 튜플도 배열 > 배열의 값을 줄 수는 있음(약점: 믿으면 안 됨)
let tup3: [number, number] = [1, 2];
tup3.push(1);

console.log(tup3);
// >> push를 통해 넣으니 > 콘솔창에 추가가 됨 >> 예외사항

// 튜플을 왜 사용하는지 > 데이터의 자료형태가 일관성 있어야 할 때
// 문자 > 숫자 // but . 사용자에 따라 반대로 들어올 때 > 컴파일링 자체를 막아야 할 때
const users: [string, number][] = [
  ["박세진", 0],
  ["강백호", 1],
  ["서태웅", 2],
  ["정대만", 3],
  [4, "채치수"],
];
