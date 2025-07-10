// 목표 : 사용자가 스크롤을 내렸을 때, Header배경컬러 / banner height를 변경 => 가상클래스 적용

// 1. 사용자가 지금 스크롤을 내렸어
// > 스크롤은 브라우저가 가지고 있는 요소야
// > 브라우저야! 지금 스크롤이 내려갔니?

// 2. header는 html안에서 header라는 태그를 사용하고 있는 요소야 >

// 3. 사용자가 스크롤을 내렸으니까 빨리 acitve 클래스를 Header에게 적용시켜

// 브라우저가 가지고 있는 내장객체

// document.querySelector("#circle");
// 문서 => 개발자가 작성한 html 문서

/* scroll Event */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
    document.querySelector(".gototop").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
    document.querySelector(".gototop").classList.remove("active");
  }
});

/* slick-slider */
$(document).ready(function () {
  $(".myslider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    iFinite: false,
    dots: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 300,
          dots: true,
          isFinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          dots: true,
          iFinite: false,
        },
      },
    ],
  });
});

/* JS에게 이벤트 대상이 누구인지 알려주기 */

/* 이벤트 대상이 되어지는 요소(*html에서 찾아온 태그 / 클래스 / 아이디선택자)에게 어떤 이벤트를 부여할 것인가 결정 */

/* 이벤트를 첫 번째 적용할 때, 두 번째 적용할 때를 상이하게 작동하도록 제어 */

/* trigger Event */
const trigger = document.querySelector(".trigger");

trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".gnb").classList.toggle("active");
});

/* menu Event */
const menus = document.querySelectorAll(".gnb a .gototop");
menus.forEach((menu) => {
  menu.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
