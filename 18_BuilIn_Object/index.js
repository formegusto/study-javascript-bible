{
  const strObj = new String("Lee");
  console.log(Object.getPrototypeOf(strObj) === String.prototype); // true
}

{
  const numObj = new Number(1.5);
  console.log(numObj.toFixed()); // 2
  console.log(Number.isInteger(0.5)); // false
}

{
  const str = "hi";

  // 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환된다.
  // 인스턴스 생성 후, 문자열은 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다.
  // 그리고 String.prototype의 메서드를 상속받아 사용할 수 있다.
  console.log(str.length); // 2
  console.log(str.toUpperCase()); // HI

  // 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌린다.
  console.log(typeof new String("hi")); // object
  console.log(typeof str); // string
}

{
  const str = "hello";

  // 래퍼 객체 생성
  str.name = "Lee";
  // 할당 제거

  console.log(str.name); // undefined

  // 위에서 생성된 래퍼 객체는 가비지 컬렉션의 대상이 된다.
}

console.log(globalThis === global); // true
console.log(Object.getPrototypeOf(globalThis)); // {}

console.log(global.parseInt("F", 16)); // 15
console.log(parseInt("F", 16)); // 15
console.log(global.parseInt === parseInt); // true

console.log(global.Infinity === Infinity); // true
console.log(typeof Infinity); // number

console.log(global.NaN); // NaN
console.log(Number.NaN); // NaN
console.log(typeof NaN); // number

console.log(global.isNaN(global.NaN)); // true

console.log(global.undefined); // undefined
console.log(typeof global.undefined); // undefined

// 표현식
console.log(eval("1 + 2")); // 3

// 문
console.log(eval("var x = 5;")); // undefined
console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval("({a:1})");
console.log(o);

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval("(function() { return 1; })");
console.log(f()); // 1

console.log(isFinite(0)); // true
console.log(isFinite(2e64)); // true
console.log(isFinite("10")); // true

console.log(isFinite(null)); // null -> 0 true

console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false

console.log(isFinite(NaN)); // false
console.log(isFinite("Hello")); // false
console.log(isFinite("2005/12/12")); // false

// 내가 헷갈릴 만한 것들만 정리
console.log(isNaN("")); // false: '' => 0
console.log(isNaN(" ")); // false: ' ' => 0

console.log(isNaN(true)); // false: true => 1
console.log(isNaN(null)); // false: null => 0

console.log(isNaN(undefined)); // true: undefine => NaN
console.log(isNaN({})); // true: {} => NaN

console.log(isNaN(new Date())); // false: new Data() => Number
console.log(isNaN(new Date().toString())); // true: String => NaN

// parseInt
console.log(parseInt("10")); // => 10
console.log(parseInt("10", 2)); // => 2
console.log(parseInt("10", 8)); // => 8
console.log(parseInt("10", 16)); // => 16

{
  // Tip
  const x = 15;
  console.log(x.toString(2)); // => 1111
  console.log(x.toString()); // => 15
  console.log(x.toString(8)); // => 17
  console.log(x.toString(16)); // => f
}

{
  console.log(parseInt("0xF")); // 15
  console.log(parseInt("0xF", 16)); // 15
}

{
  // 완전한 uri
  const uri = "http://example.com?name=노태헌&job=frontenddev&teacher";
  const enc = encodeURI(uri);
  console.log(enc);
  // http://example.com?name=%EB%85%B8%ED%83%9C%ED%97%8C&job=frontenddev&teacher

  const dec = decodeURI(enc);
  console.log(dec);
  // http://example.com?name=노태헌&job=frontenddev&teacher
}

{
  // URI의 쿼리 스트링
  const uri = "name=노태헌&job=frontenddev&teacher";

  let enc = encodeURIComponent(uri);
  console.log(enc);
  // name%3D%EB%85%B8%ED%83%9C%ED%97%8C%26job%3Dfrontenddev%26teacher

  let dec = decodeURIComponent(enc);
  console.log(dec);
  // name=노태헌&job=frontenddev&teacher
}

console.log(x); // undefined
console.log(y); // ReferenceError: y is not defined

var x = 10;
function foo() {
  y = 20;
}
foo();

console.log(x + y); // 30
console.log(y); // 20
console.log(global.y); // 20
