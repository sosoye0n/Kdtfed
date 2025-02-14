/* hashlist sticky 이벤트 **
1. 스크롤시 해시리스트
2. window > scrollY값 (Ex.apple페이지 스크롤 내릴 때 줌인 줌 아웃
* ex- 가로로 움직이게 하고 싶다면: translate로(+ , -))
3. 나와야하는 지점

// 이게 전형적인  sticky 사용 방법
>> 응용 : 스크롤 움직일 때마다 메뉴 왼쪽으로


 */

window.addEventListener("scroll", () => {
  const hashlist = document.querySelector(".hashlist");
  const srollY = window.scrollY;
  if (scrollY > 268) {
    hashlist.classList.add("active");
  } else {
    hashlist.classList.remove("active");
  }
});

////

/* touch 이벤트

너비 값을 알아야 / +- 줄 수 있음
226 정직
console.log(listClientWidth); = 586
+ 룸을 줘야 함

여백값을 가진 너비 하나 정의
// listScrollWidth = hashContent.clientWidth + 226;
- 586 + 226 안에서 586이 움직일 수 있는 것-있어야 스크롤 가능!(여백 226)


-
812 전체공간 확보
586 스크롤자체컨텐츠 너비
226 스크롤이 가능하도록 하기 위해서 준 여백의 공간

*/
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

// 최초 손가락이 찍은 지점
let startX = 0;
// 이동 중(찍어서 움직인 지점)
let nowX = 0;
// 뗀 지점
let endX = 0;
// 두번째 손가락 댄 지점
let listX = 0;

// 움직여야 함 / 떼거나
// 움직인 상태에서 무브 touchmove

// startX에 값을 넣어야 > getclient > return필요
// clientX :내가 선택한 지점
const getClientX = (e) => {
  return e.touches ? e.touches[0].clientX : e.clientX;
};

// **** getCouputedStyle > 변환에 대한 속성값 가지고 있음 >> 움직인 값 반환
const getTranslateX = () => {
  // matrix(-90 : -90만큼 움직인 값 > list X 한테)
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

// 손가락으로 움직였을 때
const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

// now - start : 무조건 음수 값 나옴

// 2번째 움직일 때 - listX(이미 움직인 값 기억) : 값 더해줘야 함
const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;

    window.removeEventListener("touchstart", onScrollStart);
    window.removeEventListener("mousedown", onScrollStart);

    window.removeEventListener("touchmove", onScrollMove);
    window.removeEventListener("mousemove", onScrollMove);

    window.removeEventListener("touchend", onScrollEnd);
    window.removeEventListener("mouseup", onScrollEnd);
  }
};

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);

  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);

  // window.addEventListener("touchstart", onScrollStart);
  // window.addEventListener("mousedown", onScrollStart);
};

// touchstart : 모바일에서만 확인 가능
hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
