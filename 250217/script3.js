// split
// 가운데 빈 문자열 기준 :Good / morning
// > 배열로 변경

let str = "Good Morning";

const arr = str.split(" ");
console.log(arr);

// 비어져있는 문자열 :
// 1. " " - 빈칸
// 2. "" - 문자 하나하나 독립적 아이템으로
// console.log(str.split(" "));
