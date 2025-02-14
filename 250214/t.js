// 미션
// 사용자에게 지름 & 높이 값을 받아서 원기둥의 부피를 구하는 프로그램 코드를 작성하세요

// 원기둥의 부피를 구하는 공식 = 밑면적 X 높이
// 밑면적 = Math.PI * R * R
// Radius = 반지름

// 어떤 원기둥을 예상하더라도 해당 결과값이 출력될 수 있도록 생성자함수로 코드를 구현

//// 선생님 문제풀이

// 생성자함수는 왜 사용하는가? 반복적인 패턴의 객체를 보다 효율적으로 만들어내기 위한 목적

// 객체만들기 => 정적인 속성값 관리 & 사용자의 요구사항에 따른 메서드 함수도 자유롭게 만들 수 있다는 것을 의미

//생성자함수에게 많은 것을 바라면
// 계산 공식 > 메서드함수로만 넣어놓는다면

const button = document.querySelector('input[type="button"]');
const result = document.querySelector("#result");

//
// 1. 생성자함수 : 대문자로 시작
// 밑면적, 높이 알아야
// 아래 두개의 프로퍼티 완성
// function Cylinder(cylinderDiameter, cylinerHeight) {
//   // diameter key 생성
//   this.diameter = cylinderDiameter;
//   this.height = cylinerHeight;
//   this.getVolume = function () {
//     // 반지름 : 지름 /2
//     const radius = this.diameter / 2;
//     // 원기둥의 부피 > 소수점 2자리까지만(toFixed(2))
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// 여기까지 생성자함수 였음

/// class로
// 두개의 키 생성 > 속성값으로
class Cylinder {
  constructor(cylinderDiameter, cylinerHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinerHeight;
  }

  getVolume() {
    const radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

//

button.addEventListener("click", (e) => {
  // input들을 이벤트 객체로 찾아올때는 > 항상 preventDefault를 생각해야 함
  e.preventDefault();
  // node를 찾아온것 > input안에 값 > value값을 찾아와야 함!
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  // 예외조항 처리
  if (diameter === "" || height === "") {
    result.innerText = "지름과 높이값을 입력하세요🖥";
  }
  // 아니라면 이제 부피를 구해야 > 생성자 함수 정의 필요
  else {
    // 아래 프로토타입에는 두가지 값 : 지름, 높이 주어야
    // input태그 문자열 > 숫자로 바꾸어주어야 (parsInt는 지금 실행되어야)
    // Cylinder > Getvolume

    // 오류남
    const Cylinder = new Cylinder(parseInt(diameter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${Cylinder.getVolume()}입니다`;
  }
});
