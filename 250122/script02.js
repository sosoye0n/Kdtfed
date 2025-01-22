// 사용자에게 어떤 숫자를 받을 예정
// 그 숫자가 소수인지 아닌지를 판별하는 프로그램 제작
// 소수 => 소수점x // 1과 본인 자신만 나눌 수 있는 숫자 = 소수

const number = parseInt(prompt("자연수를 입력하세요"));
let isPrime;

// 예외조항
// isNaN(숫자인지 아닌지 판별)
if (!isNaN(number)) {
  if (number === 0 || number === 1) {
    alert(`${number}는 소수도 합성수도 아닙니다`);
    location.reload();
  } else if (number === 2) {
    isPrime = true;
    alert(`${number}는 소수입니다`);
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }
  }
} else {
  alert("숫자가 아닙니다");
  location.reload();
}

if (isPrime) {
  alert(`${number}는 소수 입니다`);
} else {
  alert(`${number}는 소수가 아닙니다`);
}

// trick switch
