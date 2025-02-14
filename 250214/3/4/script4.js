// 객체는 최소한 자바스크립트에서 만큼의 최초의 근원이다 > 모든 것의 근원이다

// 배열 = 객체, 함수 = 객체
//
// class Array {
//   constructor(length) {
//     this.length = length;
//   }

//   filter() {}

//   push() {}
// }

// const arr = new Array();
// console.log(typeof arr);

////

// 배열 => 반복순회(*iterable)한 객체
// 배열 / 객체(key, value등 property가 있음)

// for in문 : 객체전용 (pure한 객체만 쓸 수 있음)
const bag = {
  type: "backpack",
  color: "blue",
  price: 30000,
};

// for in문
// > let으로 item(key) 찾아옴
// key 찾아온거면 value 찾아온거나 마찬가지

// 여기서의 key = 문자로서의 key
// 대괄호표기법
for (let key in bag) {
  console.log(`#{key} : ${bag[key]}`);
}
