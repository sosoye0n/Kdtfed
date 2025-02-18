// //
// let str = " ab cd ef ";

// // trim : 앞 뒤 비효울적 공간을 없애줌 - 가운데 여백과는 상관 없음 >> 사용자가 값을 입력했을 때 오류를 방지하기 위해
// console.log(str.trim());

// // trimStart : 앞 쪽 여백만 없애 줌
// str.trimStart();

// // trimEnd : 뒤 쪽 여백
// str.trimEnd();

// ////

// // 대소문자 결합 형태
// let str = "Good Morning.";
// // 대문자로 변경
// console.log(str.toUpperCase());
// // 소문자로 변경
// console.log(str.toLowerCase());

// //// substring() **** : 인자값 2개 (5,여기서부터 추출)
// let str = "Good Morning.";
// console.log(str.substring(5));
// // Good 추출하고 싶음 > (0, 4) : 0번쨰부터 추출, 두번쨰 인자값의 역할 : 본인의 인자값의 바로 앞 의미 - 3번째 까지
// console.log(str.substring(0, 4));

// // slice : substiring과 같은 역할
// console.log(str.slice(5));
// console.log(str.slice(0, 4));

// // ning 가져오고 싶다면(-5에서 시작 ,12-11까지 찾아옴) : ning
// console.log(str.slice(-5, 12));
// // substirin :Good Morning (0으로 받아옴, 12번쨰 앞인 G까지)
// console.log(str.substring(-5, 12));
