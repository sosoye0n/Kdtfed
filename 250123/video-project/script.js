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

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    console.log("hover");
  });
});
