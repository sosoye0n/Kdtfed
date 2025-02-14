// 음원 재생
// 하나의 음원 > 또다른 음원 클릭 >> 두 개의 음원 같이 나오지 않게
// 기존 음악 - 재생 정지 > 파이널 음악만 재생되게
// 하나의 변수 > 현재 재생되고 있는 음원 담고 > 기존 음원 멈춰라

// 일시정지, 플레이 버튼을 찾아와서 const선언 >

const songs = document.querySelectorAll(".albumTable-song");
let currentAudio = null;

songs.forEach((song) => {
  const playBtn = song.querySelector(".fa-caret-right");
  const pauseBtn = song.querySelector(".fa-pause");

  // 동위선상 형제요소의 음원이 재생
  // playBtn 클릭 > 5개의 노래 모두를 의미
  // > playbtn과 가장 가까이 있는 음원이어야 함
  // 클릭한 버튼 중 가장 가까이 있는 td를 찾아서 > td안에 있는 오디오 버튼 클릭 - closest**많이 사용
  // console.log(e.target.closest("td").querySelector("audio"));
  // 음원재생 > play 함수

  // 이 상태에서는 클릭한 노래가 모두 동시 재생
  // currentAudio(현재재생음악)
  // pause함수
  playBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");

    // 기존음악 pasue > 이제는 오디오 하나밖에 못들어옴
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }

    audio.play();
    currentAudio = audio;
  });

  //pause
  pauseBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");

    audio.pause();

    // current audio = null값으로 변경
    if (currentAudio === audio) {
      currentAudio = null;
    }
  });
});
