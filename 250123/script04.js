// Event 버블링 & 드릴링

// 왜 over를 쓰지 않고 enter를 쓰는가를 명확하게 알고 써야함 > enter 사용!

////
// mouseover event

let o = 0;

const overoutOut = document.querySelector("div.out.overout");
overoutOut.addEventListener("mouseover", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseover";
  pItems[3].innerText = ++o;
});

///

const overoutIn = document.querySelector("div.in.overout");
overoutIn.addEventListener("mouseover", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseover";
  pItems[1].innerText = ++o;
});

// mouseenter Event

let e = 0;

const enterleaveOut = document.querySelector("div.out.enterleave");
enterleaveOut.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[3].innerText = ++e;
});

///

const enterleaveIn = document.querySelector("div.in.enterleave");
enterleaveIn.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[1].innerText = ++e;
});
