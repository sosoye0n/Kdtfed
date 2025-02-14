// 오늘 기준이니까 오늘 날짜 정보 찾아오기
const now = new Date();
// 처음 만난날 날짜 정보
const firstDay = new Date("2024-12-19");

// (1970년 기준 > ms의 값으로)
const toNow = now.getTime();
// toFirst = 고정값
const toFirst = firstDay.getTime();
// 경과한 시간 구하기
const passedTime = toNow - toFirst;
// 반올림 함수 > math.round
const passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

document.querySelector(".accent > span").innerText = `${passedDay}일`;

// 처음 만난 날부터 100일
// ms의 시간으로 계산 해 줘야함
// let future = toFirst + 100 * (24 * 60 * 60 * 1000);
// let someday = new Date(future);
// // 연원일 찾아오기
// let year = someday.getFullYear();
// let month = someday.getMonth() + 1;
// let date = someday.getDate();

const calcDate = (days) => {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  // 연원일 찾아오기
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

// 100일 ~

// // 100일 재할당 > 200일
// future = toFirst + 200 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date200").innerText = `${year}년 ${month}월 ${date}일`;

// // 365일
// future = toFirst + 365 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date365").innerText = `${year}년 ${month}월 ${date}일`;

// // 500일
// future = toFirst + 500 * (24 * 60 * 60 * 1000);
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth() + 1;
// date = someday.getDate();
// document.querySelector("#date500").innerText = `${year}년 ${month}월 ${date}일`;
