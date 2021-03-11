function add(x, y) {
  console.log(x, y);
  return x + y;
}

add(2, 5);

// console.log(x, y); // ReferenceError: x is not defined

var var1 = 1;

if (true) {
  var var2 = 2;
  if (true) var var3 = 3;
}

function foo() {
  var var4 = 4;

  function bar() {
    var var5 = 5;
  }
}

console.log(var1); // 1 : 코드의 가장 바깥 영역에서 선언한 변수
console.log(var2); // 2 : 코드 블록 내에서 선언한 변수
console.log(var3); // 3 : 중첩된 코드 블록 내에서 선언한 변수
// console.log(var4); // ReferenceError: var4 is not defined : 함수 내에서 선언한 변수
// console.log(var5); // ReferenceError: var5 is not defined : 중첩된 함수 내에서 선언한 변수

var x = "global";

function foo() {
  var x = "local";
  console.log(x); // local
}

foo();
console.log(x); // global

function foo() {
  var x = 1;
  // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
  // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
  var x = 2;
  console.log(x); // 2
}
foo();

// function bar() {
//   let x = 1;
//   // let 이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
//   let x = 2; // SyntaxError: Identifier 'x' has already been declared
// }
// bar();

// 전역 스코프 start
var x = "global x";
var y = "global y";

// 지역 스코프 1 start
function outer() {
  var z = "outer's local z";

  console.log(x); // global x
  console.log(y); // global y
  console.log(z); // outer's local z

  // 지역 스코프 2 start
  function inner() {
    var x = "inner's local x";

    console.log(x); // inner's local x
    console.log(y); // global y
    console.log(z); // outer's local z
  }
  // 지역 스코프 2 end

  inner();
}
// 지역 스코프 1 end
outer();

console.log(x); // global x
// console.log(z); // ReferenceError: z is not defined
// 전역 스코프 end

// 전역 함수
function fooTest() {
  console.log("global function foo");
}

function bar() {
  // 중첩 함수
  function fooTest() {
    console.log("local function foo");
  }

  fooTest(); // local function foo
}
bar();

var x = 1;
if (true) {
  // var 키워드로 선언된 변수는 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
  // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
  // 따라서 x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
  // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
  var x = 10;
}
console.log(x); // 10

var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
console.log(i); // 5

var x = 1;
function fooLexical() {
  var x = 10;
  barLexical();
}

function barLexical() {
  console.log(x);
}

fooLexical(); // 1
barLexical(); // 1
