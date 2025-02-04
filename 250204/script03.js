// 모달창
// 모달 전 세부 정보 페이지 설정
// > 모달 뜬 후 페이지 어떻게 디자인
// > 누구한테 이벤트 줄건지
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const modalBox = document.querySelector("#modal-box");

// 프로필 보기 버튼 클릭
openButton.addEventListener("click", function () {
  this.classList.add("btnActive");
  modalBox.classList.add("active");
});

// 닫기 버튼 클릭
closeButton.addEventListener("click", function () {
  openButton.classList.remove("btnActive");
  modalBox.classList.remove("active");
});
