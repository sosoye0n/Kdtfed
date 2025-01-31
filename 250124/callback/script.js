// 콜백지옥 => 콜백함수를 계속 이어서 작성하는 형식

// setTimeout(() => {
//   let coffeeName = "에스프레소";
//   console.log(coffeeName);
//   setTimeout(() => {
//     coffeeName = "카페라떼";
//     console.log(coffeeName);
//     setTimeout(() => {
//       coffeeName = "카페모카";
//       console.log(coffeeName);
//       setTimeout(() => {
//         coffeeName = "아메리카노";
//         console.log(coffeeName);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// > 코드가 너무 길어짐 >> 쪼개서 씀

// let coffeeName = "";

// const addAmericano = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
// };

// const addMocha = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
//   setTimeout(addAmericano, 2000, "아메리카노");
// };

// const addLatte = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
//   setTimeout(addMocha, 2000, "카페모카");
// };

// const addEspresso = (name) => {
//   coffeeName += name;
//   console.log(coffeeName);
//   setTimeout(addLatte, 2000, "카페라떼");
// };

// setTimeout(addEspresso, 2000, "에스프레소");

// > 이것조차도 비효율적 & 불편

/* 약속 = promise // ES6 = 2015년
만약에 어떤 데이커를 가져오는데 문제가 없으면 A를 출력해줘,
그런데 만약에 문제 생겨서 오류 및 에러 발생하면 B를 출력해줘 라고 약속
-> 약속한 실행문 지켜보고 있다가 나중에 실행해줌 
-> 약속의 징표 1번만 쓰고 (문제없다면) > 실행은 간단하게 = promise 객체
*/

const addCoffee = (name) => {
  return (prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newName = prevName ? prevName + ", " + name : name;
        console.log(newName);
        resolve(newName);
      }, 2000);
    });
  };
};

// 고차함수
// then > resolve가 전달한 newname값 받음 >

// if 동기적 / promisie 비동기적 처리 > 여러개의 함수 병렬적으로 실행 (promise=비동기적처리를 할 떄 좋음 )
addCoffee("에스프레소")()
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라떼"))
  .then(addCoffee("아메리카노"));

// JS에서 class를 통해서 선언한 객체 가져올때 > 반드시 NEW라는 객체!

/////

// > 배열의 약식 방법
const arr = [1, 2, 3, 4];
console.log(typeof arr);

// 정석적 배열 방법
const arr1 = new Array();
console.log(typeof arr1);
// > class로 만들어진 방법임

arr1[0] = 1;
arr1[1] = 2;

console.log(arr);

// 우리가 아는 것은 기원은 객체 > new로 생성 가능
