// Test

// 제목, 저자란에 값 입력 > 저장하기(trigger) >
// 이벤트부여 > 제목,저자의 값 필요 > 하단 란에 입력
// > 삭제하기

////내코드

// const title = document.querySelector(".title");
// const author = document.querySelector(".author");
// const trigger = document.querySelector("title", "author");

// trigger.addEventListener("click", function() {
//   this.parentNode.
// });

//// ** 쌤 코드 **
const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const bookList = document.querySelector("#booklist");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 예외 조항 처리 > innerHTML활용
  if (title.value === "" || author.value === "") alert("정보를 입력해주세요");
  else {
    const liItem = document.createElement("li");
    liItem.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;

    bookList.appendChild(liItem);

    title.value = "";
    author.value - "";

    // removeChild > 삭제하기 버튼에서 시작(부모는 li요소)
    const delButtons = document.querySelectorAll("span");
    delButtons.forEach((delButton) => {
      delButton.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    });
  }
});

// // createElement 사용
// const spanItem = document.createElement("span");
// liItem.appendChild(spanItem);

// 내코드 재도전
// const title = document.querySelector("#title");
// const author = document.querySelector("#author");

// const form = document.querySelector("form");

// form.addEventListener
