// 날짜
const displayDate = document.querySelector("#today");
// 시간 -1초에 한 번씩 초침이 움직여야 함 > set interval
const displayTime = document.querySelector("#clock");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay();

let day2;

// Switch문에서 Break 필수!
switch (day1) {
  case 0:
    day2 = "일요일";
    break;
  case 1:
    day2 = "월요일";
    break;
  case 2:
    day2 = "화요일";
    break;
  case 3:
    day2 = "수요일";
    break;
  case 4:
    day2 = "목요일";
    break;
  case 5:
    day2 = "금요일";
    break;
  case 6:
    day2 = "토요일";
    break;
}

displayDate.innerText = `${year}년 ${month}월 ${date}일 ${day2}`;

// 시 분 초 값 찾아오기
const clock = () => {
  const current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();

  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  // sec 재할당 > 10보다 작으면 앞에 0 붙이기 / 그렇지 않다면 그냥 secs 그대로
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  // 현재 시간(시, 분, 초) > 앞에 0 넣어주고 싶음
  displayTime.innerText = `${period} ${hrs}시 ${mins}분 ${secs}초`;
};

setInterval(clock, 1000);
