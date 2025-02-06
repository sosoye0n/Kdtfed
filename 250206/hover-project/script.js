// 각 navi에 마우스가 오버될 때 >이미지 변경
// 유사 배열 / forEach문 / mouseHover 이벤트 줘야함

// li요소들을 찾아오고

// html에 li태그들에 [data-image]를 각각 넣어주고 >
// 속성값 세팅 set /get attribute
// photo의 bg값으로

/////

// const lis = document.querySelectorAll("li");

// lis.forEach((li, index) => {
//   li.addEventListener("mouseenter", () => {
//     lis.forEach((l, i) => {
//       if (i )
//     })
//   })
// })

////

const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

liItems.forEach((liItem) => {
  liItem.addEventListener("mouseenter", function () {
    const changeImg = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImg}")`;
  });
  liItem.addEventListener("mouseleave", function () {
    const changeImg = this.getAttribute("data-image");
    photo.style.backgroundImage = ``;
  });
});
