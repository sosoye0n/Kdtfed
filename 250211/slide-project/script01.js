// 버튼(prev, next) : 이벤트 트리거
const btns = document.querySelector(".controls");
const preBtn = btns.querySelector(".prev");
const nextBtn = btns.querySelector(".next");

// 클릭했을 때 움직여야 할 대상 : slides
const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");

const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;

let currentIdx = 0;

// 슬라이드가 5번 도착시 전달 컨텐츠 없음 > 슬라이드01이 나와야 함 > 복제품

// 복제가 가능한 이유 : 원본(01-05)의 도큐먼트가 있어서 > DOM기반(모든 스크립트의 이벤트는 DOM을 기반으로)

const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.width = newWidth;
};

const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
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
  setTimeout(() => {
    slides.classList.add("animted");
  }, 100);
};

makeClone();

const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;

  // prev / next 5번 누른 것과 같음
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    // rewind > transition 줬기 때문에 > 제거해주면 됨
    // 가상클래스 active > transition을 가상 클래스로 주면 편함
  }
  // setTimeout : 지연시간(0.6s후 움직임)
  setTimeout(() => {
    slides.classList.add("animted");
  }, 600);
};

nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

preBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

let timer = undefined;

// 자동슬라이드 setInterval()
// timer - 전역변수로 선언되어야 > break줄 수 있음
const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlideSlide();
});

// 버튼 mouserenter > stop
btns.addEventListener("mousenter", () => {
  autoSlide();
});
