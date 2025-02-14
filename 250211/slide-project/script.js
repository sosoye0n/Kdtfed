// 버튼(prev, next) : 이벤트 트리거

const btns = document.querySelector(".controls");
const preBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// 클릭했을 떄 움직여야 할 대상 : slides
const slides = document.querySelector(".slides");
const silde = slides.querySelectorAll("li");

const slideCount = silde.length;
const slideWidth = 200;
const slideMargin = 30;

let currentIdx = 0;

// 슬라이드가 5번 도착시 전달 컨텐츠 없음 >> 슬라이드01이 나와야 함 > 복제품

// 복제가 가능한 이유 : 01-05의 원본이 도큐먼트에 있어서 > DOM이라서(모든 스크립트의 이벤트는 DOM기반)
// 복습 ㅠㅠ

// cloneNode

// 초기화
// slide를 위에 const 선언 했는데 또 다시 선언하는 이유 : 15개가 된 li를 찾아오기 위해 > 복제가 된 이후
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  // 15개 li width값 다시 정의
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.width = newWidth;
};

const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `-translateX(${initialTranslateValue}px)`;
};

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = silde[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPos();
};

makeClone();

// 매개변수 이름 num으로
// slides가 한 칸식 왼쪽으로 움직여야 > css처리 > style
// 변수(slideWidth + slideMargin) + 문자 > 템플릿리터럴
// 배수 > num 값을 배수로
// 클릭시 계속 증가 : currentIdx = num;

const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
};

// 버튼을 누르면 어떻게 움직일 것인가 > 230
// 230px -  230*2 / 230*3
// 등차수열의 형태
// 각 박스는 200 / 여백 30 : 고정값

// 증감연산자

// 최초 상태에서는 아무런 움직임 없어야 : 0
// (200+30) : 고정값인 상수값
// (200 + 30) * 0
// (200 + 30) * 1
// (200 + 30) * 2
// (200 + 30) * 3
// (200 + 30) * 4
// > 총아이템 개수 5개 = slide의 length값

// callback에 callback으로
// moveslide :  +1 실행하도록 만드는 함수

nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

preBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});
