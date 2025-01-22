/// Test02 //

// 사용자의 로그인을 허락해주고자 함

// 사용자가 로그인을 하기 위한 정상적인 정보는 id = ezen1234, pw = 1234567 로 설정

// 사용자에게 id와 pw를 받아서 정상적인 정보라면 "00님, 반갑습니다" 라는 알림창이 나오게 해 주세요

// 만약, id가 잘못된 정보라면, "id가 일치하지 않습니다" 라는 메시지를 알림창으로 전달해주세요

// 만약, Pw가 잘못된 정보라면, "pw가 일치하지 않습니다" 라는 메시지를 알림차응로 전달해주세요

// 내 코드

// const id = prompt("아이디를 입력하세요");
// const pw = prompt("비밀번호를 입력하세요");

// if (id, pw !== "" || id !== null) {
//   if (id === ezen1234) {
//     alert(`${}님, 반갑습니다.`);
//   }
// }

// location.reload();

// 쌤 코드

/* server */
const id = "ezen1234";
const pw = "1234567";

/* client */
const userName = prompt("당신의 이름을 입력하세요");
if (userName !== "" && userName !== null) {
  const userId = prompt(`${userName}님 아이디를 입력하세요`);
  if (userId !== "" && userId !== null) {
    if (userId === id) {
      const userPw = prompt(`${userName}님 반갑습니다, 패스워드를 입력하세요`);
      if (userPw === pw) {
        alert(`${userName}님 반갑습니다, 오늘도 좋은 하루 되세요`);
      } else {
        alert("패스워드가 일치하지 않습니다");
      }
    } else {
      alert("아이디가 일치하지 않습니다");
      location.reload();
    }
  } else {
    alert("아이디를 입력하세요");
    location.reload();
  }
} else {
  alert("정상적인 이름을 입력하세요");
  location.reload();
}
