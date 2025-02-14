// 사용자 정의 객체 생성

const newBook = {
  title: "javascript",
  page: 360,
  price: 32000,
  author: "박세진",
  published: "2025-04-22",
  question: function () {
    console.log(`${this.author}님의 따끈한 신간도서입니다`);
  },
};

// newBook.question();

//
//  생성자 함수(5만번 복제 하지 않으려면)
// 특정 객체를 반복적으로 만들어내기 위한 함수
// 받아야하는 값(안에) > {객체 생성} > 만들어진 객체 : this라고 지칭 > 온점표기법
function Book(title, page, price, author, published) {
  this.title = title;
  this.page = page;
  this.price = price;
  this.author = author;
  this.published = published;
  // question은 메서드 함수이기에 function 사용
  this.question = function () {
    console.log(`${this.author}님의 따끈한 신간도서입니다.`);
  };
}

// 생성자 함수를 만들고나서 해당 생성자 함수를 사용하고자 할 때에는 반드시 new라는 예약어 사용해야 함
const book1 = new Book("Javascript", 360, 32000, "박세진", "2025-04-22");

console.log(book1);
book1.question();

//// 생성자함수 > class라는 개념으로
