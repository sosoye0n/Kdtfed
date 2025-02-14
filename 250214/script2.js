// 생성자 함수 > class로 만든다면
// class = 예약어
// class > constructor() 함수 써야 함

// 기존 생성자함수 > 키값이 많아지는 경우 - 가독성 떨어짐 / 클래스 : 키값 따로 분류 가능
class Book {
  constructor(title, page, price, author, published) {
    this.title = title;
    this.page = page;
    this.price = price;
    this.author = author;
    this.published = published;
  }
  question() {
    console.log(`${this.author}님의 따끈한 신간도서입니다.`);
  }
}
const book1 = new Book("Javascript", 360, 32000, "박세진", "2025-04-22");

console.log(book1);
book1.question();
