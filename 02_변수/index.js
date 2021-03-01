// 4.4 변수 선언의 실행 시점과 변수 호이스팅
console.log(score);

score = 80;
var score;

console.log(score);

var num = 80; // 변수 선언과 값의 할당
num = 90; // 값의 재할당


// 여러 형태의 변수 선언.
// 1. 여러개 동시 선언 가능, 하지만 가독성이 나빠진다.
var person, $elem, _name, first_name, vali;

// 2. 유니코드 문자 허용, 하지만 권장하지 않는다.
var 이름, 중국어;

// 3. 명명 규칙 위배
var first-name; // Unexpected token -
var 1st; // Invalid or unexpected token
var this; // Unexpected token this

// 4. 대소문자를 구별하는 자바스크립트
var firstname;
var firstName;
var FIRSTNAME;

// 5. 변수는 존재 목적을 쉽게 이해할 수 있도록 작성하는 것이 좋다.
var x = 3; // NG. x 변수가 의미하는 바를 알 수 없다.
var score = 100; // OK. score 변수는 점수를 의미한다.