// 자바스크립트 코드가 작성 혹은 생성되는 순간 -> 컴퓨터 메모리 공간에 객체 생성 > 실행 컨텍스트 = execution context

// execution context : 개발자가 현재 작성 혹은 생성한 변수(식별자)가 어떤 것이 있는지, 실행시켜야 하는 함수는 무엇인지 등등의 정보를 저장해놓고 있음

// execution context => 어떤 코드를 먼저 실행해야 하는가에 대한 우선순위를 결정하기 위한 목적

// 컴퓨터 > 자바스크립트 어떤 곳에서 어떤 방식으로 실행되는지 이해

// 컴퓨터 공간 > stack = 쌓다 // Queue => 대기열
// 엘리베이트, 설겆이 = 스택구조 <-> 큐(Queue) = 놀이동산(범퍼카-먼저 기다린사람 타고, )
// 10층 - 먼저 기다리고 있던 사람이 탑승
// 엘리베이트 뒤쪽 > 가장 나중에 탑송한 사람이 먼저 내림(입출구 하나)

// Call Stack : 자바스크립트 명령문을 처리하는 공간

// VariableEnvironment(*환경변수) : 현재 실행 컨텍스트 내 변수명, 함수 정보, 실행컨텍스트 내 특정함수가 호출 혹은 실행되는 순간, 해당 함수를 스냅샷의 형태로 저장

// Snapshot : 일시정지 사진 -> 함수가 실제로 선언만 된 상태-호출, 실행 x -> 스냄샷 형태로 사진 찍어서 대기 -> LexicalEnvironment

//

// Lexical : 사전적인 = "사전"답사

// LexicalEnvironment : 초기에는 variablenvironment와 동일한 값으로 시작하지만, 특정 함수를 호출하면 해당 함수가 실시간 처리를 하고 있는 상태를 바로 반영해 줌

// environmentRecord : 현재 실행하고자 하는 코드들 내부에 저장되어 있는 정보값을 가지고 있음

// Outer-EnvironmentReference : 현재 실행하고자 하는 코드들이 외부에 영향을 받고 있는지, 받고 있다면 누구의 영향을 받는지를 확인할 수 있는 정보값을 가지고 있음

//

// ThisBinding : 현재 변수 || 식별자가 가리켜야 하는 대상 객체가 누구인지에 대한 정보값을 가지고 있음

// let a = 1;
// function outer() {
//   function inner() {
//     console.log(a);
//     a = 3;
//   }
//   inner();
//   console.log(a);
// }

// outer();
// console.log(a);

// 위의 값(1,3,3) 설명
// CallStack구조로 실행 contxt 안 a=1
// 실행 context= 가장 마지막 outer 호출 >
// inner(2번쨰) > 해결하기 위해 처음 inner로
// > a 1 > 3 재할당 > outer 3(위에서 3으로 변경되었으니)

// function a() {
//   let x = 1;
//   console.log(x);
//   x;
//   console.log(x);
//   x = 2;
//   console.log(2);
// }

// a();

// // 위의 값(1,3,2) 설명
// // 호이스팅 = 우물 = 무언가를 끌어올리다

// function a() {
//   let x;
//   let x;
//   x;

//   x = 1;
//   console.log(x);
//   console.log(x);
//   x = 2;
//   console.log(2);
// }

// a();

// function a() {
//   console.log(b);
//   b = "bbb";

//   console.log(b);
//   function b() {}

//   console.log(b);
// }

// a();

// 변수 선언시 let / var/ const > 부득이한 케이스에 앞 3개 없이도 변수 선언 가능은 함! (ex. b =bbb )
// 호이스팅 : 식별자 위로 땡기고 /
// b 변수 선언 > 함수 들어가니까
// 첫번쨰 콘솔 : 함수 b >
// 재할당 : bbb >
// bbb

// function a() {
//   let b;
//   b = function b() {};

//   console.log(b);
//   b = "bbb";

//   console.log(b);
//   console.log(b);
// }

// a();
