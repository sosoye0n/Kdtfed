// console.log(document.querySelector("#order-name").value);

// 사용자가 선택한 과일 > 알림창 형식으로 뜨게
const fruitItems = document.querySelector("#items");

const displayfruit = () => {
  let selectedText = fruitItems.options[fruitItems.selectedIndex].innerText;
  alert(`[${selectedText}]를 선택했습니다`);
  // console.log(selectedText);
};

fruitItems.addEventListener("change", displayfruit);
