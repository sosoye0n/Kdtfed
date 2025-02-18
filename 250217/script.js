// const str = "hello";

// console.log(str.length);

// 문자열은 유사배열이다
// > 배열이 가지고 있는 속성들을 많이 사용하고 있어서

// console.log(str.length) > 5 (아이템의 개수 의미) : 문자열에서도 length를 쓸 수 있음

// const str = "Good Morning";
// // G = 0번쨰 인덱스 값
// // 띄어쓰기,빈공간도 문자열로 취급
// // 아이템 개수 = 12개

// // console.log(str.length);
// // >> 12개

// console.log(str.charAt(3));
// console.log(str[3]);
// charAt(3) : 특정 문자열에 대한 위치를 파악하고 싶을 때 - 인자값으로 들어오는 인덱스 값을 찾아 줌
// 3번 인덱스값 = D를 찾아 줌
// > es6이후 문법 : 대괄호로도 찾아 줌
// *두 가지 모두 맞는 방법 : 실무에서 많이 사용*

////

const string = prompt("문자열을 입력하세요");
const letter = prompt("어떤 문자를 체크하겠습니까?");
// counting 선언부
const counting = (string, letter) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    // 아래 두 개는 동일한 기능
    // if (string[i] === letter) count += 1;
    if (string.charAt(i) === letter) count += 1;
  }
  return count;
};

// 몇 번째 문자열인지 result에
// counting은 위 두가지 매개변수 받아와야
// count 값 3, 해당 문ㄴ자열 3개인 것!
const result = counting(string, letter);
document.write(`${string}에는 ${letter}가 ${result}개 있습니다.`);
