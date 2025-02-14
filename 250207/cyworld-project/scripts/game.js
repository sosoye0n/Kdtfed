// 끝말잇기 & 로또 게임 //

/* word Game */
const form = document.querySelector(".word-text > form");

const gameStart = (e) => {
  e.preventDefault();
  const word = document.querySelector("#word").innerText;
  const myword = document.querySelector("#myword").value;

  // 배열의 length값 -1
  // 문자열 동시에 하니까 찾아오지 못하니 const word에 아예 innerText를 사용
  // last- first 값 동일해야 게임 성립

  const lastword = word[word.length - 1];
  const firstword = myword[0];

  if (lastword === firstword) {
    document.querySelector("#result").innerText = "정답입니다💛";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다💦";
    document.querySelector("#myword").value = "";
  }
};

form.addEventListener("submit", gameStart);

/* Lotto Game */
const lottoButton = document.querySelector(".lotto-btn");
const result = document.querySelector(".game-lotto-number");
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

// 2개 숫자 고정값 = 상수 값

// 6번 실행 > 반복문
// 추첨되어진 숫자 담을 변수 > let myNumber(재할당 가능한 let)

// 숫자가 랜덤으로 추첨 - landom함수
// Math.random() > 1이 나올 수 없음 +1 = 1 > but 소수점은 붙을 것 > 버리는 함수 = floor함수

// 45가 나올 수 없음
//  for (let i = 0; i < digitCount; i++) {
//  Math.floor(Math.random() * maxNumber) + 1;
//}

// 랜덤값이 겹쳐지고 싶지 않게 하는 > set함수
// set함수 = 하나의 배열 안 중복되는 값 절대로 허용 x

// 원래   let myNumber = []; 이 값을
// > let myNumber = new Set(); >> set의 속성을 가지고 있는 배열로 변경 > but 이 기능은 push 못 씀 > add로 변경

const startLotto = () => {
  // **중요**구조 분해 할당(위에 digi, max, luckyNumber 설정 )
  // const digitCount = 6;
  // const maxNumber = 45;
  const { digitCount, maxNumber } = luckyNumber;

  let myNumber = new Set();

  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }

  // set은 length아닌 size 속성 사용
  // 추첨 숫자는 game-lotto-number 안으로

  // 전개연산자 구문 : 배열 안 고유한 값 문자화 > 새로운 배열로 만들어주는 >> innerText = [...myNumber];
  //innerText = [...myNumber]; > 문자열로 (템플릿 리터럴 문법으로)

  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "재추첨하겠습니다 ❕";
  }
};

lottoButton.addEventListener("click", startLotto);
