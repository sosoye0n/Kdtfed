// const articles = document.querySelectorAll("article");

// articles.forEach((article) => {
//   article.addEventListener("mouseover", () => {
//     console.log("hover");
//   });
// });

////
// mouseover > 한 번에 4번씩 오버
// mouseenter > 1번씩 오버

// 이벤트 버블링 / 드릴링 (둘 중 하나 택하게 되어있는데 - 오버, 엔터에 따라 다름)

// 버블링 : 이벤트가 발생하면 위로 올라감 >> 하나 체크박스 - 밑으로 랜딩 될 때

// 드릴링 : 밑으로 내려감

const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = document.querySelector("span");

articles.forEach((article) => {
  article.addEventListener("mouseenter", (event) => {
    const video = event.target.querySelector("video").play();
  });

  article.addEventListener("mouseleave", (event) => {
    const video = event.target.querySelector("video").pause();
  });

  article.addEventListener("click", (event) => {
    const tit = event.currentTarget.querySelector("h2").innerText;
    const txt = event.currentTarget.querySelector("p").innerText;
    const vidSrc = event.currentTarget
      .querySelector("video")
      .getAttribute("src");

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);

    aside.classList.add("on");
    aside.querySelector("video").play();
  });

  close.addEventListener("click", () => {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
  });
});

/* current target : null값

// current target : null 이벤트가 실행할 때의 타겟
// 이벤트 객체는 실시간으로 반영되지 않음
// 이벤트 작동 이후에 별도의 값을 찾아오는 것이지 , 실시간으로 값이 바뀌는 게 아님
// current target : 이벤트 객체가 생성되어지는 
// 이벤트 객체가 최초의 탄생되는 시점 - current target = null 값 // null인 상태로 끝
// 실제 작동 >> 콘솔창에는 출력 x 
// >> 브라우저가 실행될 때 값은 null값으로 종결

실제 이벤트 발생 지점 / 이벤트
리엑트 = current target만 있음
>> 돔이라는 개념을 알아야

*/
