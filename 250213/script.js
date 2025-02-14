// 수학객체(Math)
// class -> new
// 주로 사용하는 수학객체

// ceil : 올림(*반올림x)
// ploor : 내림
// round : 5기준 반올림/내림

// 소수점 자리수 정의 : toFixed **
// (Math.PI).toFixed(3) - 소수점 3번째 자리까지

////
/*
원의 넓이 : 파이 * r제곱
r = 반지름

원의 둘레 : 2 * 파이 * r
---


*/

const radius = prompt("반지름의 크기는?");

const area = (r) => {
  return Math.PI * r * r;
};

// 원의 둘레
const circul = (r5) => {
  return 2 * Math.PI * r;
};

const result = document.querySelector("#result");

result.innerText = `
반지름: ${radius},
원의 넓이 : ${area(radius).toFixed(3)},
원의 둘레 : ${circul(radius).toFixed(3)}
`;

/*Math.random() *****
실수 값 > 난수의 (0,1사이의 실수 값 > 난수로 반환)

* 1부터 100까지 숫자를 무작위로 찾아와야 하면 >
1. 숫자의 범위부터 계산(1-100) : * 100을 해줘야(0-1사이 값이기 때문에) - 최대값은 99.9999 절대 100은 나오지 않음
> 100이 되려면 +1 해줘야 > 100초과
>> Math.floor(Math.random() * 100 + 1) > 1과100사이의 값이 무조건 나오게 됨

 */