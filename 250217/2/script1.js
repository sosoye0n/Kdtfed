// // indexof
// const str = "Good morning, Everyone, Beautiful morning";
// // morning이 몇번쨰 인덱스에서 시작하는지
// // m이 시작하기 발견한 첫번쨰 타이밍 : 5 찾아옴
// // console.log(str.indexOf("morning"));

// // 두번쨰 모닝
// // 첫번째 단락 = 변수에 담아서
// let firstIndex = str.indexOf("morning");
// // console.log(firstIndex);
// // > 5값
// console.log(str.indexOf("morning", firstIndex + 1));
// +1 : 두번째 인덱스 값

// 존재하지 않는 문자열 찾아라!
// >> 무조건 디폴트로 -1값
// console.log(str.indexOf("evening"));

//// 3.startsWith : 해당문자열이 어떠한 문자로 시작하는가를 알려줌
const str1 = "Hello, everyone.";

// 5.
// 특정문자가 거기서 시작하는게 맞냐 아니냐
// console.log(str1.indexOf("every") === 7);
// console.log(str1.indexOf("every") !== 1);
// es 6 > includes(이 문자가 있냐 없냐만 봄-부분조합으로 one이 있다면 그것도 참)
console.log(str1.includes("every"));

////

// starts/ends 차이점 :
// startsWith : 순번을 의미
// console.log(str1.startsWith("l", 2));
// // endsWith(,두번쨰 인자값) : 1번 인자값이 2번쨰 인자값을 가지고있는 전체길이에서 마지막인거냐
// console.log(str1.endsWith("one.", 16));
// console.log(str1.endsWith("lo", 5));
////

// 3개 다 true값
// console.log(str1.startsWith("Hello"));
// console.log(str1.startsWith("He"));
// console.log(str1.startsWith("Hello, eve"));

// 4.endsWith()
// console.log(str1.endsWith("everyone."));
// console.log(str1.endsWith("one."));
// // 특수문자 x : false
// console.log(str1.endsWith("lo, everyone"));
