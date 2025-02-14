// 미션
// 사용자에게 지름 & 높이 값을 받아서 원기둥의 부피를 구하는 프로그램 코드를 작성하세요

// 원기둥의 부피를 구하는 공식 = 밑면적 X 높이
// 밑면적 = Math.PI * R * R
// Radius = 반지름

// 어떤 원기둥을 예상하더라도 해당 결과값이 출력될 수 있도록 생성자함수로 코드를 구현

const cylVolume = {
  raidus: document.querySelector("#cyl-diameter"),
  height: document.querySelector("#cyl-height"),

  result: function () {
    console.log(`원기둥의 부피는${cylVolumeResult}입니다.`);
  },
};

function cylVolume(Radius, height) {
  this.raidus = raidus;
  this.height = height;
}
