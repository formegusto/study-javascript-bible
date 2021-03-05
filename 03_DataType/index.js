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

var template_1 = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template_1);

var template_2 = `<ul>
    <li><a href="#">Home</a><li>
</ul>
`;
console.log(template_2);

var first = "Ung-mo";
var last = "Lee";
// ES5 문자열 연결
console.log("My name is " + first + " " + last + ".");

// ES6 표현식 삽입
console.log(`My name is ${first} ${last}.`);

var foo;
console.log(foo); // undefined

var Key = Symbol("key");
console.log(typeof Key);

var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[Key] = "value";
console.log(obj[Key]);

var score = 100;
// 자바스크립트 엔진은 리터럴 100을 숫자 타입의 값으로 해석하고,
// 숫자 타입의 값 100을 저장하기 위해 8바이트의 메모리 공간을 확보한다.
// 그리고 100을 2진수로 저장한다.
