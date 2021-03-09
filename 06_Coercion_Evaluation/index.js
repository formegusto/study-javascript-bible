var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10

var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + " ";
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10

// 피연산자가 모두 문자열 타입이어야 하는 문맥
console.log(typeof ("10" + 2), "10" + 2); // -> string 102

// 피연산자가 모두 숫자 타입이어야 하는 문맥
console.log(typeof (5 * "10"), 5 * "10"); // -> number 50

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
console.log(typeof !0, !0); // -> boolean true
if (1) {
  console.log(true);
}

// 1. 문자열 타입으로 변환
console.log(typeof (1 + "2"), 1 + "2"); // -> string 12

console.log(typeof `1 + 1 = ${1 + 1}`, `1 + 1 = ${1 + 1}`); // string -> 1 + 1 = 2

// 숫자 타입
console.log(0 + ""); // -> "0"
console.log(-0 + ""); // -> "-0"
console.log(1 + ""); // -> "1"
console.log(-1 + ""); // -> "-1"
console.log(NaN + ""); // "NaN"
console.log(Infinity + ""); // "Infinity"
console.log(-Infinity + ""); // "-Infinity"

// 불리언 타입
console.log(true + ""); // "true"
console.log(false + ""); // "false"

// null 타입
console.log(null + ""); // "null"

// undefined 타입
console.log(undefined + ""); // "undefined"

// 심벌 타입
// 심벌 타입은 문자열로 변환할 수 없다.

// 객체 타입
console.log({} + ""); // "[object Object]"
console.log(Math + ""); // "[object Math]"
console.log([] + ""); // ""
console.log([10, 20] + ""); // "10, 20"
console.log(function () {} + ""); // "function () {}"
console.log(Array + ""); // "function Array() { [native code] }"

// 2. 숫자 타입으로 변환
console.log(1 - "1"); // -> 0
console.log(1 * "10"); // -> 10
console.log(1 / "one"); // -> NaN

// 의외의 숫자 타입 변환
console.log("1" > 0); // true

// 자바스크립트 엔진의 숫자 타입으로의 암묵적 변환 방식.
console.log(+""); // 0
console.log(+"0"); // 0
console.log(+"1"); // 1
console.log(+"string"); // NaN

// 불리언 타입
console.log(+true); // 1
console.log(+false); // 0

// null 타입
console.log(+null); // 0

// undefined 타입
console.log(+undefined); // NaN

// 심벌 타입
// console.log(+Symbol()); Error!

// 객체 타입
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+[10, 20]); // NaN
console.log(+function () {}); // NaN

// 3. 불리언 타입으로 변환
function isFalsy(v) {
  return !v;
}

function isTruthy(v) {
  return !!v;
}

console.log(isFalsy(false));
console.log(isTruthy(1));

console.log(String(1));
console.log(String(NaN));
console.log(String(Infinity));

console.log(String(true));
console.log(String(false));

console.log((1).toString());
console.log(NaN.toString());
console.log(Infinity.toString());

console.log(true.toString());
console.log(false.toString());

console.log(Number("0"));
console.log(Number("-1"));
console.log(Number("10.53"));

console.log(Number(true));
console.log(Number(false));

console.log(parseInt("0"));
console.log(parseInt("-1"));
console.log(parseInt("10.53"));

console.log(+"0");
console.log(+"-1");
console.log(+"10.53");
console.log(+true);
console.log(+false);

console.log("0" * 1);
console.log("-1" * 1);
console.log("10.53" * 1);
console.log(true * 1);
console.log(false * 0);

console.log(Boolean("x"));
console.log(Boolean(""));
console.log(Boolean("false"));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(NaN));
console.log(Boolean(Infinity));

console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(Boolean({}));
console.log(Boolean([]));

console.log(!!"x");
console.log(!!""); // false
console.log(!!"false"); // true

console.log(!!0);
console.log(!!1);
console.log(!!NaN);
console.log(!!Infinity);

console.log(!!null);

console.log(!!undefined);

console.log(!!{});
console.log(!![]);

var elem = null;
var value = elem && elem.value;

console.log(value); // null

function getStringLength(str) {
  str = str || "";
  return str.length;
}

function getStringLengthES6(str = "") {
  return str.length;
}

console.log(getStringLength());
console.log(getStringLengthES6());
