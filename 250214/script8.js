// script7을 class로
// 중급 >> 어려움 >>코드의 작동원리는 결국엔 class로 움직이기 때문에 알고있어야

//
class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다`);
  }
}

const book1 = new BookC("자료구조", 15000);

// book1.buy();

// extends : 연장 > 곧 상속으로 해석
class TextBookC extends BookC {
  // major값 추가로
  constructor(title, price, major) {
    // super로 : title, price골라오기
    super(title, price);
    this.major = major;
  }

  buyTextBook() {
    console.log(`${this.major} 전공서적, ${this.title}구매했습니다`);
  }
}

const book2 = new TextBookC("인공지능", 5000, "컴퓨터공학");

console.log(book2);
book2.buyTextBook();
book2.buy();

// 생성자함수보다 class가 더 간단
