// All Variables is number type
var interger = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

console.log(typeof interger); // number
console.log(typeof double); // number
console.log(typeof negative); // number

// Binary, Octal, Hex is Decimal
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65

// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * "String"); // NaN

// 문자열 타입
var string;
string = "문자열"; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱(ES6)

string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
console.log(string);
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";
console.log(string);

var template = `Template literal`;
console.log(template);
