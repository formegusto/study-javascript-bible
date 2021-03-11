// f(x, y) = x + y
function add(x, y) {
  return x + y;
}

// f(2, 5) = 7
console.log(add(2, 5)); // 7

// 함수 리터럴
var f = function add(x, y) {
  return x + y;
};
console.log(f(5, 10)); // 15

// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() {
  console.log("foo");
}
foo(); // foo

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
// (function bar() {
//   console.log("bar");
// });
// bar(); // Reference Error: bar is not defined

var add = function add(x, y) {
  return x + y;
};
console.log(add(5, 7)); // 12

// 함수 표현식
// 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.
// 익명함수
var add = function (x, y) {
  return x + y;
};
console.log(add(5, 20)); // 25

// 기명함수
var add = function foo(x, y) {
  return x + y;
};
console.log(add(10, 15)); // 25

// 함수 호이스팅과 변수 호이스팅
// 함수 참조
console.dir(mul); // [Function: mul]
console.dir(sub); // undefined

// 함수 호출
console.log(mul(2, 5)); // 10
// console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function mul(x, y) {
  return x * y;
}

// 함수 표현식
var sub = function (X, y) {
  return x - y;
};

var addConstructor = new Function("x", "y", "return x + y");
console.log(addConstructor(3, 2)); // 5

var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();
console.log(add1(1, 2)); // 13

// var add2 = (function () {
//   var a = 10;
//   return new Function("x", "y", "return x + y + a;");
// })();
// console.log(add2(1, 2)); // ReferenceError: a is not defined

// 화살표 함수
var add = (x, y) => x + y;
console.log(add(2, 5)); // 7

function div(x, y) {
  console.log(arguments); // [Arguments] { '0': 2, '1': 5, '2': 10 }

  return x / y;
}
console.log(div(2, 5, 10)); // 0.4

// 1.typeof연산자를 활용한 타입체크
function addConfirmOne(x, y) {
  if (typeof x !== "number" || typeof y !== "number")
    return new TypeError("인수는 모두 숫자 타입이어야 합니다.");
  return x + y;
}
console.log(addConfirmOne(2)); // TypeError: 인수는 모두 숫자 타입이어야 합니다.

// 2. ES5 단축평가를 이용한 기봅값 할당
function addConfirmTwo(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}
console.log(addConfirmTwo(1, 2, 3)); // 6
console.log(addConfirmTwo(1, 2)); // 3
console.log(addConfirmTwo(1)); // 1
console.log(addConfirmTwo()); // 0

// 3. ES6 기본값 설정
function addConfirmThree(a = 0, b = 0, c = 0) {
  return a + b + c;
}
console.log(addConfirmThree(1, 2, 3)); // 6
console.log(addConfirmThree(1, 2)); // 3
console.log(addConfirmThree(1)); // 1
console.log(addConfirmThree()); // 0

function multiply(x, y) {
  return;
  x * y;
}
console.log(multiply(3, 5)); //undefined

function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}

var num = 100;
var person = { name: "Lee" };

console.log(num); // 100
console.log(person); // {name:'Lee'}

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // { name: 'Kim' }

console.log(
  (function () {
    var a = 3;
    var b = 5;
    return a * b;
  })()
); // 15

var res = (function () {
  var a = 3;
  var b = 5;
  return a * b;
})();
console.log(res); // 15

// 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
res = (function (a, b) {
  return a * b;
})(3, 5);
console.log(res); // 15

function countDown(n) {
  for (var i = n; i > 0; i--) console.log(i);
}
countDown(10);

function countDownRecursive(n) {
  if (n > 0) return;
  console.log(n);
  countDownRecursive(--n);
}
countDown(10);

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(--n);
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

function outer() {
  var x = 1;

  // 중첩 함수
  function inner() {
    var y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y);
  }

  inner();
}
outer();
