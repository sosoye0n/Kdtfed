// 유효성 검사( 일치하지 않습니다 )
// isValid
const signup_button = document.querySelector("#signup-button");
const token_button = document.querySelector("#token-button");

const token_timer_confirm_button = document.querySelector(
  "#token-timer-confirm-button"
);

let interval;

token -
  timer -
  confirm -
  button.addEventListener("click", (e) => {
    e.preventDefault();
    // getTokenTimer > 지역변수에 있는데 전역변수로 가져오고 싶다면
    clearInterval(interval);

    document.querySelector("#token-timer-confirm-button").style =
      "background: #fff;";

    document
      .querySelector("#token-timer-confirm-button")
      .setAttribute("disabled", true);

    document.querySelector("#token-timer-confirm-button").innerText =
      "인증완료";

    alert("인증이 완료되었습니다");

    document.querySelector("#signup-button").style =
      "background:#fff; color:#0068ff; border:1px solid #0068ff; cursor:pointer";

    document.querySelector("#signup-button").removeAttribute("disabled");
  });

const getTokenTimer = (e) => {
  e.preventDefault();
  // 1초 = 1000밀리초
  // 1분 = 1000밀리초 * 60 ( 60으로 나누어줘야)

  // 10초
  let timer = 10;
  // 하나씩 시간이 감소해야 함
  // > 감소연산자 > 1초에 한 번씩
  // 특정주기에 맞춰 반복실행 : setIntaval()
  interval = setInterval(() => {
    if (timer >= 0) {
      // 1분 : 60초
      // 60으로 나눈 몫 = 분
      // 10을 60으로 나누면 값 나올 수 x > floor : 값이 나올 없음
      const minutes = Math.floor(timer / 60);
      // 나머지값 - 초
      const seconds = timer % 60;

      // 두 자리 수 유지 > 두 자리가 나오지 않으면 0
      document.querySelector("#token-timer").innerText =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
      // 타이머 값을 하나씩 줄여서 할당
      timer -= 1;
    } else {
      // 아니라면 누르지 못하고 000000 , 로 바꾸어줘야 함
      document.querySelector("#token").innerText = "000000";
      document.querySelector("#token-button").style = "";
      document.querySelector("#token-button").setAttribute("diabled", true);

      document.querySelector("#token-timer").innerText = "03:00";
      //스타일회수
      document.querySelector("#token-timer-confirm-button").style = "";
      //
      document
        .querySelector("#token-timer-confirm-button")
        .setAttribute("diabled", true);

      // clearInterval
      clearInterval(interval);
    }
  }, 1000);
};

const signup = (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const writer = document.querySelector("#writer").value;
  const password1 = document.querySelector("#password1").value;
  const password2 = document.querySelector("#password2").value;
  const location = document.querySelector("#location").value;
  // checked
  const genderWoman = document.querySelector("#gender-woman").checked;
  const genderman = document.querySelector("#gender-man").checked;

  // 이메일 유효성 검사
  let isValid = true;
  if (email.includes("@") === false) {
    document.querySelector("#error-email").innerText =
      "이메일이 올바르지 않습니다";
    isValid = false;
  } else {
    document.querySelector("#error-email").innerText = "";
  }

  // 이름 유효성 검사
  if (writer === "") {
    document.querySelector("#error-writer").innerText =
      "이름이 올바르지 않습니다";
    isValid = false;
  } else {
    document.querySelector("error-writer").innerText = "";
  }

  // 비번 유효성검사
  if (password1 == "") {
    document.querySelector("#error-password1").innerText =
      "비밀번호를 입력해주세요";
    isValid = false;
  } else {
    document.querySelector("#error-password1").innerText = "";
  }

  if (password1 !== password2) {
    document.querySelector("#error-password1").innerText =
      "비밀번호가 일치하지 않습니다";
    document.querySelector("#error-password2").innerText =
      "비밀번호가 일치하지 않습니다";
    isValid = false;
  }
  // 지역 유효성검사
  if (
    location !== "seoul" &&
    location !== "gyeongi" &&
    location !== "incheon"
  ) {
    document.querySelector("#error-location").innerText = "지역을 선택해주세요";
    isValid = false;
  } else {
    document.querySelector("#error-location").innerText = "";
  }
  // 성별 유효성검사
  if (genderWoman === false && genderman === false) {
    document.querySelector("#error-gender").innerText = "성별을 선택해주세요";
    isValid = false;
  } else {
    document.querySelector("#error-gender").innerText = "";
  }

  // isvalid가 하나라도 false가 되면 - 넘어갈 수 x
  if (isValid === true) {
    alert("이젠아카데미 가입을 축하합니다.");
  }
};

signup_button.addEventListener("click", signup);

// 번호 자동으로 넘어가게
// 1번 010란
const phone1 = document.querySelector("#phone1");
const phone2 = document.querySelector("#phone2");
const phone3 = document.querySelector("#phone3");
// keyup > 손가락을 떼는 순간 이벤트 발생
phone1.addEventListener("keyup", () => {
  const phone1Value = phone1.value;
  // focus > 커서찍지 않아도 문자열 개수 3 > 넘어감
  if (phone1Value.length === 3) {
    document.querySelector("#phone2").focus();
  }
});
// 2번 두번쨰 영역
phone2.addEventListener("keyup", () => {
  const phone2Value = phone2.value;
  // focus > 커서찍지 않아도 문자열 개수 3 > 넘어감
  if (phone2Value.length === 4) {
    document.querySelector("#phone3").focus();
  }
});
// 3번째
phone3.addEventListener("keyup", () => {
  const p01 = document.querySelector("#phone1").value;
  const p02 = document.querySelector("#phone2").value;
  const p03 = document.querySelector("#phone3").value;

  if (p01.length === 3 && p02.length === 4 && p03.length === 4) {
    // 3,4,4 들어오면 disabled > abled
    document.querySelector("#token-button").removeAttribute("disabled");
    // 스타일속성 부여
    document.querySelector("#token-button").style =
      "background: #fff; color:#0068ff; cursor:pointer";
  }
});

// token_button 클릭 > 랜덤함수 6자리
token_button.addEventListener("click", (e) => {
  e.preventDefault();
  // random : 절대 1이 될 수 x
  // 1000000 : 100만은 될 수 x
  // floor: 소수점 버림

  // max 6개이지 6개가 무조건 나오는 건 아님!(개수가 랜덤!)
  // 숫자 > 문자로 바꿔줘야 함 (string) > padStart(6개유지, "0") 문자열 생성 , 첫번째 자리 값 , 채우지 못하면 0부터 채운다!
  // > 6자리로 완성되지 않으면 앞에 0이 붙음
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector("#token").innerText = token;

  document.querySelector("#token-button").style =
    "background: #fff; cursor:pointer";
  // disable상태로 다시 (번호 전송 한 번만 될 수 있게)
  document.querySelector("#token-button").setAttribute("disabled", true);
  // 인증완료 > 파란색으로
  document.querySelector("#token-timer-confirm-button").style =
    "background:#0068ff; color:#fff; cursor:pointer";
  // remove
  document
    .querySelector("#token-timer-confirm-button")
    .removeAttribute("disabled");

  // 인증번호 전송 후 숫자가 돌아가게
  // getTokenTimer: 숫자가 진행되어지는 함수
  getTokenTimer();
});
