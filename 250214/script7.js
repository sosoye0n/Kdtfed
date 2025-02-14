function Book(title, price) {
  this.title = title;
  this.price = price;
}
//Book이라는 생성자함수가 조상이 되고

// buy추가
Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다`);
};

const book1 = new Book("Javascript", 10000);
book1.buy();

function TextBook(title, price, major) {
  // 이미 Book이 만들어 놓은 상속받아오고자하는 생성자함수를 call
  // 아래 this는 Book의 동일한 this 상속
  Book.call(this, title, price);
  // TextBook으로 생성될 this
  this.major = major;
}

//prototype으로 buyTextbook생성
TextBook.prototype.buyTextbook = function () {
  console.log(`${this.title} 전공서적, ${this.major}을 구매했습니다`);
};

// 이 장치를 반드시 해줘야 상속주는 것과 받는 것 알 수 있음
Object.setPrototypeOf(TextBook.prototype, Book.prototype);
// 3개 속성과 2개 매서드함수가 있어야
const book2 = new TextBook("컴퓨터공학", 5000, "알고리즘");

console.log(book2);
book2.buyTextbook();
book2.buy();

// class로
