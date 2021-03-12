var x = 1;
var y = 1;

// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var x = 100;
//초기화문이 없는 변수 선언문은 무시된다.
var y;

console.log(x); // 100
console.log(y); // 1

var x = 1;
if (true) {
  var x = 10;
}
console.log(x); // 10

var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // 5

// let 키워드
let barLet = 5;
// let이나 const 키워드로 선언한 변수는
// 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// let barLet = 10; // SyntaxError: Identifier 'barLet' has already been declared

let foo = 1; // 전역 변수
{
  let foo = 2; // 지역 변수
  let bar = 3; // 지역 변수
}
console.log(foo); // 1
// console.log(bar); // ReferenceError: bar is not defined

// console.log(fooTwo); // // ReferenceError: Cannot access 'fooTwo' before initialization
let fooTwo; // 변수 선언문에서 초기화 돤계가 실행된다.
console.log(fooTwo); // undefined
fooTwo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(fooTwo);

let fooThree = 1; // 전역 변수
// {
//   console.log(fooThree); // ReferenceError: Cannot access 'fooThree' before initialization
//   let fooThree = 2;
// }
// -----
// let fooThree = 1; // 전역 변수
// {
//   console.log(fooThree); // 선언 단계를 거치지 않아 초기화도 필요없으므로 전역 변수를 참조한다. (scope chain)
// }

// const 키워드
// const fooConst; // SyntaxError: Missing initializer in const declaration

{
  const fooConst = 1;
  // fooConst = 2; // TypeError: Assignment to constant variable.
}

{
  // 세전가격
  let preTaxPrice = 100;

  // 세후 가격
  // 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
  let afterTaxPrice = preTaxPrice + preTaxPrice * 0.1;
  console.log(afterTaxPrice);
}

{
  // 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
  // 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
  const TAX_RATE = 0.1;

  // 세전 가격
  let preTaxPrice = 100;

  // 세후 가격
  let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;

  console.log(afterTaxPrice);
}

{
  const person = {
    name: "Lee",
  };

  person.name = "Kim";
  console.log(person.name);
}
