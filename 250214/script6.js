/* 
console창에
> let arr = new Array()
undefined
> arr
[]

> arr이 배열이 될 수 있는 이유
arr = 인스턴스객체
Array = 프로토타입

> new 예약어로 호출하는 순간 프로토타입으로 생성된 속성값을
인스턴스가 그대로 상속

-
arr.__proto__
> 속성값 확인하고자 할 때

// 인스턴스 객체 & 프로토타입의 관계
1. Class 혹은 생성자 함수를 사용해서 객체의 포맷(*형태)를 구현할 수 있음

2. Class 혹은 생성자 함수를 사용해서 만들어진 포맷을 사용하려면 new 예약어와 함께 Prototype 객체(*함수)를 호출하면 가능

3. 이렇게 호출해온 Prototype객체의 속성 및 매서드를 상속받은 요소를 instance라고 함

4. 만약 인스턴스 객체의 원조라고 할 수 있는 Prototype이 무엇인지, 혹은 해당 Prototype이 가지고 있는 속성 및 메서드 함수를
확인해보고자 할 때 사용할 수 있는 속성은 __proto__ 

5. 인스턴스 객체에 영향을 준 프로토타입(Book)의 조상이 누구인지를 확인해볼 수 있는 속성 = Prototype(__proto__보다 한 단계 위)



*/
// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     let str = "";
//     this.done === false ? (str = "읽는 중") : (str = "완독");
//     return str;
//   };
// };

// finish함수가 없다고 가정 > 호환 X
// > 이전 함수 & 이후 함수 다  쓰고 싶다면 > 업데이트된 생성자 함수 만들면 됨
// 1. 외부에서 끌어다쓰는 법 :
const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
};

// Book의 조상 prototype에 finish함수 추가 > finish함수 쓸 수 있음(상속 받아옴)
Book.prototype.finish = function () {
  // Book의 인스턴스 객체
  let str = "";
  this.done === false ? (str = "읽는 중 ") : (str = "완독");
  return str;
};

// book1 = 인스턴스객체 > Book이라는 프로토타입으로 탄생
const book1 = new Book("Typescript", 648, false);

// object => object => 생성자함수 => Prototype => instance : 자바스크립트가 객체지향 언어인 이유(마지막은 object)
// prototype 속성은 프로토타입에 영향을 주는 부모요소를 찾아오고 싶을 때
// __proto__ : 인스턴스에 영향을 주는 프로토타입을 찾아오고 싶을 때
// >> prototype의 속성값에 접근 & 편집할 수 있는 키가 됨
