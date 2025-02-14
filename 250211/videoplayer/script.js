// 재생버튼 클릭 > 영상재생
const playButton = document.querySelector(".play-pause");
const player = document.querySelector("#music-player");
const video = document.querySelector("video");
const progressCover = document.querySelector(".progress");
const volumeBar = document.querySelector("input[type='range']");
const fullButton = document.querySelector("#fullscreenBtn");
const rateButtons = document.querySelectorAll(".rate");

const play = () => {
  playButton.innerText = " || ";
  video.play();
};

const pause = () => {
  playButton.innerText = " ▶ ";
  video.pause();
};

// paused >boolean값 찾아옴
const togglePlay = () => {
  video.paused ? play() : pause();
};

// 전체 영상의 시간 > 기본 ms > 사람이 이해할 수 있는 포맷으로 바꿔줘야 함 > formatting
const formatting = (time) => {
  // 1시간 = 60분
  // 1분 = 60초
  // 1초
  // >

  // 분, 초
  //   시간 값(공식 * 그냥 외우기) : let hour = time / 3600;
  // // 분으로 나누고 > 초로 나누기
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  // 10으로 나누어서 크냐 작냐에 따라
  // > 줄어들어 보이지 않게끔 > 10이하면 앞에 0을 넣어줌
  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

// bar 색칠
// 1초 1%씩 증가
// 백분율로 분모, 분자 * 100%
const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  // circle - progressBar의 넓이 > 비례해서 우측으로
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  // 흰색 바의 전체 너비 : client Width
  const progressBarWidth = progressCover.clientWidth;
  // circle의 시간경과에 따른 새로운 위치
  // 전체 총 너비 = 100%로 계산
  // 전체 550중 얼마인지 > 오른쪽으로 이동
  // * progressBarWidth 값 곱하기
  const newPosition = (currentTime / duration) * progressBarWidth;
  // console.log(newPosition);
  progressPointer.style.left = `${newPosition}px`;
};

// 객체안에 있는 값 찾아오는 2가지 방법 >
// 온점표기볍 > ***구조분해할당 방식***
// playback - 영상의 재생속도 관여
const setVolume = (e) => {
  video.volume = e.target.value;
};

const setRate = (e) => {
  // const rate = e.target.dataset.rate;
  const { rate } = e.target.dataset;
  video.playbackRate = rate;
};

// 바 중 한 부분 클릭 > circle이동
// pageX값  전체 너비 - 여백(pageX값)
//  console.log(e.pageX);
// console.log(player.offsetLeft) - 다른 지점을 찍어도 일관되게 나와야
// offset : 영상이 떨어진 부분의 값
// pageX - offset 값
const videoPoint = (e) => {
  // console.log(e.pageX);
  // console.log(player.offsetLeft);
  const mouseX = e.pageX - player.offsetLeft;
  // 분모 역할
  const progressBarWidth = progressCover.clientWidth;
  // 영상 총 시간 중 몇 %인지 알아야
  const duration = video.duration;
  // 백분율 형식으로 계산(duration이 우리의 중심이니까 duration 으로)
  const clickedTime = (mouseX / progressBarWidth) * duration;
  video.currentTime = clickedTime;
};

// togglePlay callback함수 > 매개변수 인자값 X
playButton.addEventListener("click", togglePlay);
video.addEventListener("pointerdown", togglePlay);
// timeupdate: 해당 동영상 시간 업데이트 > 이벤트 발생
video.addEventListener("timeupdate", updateTime);

// 바 색칠
video.addEventListener("timeupdate", updateProgress);

// volume바 > change이벤트
volumeBar.addEventListener("change", setVolume);

// 바의 어느 부분을 클릭했을 때 이동
progressCover.addEventListener("click", videoPoint);

rateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});

fullButton.addEventListener("click", () => {
  video.requestFullscreen();
});

// fullscreenchange : full화면으로보게 될 떄
// pointerdown
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    document.addEventListener("pointerdown", togglePlay);
  } else {
    document.removeEventListener("pointerdown", togglePlay);
    // video.addEventListener("pointerdown", togglePlay);
  }
});
