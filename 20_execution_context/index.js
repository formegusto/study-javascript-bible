// 1. 소스코드의 평가
// 변수 선언문 var x 를 실행한다.
// 식별자 x는 실행 컨텍스트가 관리하는 스코프에 등록되고 undefined로 초기화된다.
// var x;

// 2. 소스코드의 실행
// x 변수에 값을 할당하기 위해 x 변수가 선언된 변수인지 확인해본다.
// 이를 위해 실행 컨텍스트가 관리하는 스코프에 x 변수가 등록되어 있는지 확인한다.
// 만약 x 변수가 실행 컨텍스트가 관리하는 스코프에 등록되어 있다면 x 변수는 선언된 변수,
// 즉 소스코드 평가 과정에서 선언문이 실행되어 등록된 변수다.
// 값을 할당하고 할당 결과를 실행 컨텍스트에 등록하여 관리한다.
// x = 1;

// // 전역 변수 선언
// const x = 1;
// const y = 2;

// // 함수 정의
// function foo(a) {
//   // 지역 변수 선언
//   const x = 10;
//   const y = 20;

//   // 메서드 호출
//   console.log(a + x + y); // 130
// }

// // 함수 호출
// foo(100);

// // 메서드 호출
// console.log(x + y); // 3

// const x = 1;

// function foo() {
//   const y = 2;

//   function bar() {
//     const z = 3;
//     console.log(x + y + z);
//   }
//   bar();
// }

// foo();

var x = 1;
const y = 2;

function foo(a) {
  var x = 3;
  const y = 4;

  function bar(b) {
    const z = 5;
    console.log(a + b + x + y + z); // 42
  }
  bar(10);
}
foo(20);

console.log(global.toString()); // [object global]

{
  let x = 1;
  if (true) {
    let x = 10;
    console.log(x); // 10
  }
  console.log(x); // 1
}
