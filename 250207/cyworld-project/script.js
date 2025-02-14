// button Event
// navi에서 각 탭으로 이동하는 기능
// > 버튼 선택시 컬러 변경
const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #000";
  menuGame.style = "background: #552e4; color: #fff";
  menuJukebox.style = "background: #552e4; color: #fff";
};

const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #552e4; color: #fff";
  menuGame.style = "background: #fff; color: #000";
  menuJukebox.style = "background: #552e4; color: #fff";
};

const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "background: #552e4; color: #fff";
  menuGame.style = "background: #552e4; color: #fff";
  menuJukebox.style = "background: #fff; color: #000";
};

menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);
menuHome.addEventListener("click", homeChange);

// Count Event(원래는 서버가 있어야 확실히 할 수 있음)
// ** 난이도 있음 **
// 내장객체 > 다음주 내용에 많이 나올 것
// 실서버가 아니라 모바일에서는 작동하지 않을 수도 있음

/* 쿠키는 기본적으로 날짜 정보 데이터 필요
> 서버 => 클라이언트에게 쿠키를 전달한 이후, 해당 쿠키가 천년 만년 계속 유지 할 수 없음
*/

/* 날짜 포맷 설정
const getFormattedDate = () => {
  const date = new Date();
  console.log(date);
};

getFormattedDate();


-
날짜 정보 따로 빼기
getFullYear()
getDate()
getMonth() : 인덱스 0값을 시작 = 1로 인식
> 어쩔 수 없이 +1값을 추가해줘야 함
0깂을 의도적으로 넣어 숫자가 바뀌어도 문제 없게끔
// 함수 실행값의 반환 return문
> 이런 쿠키 값을 사용 : todayDate

/// TODAY의 유효기간은 하루 > 누적값이 TOTAl에

*/

// 날짜 포맷 설정
const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = "0" + (date.getMonth() + 1);
  const day = "0" + date.getDate();

  return `${year}-${month}-${day}`;
};

const todayDate = getFormattedDate();
// 쿠키 네이밍
const dailyCookieName = `pageHit_${todayDate}`;

const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 1);
const expireDateString = expireDate.toGMTString();

const cookieVal = (cookieName) => {
  const thisCookie = document.cookie.split("; ");
  for (let i = 0; i < thisCookie.length; i++) {
    if (cookieName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
};

let dailyHitCt = parseInt(cookieVal(dailyCookieName));
if (isNaN(dailyHitCt)) {
  dailyHitCt = 0;
}
dailyHitCt++;
document.cookie = `${dailyCookieName}=${dailyHitCt}; expires=${expireDateString}`;

let totalHitCt = parseInt(cookieVal("totalPageHit"));
if (isNaN(totalHitCt)) {
  totalHitCt = 0;
}

totalHitCt++;
document.cookie = `totalPageHit = ${totalHitCt}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

/* 
cookie값은 어떻게 생겼을까?

"쿠키네임 = 쿠키값; expires = 만료날짜 "
"pageHit_2025-02-07=5; expires=2025-02-08"

*/

// daily Count & total Count
document.querySelector(".zero").innerText = dailyHitCt;
document.querySelector(".total").innerText = totalHitCt;
