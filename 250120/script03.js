// 사용자에게 교통비, 식비, 음료비 이상 3개의 값을 전달받아서 3개의 총합이 적정지출 비용을 초과하는 경우, "00원 초과, 지출을 줄여주세요" , 만약 초과하지 않은 경우, "00원 유지, 축하드립니다" 메세지가 콘솔창에 출력되도록 해주세요

// 적정지출비용은 10,000원

let traffic, food, drink;

traffic = parseInt(prompt("교통비를 입력하세요"));
food = parseInt(prompt("식비를 입력하세요"));
drink = parseInt(prompt("음료비를 입력하세요"));

let total = traffic + food + drink;
let result = total < 10000;

const plus = total - 10000;
const minus = 10000 - total;

result = result
  ? `${minus}원 남았습니다.돈 관리 잘했어요`
  : `${plsu}원 초과했습니다 돈 관리 잘해주세요`;
console.log(result);

// TEST

// const transper = prompt("교통비를 알려주세요");
// const eat = prompt("식비를 알려주세요");
// const drink = prompt("음료비를 알려주세요");

// const plus=(transper + eat + drink);
// let result = result ? `${}초과, 지출을 줄여주세요` : `${}원 유지, 축하드립니다`;

// console.log(plus);
