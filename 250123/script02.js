/*
const fruits = ["apple", "banana", "grape"];

console.log(fruits);

// 전개연산자 구문
// spread operator

console.log(...fruits);
*/

/*
const addNum = (...numbers) => {
  let sum = 0;
  /* 1. for each문으로
  numbers.forEach((number) => {
    sum += number;
  });
*/

/* 2. for문으로 
  for (let number of numbers) {
    sum += number;
  }

  return sum;
};


console.log(addNum(1, 3, 5, 7));
/*
*/

const displayFavorits = (first, ...fruits) => {
  const str = `내가 가장 좋아하는 과일은 ${first}입니다`;
  return str;
};

console.log(displayFavorits("사과", "포도", "토마토"));

// last 값은 전개연산자구문에서 last는 안됨 > 아래 예시
// const displayFavorits = ( ...fruits, last) => {
//   const str = `내가 가장 좋아하는 과일은 ${last}입니다`;
//   return str;
// };

// console.log(displayFavorits("사과", "포도", "토마토"));
