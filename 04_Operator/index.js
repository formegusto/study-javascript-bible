// 산술 연산자
5 * 4; // -> 20

// 문자열 연결 연산자
"My name is " + "Lee"; // -> My name is Lee

// 할당 연산자
color = "red"; // -> 'red'

// 비교 연산자
3 > 5; // false

// 논리 연산자
true && false; // -> false

// 타입 연산자
typeof "Hi"; // -> string

5 + 2; // -> 7
5 - 2; // -> 3
5 * 2; // -> 10
5 / 2; // -> 2.5
5 % 2; // -> 1

+10; // -> 10
+-10; // -> -10

var x = "1";

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1
console.log(x); // 부수 효과는 없다.

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x); // 1
console.log(x);

x = false;
console.log(+x); // 0
console.log(x);

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = "Hello";
console.log(+x); // NaN
console.log(x); // Hello

console.log(-(-10)); // 10
console.log(-"10"); // -10
console.log(-true); // -1
console.log(-"Hello"); // NaN

// 문자열 연결 연산자
console.log("1" + 2); // 12

// 산술 연산자
console.log(1 + 2); // 3
console.log(1 + true); // 2
console.log(1 + false); // 1
console.log(1 + null); // 1 * null은 0으로 타입 변환된다.
console.log(+undefined); // NaN
console.log(1 + undefined); // NaN

var x;

x = 10;
console.log(x); // 10

x += 5;
console.log(x); // 15

x -= 5;
console.log(x); // 10

x *= 5;
console.log(x); // 50

x /= 5;
console.log(x); // 10

x %= 5;
console.log(x); // 0

var str = "My name is ";
str += "Lee";
console.log(str); // 'My name is Lee'

var x;
// 할당문은 표현식이다.
console.log((x = 10)); // 10;

// 연쇄 할당: 오른쪽에서 왼쪽으로 진행
// 1. c = 0
// 2. b = 0
// 3. a = 0
a = b = c = 0;
console.log(a, b, c); // 0 0 0

console.log("0" == ""); // false
console.log("" == 0); // true
console.log("0" == 0); // true
console.log(false == "false"); // false
console.log(false == "0"); // true
console.log(false == null); // false
console.log(false == undefined); // false

console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(NaN === NaN); // false

console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN(1 + undefined)); // true

console.log(0 === -0); // true
console.log(0 == -0); // true

console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

// 삼항 조건 연산자
var x = 2;

// 2 % 2 는 0이고 0은 false로 암묵적으로 타입 변환된다.
var result = x % 2 ? "홀수" : "짝수";
console.log(result);

if (x % 2) result = "홀수";
else result = "짝수";
console.log(result);

// if ...else 문은 표현식이 아니고 문이므로, 따라서 값처럼 사용할 수 없다.
// var result = if (x % 2) { result = "홀수" }
// else { result = "짝수" };

console.log(!0); // -> true
console.log(!"Hello"); // -> false

// 단축 평가
console.log("Cat" && "Dog"); // -> Dog

var x, y, z;
(x = 1), (y = 2), (z = 3); // -> 3

// typeof 연산자
console.log(typeof ""); // string
console.log(typeof 1); // number
console.log(typeof NaN); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof new Date()); // object
console.log(typeof /test/gi); // object
console.log(typeof function () {}); // function

console.log(2 ** 2); // 4
console.log(2 ** 2.5); // 5.65685424949238
console.log(2 ** 0); // 1
console.log(2 ** -2); // 0.25

console.log((-5) ** 2); // 25

// 연산자의 부수효과
var x;

// 할당연산자
x = 1;
console.log(x); // 1

// 증가/감소 연산자
x++;
console.log(x); // 2

// delete 연산자, 객체의 프로퍼티를 삭제하는 부수 효과가 있다.
var o = { a: 1 };
delete o.a;
console.log(o); // {}
