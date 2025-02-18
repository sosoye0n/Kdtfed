// 문자열 예제

//// 이메일 보안 예제
// 사용자 이메일주소 입력 > 실행버튼 클릭
// > 사용자의 정보 보호 & 이메일값 출력

// button : 이벤트 트리거
const email = document.querySelector("input[type='email']");
const button = document.querySelector("input[type='button']");
const result = document.querySelector("#result");

/// 첫번쨰 방법 : 3개추출 - 몇 자리 수인지 알 수 없게 하기 위해>철저한 보안
// button.addEventListener("click", (e) => {
//   // 버튼 폼 안에서 작동되어지는거 막음
//   e.preventDefault();
//   // input에 입력되어지는 값
//   // if 예외조항 처리

//   // 빈문자가 아니라면
//   // 이메일 @ 기준으로 나눠 사용
//   if (email.value !== "") {
//     let userName = email.value.split("@")[0];
//     userName = userName.slice(0, 3);
//     let domain = email.value.split("@")[1];

// // 3번째문자 까지만 보이고 나머지 ***값으로!
//     result.innerText = `${userName}***@${domain}`;
//   }
// });

//// 2번쨰 방법 - 전체 몇자리까지는 알 수 있게
button.addEventListener("click", () => {
  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let domain = email.value.split("@")[1];

    let half = userName.length / 2;
    // 절반 직전까지만 재할당
    userName = userName.slice(0, userName.length - half);

    result.innerText = `${userName}***@${domain}`;
    email.value = "";
    // console.log(userName, domain);
  }
});
