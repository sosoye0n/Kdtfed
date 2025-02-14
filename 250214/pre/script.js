/* 객체종류

1. 내장객체 : new Date(), Math

2. 브라우저객체 : window(*엄청 많음)

3. 문서객체 : document

4. 사용자정의 객체 : 직접 개발자가 원하는 형태 & 기능을 담고 있는 객체의 형태로 정의하는 것을 의미

객체는 특징 및 원리 혹은 패턴을 가지고 있음
객체는 Property(*속성)로 구성되어 있음

그렇다면 속성은 어떤 형태를 띄고 있는가?
반드시 key:value의 형태를 띄고 있는 1쌍이다.
value에 입력될 수 있는 값의 형태는 숫자, 문자만 가능한가? // 배열도 가능 / 함수도 가능

객체의 특정 key안에 value값으로 입력된 자료의 형태가 함수인 경우에는 별도의 용어를 사용한다.

method = 메서드 = 방법 =>
우리가 그동안 사용했던 querySelector() => 함수

window.document.querySelector() - 도큐먼트라는 객체의 함수인 것  > querySelctor의 메서드
> window.documet : window의 property
> 결국 함수도 객체! > 자바스크립트: 객체지향언어라고 하는 이유!

*/

// 객체를 정의하는 방법(온점표기법/대괄호표기법)
let obj1 = new Object();
console.log(obj1);

// // 온점표기법으로 name 이라는 key > david
obj1.name = "David";
console.log(obj1);

// 대괄호표기법
obj1["gender"] = "male";
console.log(obj1);

obj1.name = "Romeo";
console.log(obj1);

// // key삭제 가능 > delete예약어로
delete obj1.name;
console.log(obj1);

////
// student {} : 객체가 된 것 > 객체가 사용가능한 속성, 함수 메서드 사용가능
// name = key > 중첩객체(score: {})

const student = {
  name: "juliet",
  score: {
    history: 85,
    science: 94,
    // 객체안에 들어오는 함수 : method > average라는 메서드함수 > funcion 익명함수
    average: function () {
      // 힘수 밖에서 반환해 쓰고 싶다면 > return
      // 여기서 this > score(average를 감싸안고 있는)
      // 여기서 function이 화살표 함수가 되면 > this는 윈도우 객체가 됨
      return (this.history + this.science) / 2;
    },
  },
};

// // 온점표기법 > 온점 > 온점
// console.log(student.score.average());

//
const book3 = {
  title: "누구나 처음은 있다",
  page: 350,
  buy: function () {
    console.log("이 책을 구입했습니다");
  },
};

// 뒤에 price값 추가 > const를 썼는데 재할당이 되는지 > 원시타입/참조타입(변수 데이터공간 별도로 생성>그 값 찾아옴> 주소값을 넣기 때문에)
book3.price = 20000;

console.log(book3);
// book3.buy();
