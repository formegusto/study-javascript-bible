// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시 값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o); // { a: 1 }

// 문자열은 0개 이상의 문자로 이뤄진 집합이다.
var str1 = ""; // 0개의 문자로 이뤄진 문자열
var str2 = "Hello"; // 5개의 문자로 이뤄진 문자열

var str = "Hello";
// 'Hello'와 'World'는 모두 메모리에 존재한다.
// 다만, 식별자 str은 문자열 'Hello'를 가리키고 있다가 'world'를
// 가리키도록 변경되었을 뿐 이다.
str = "world";

var str = "string";

// 문자열은 유사 배열이므로 배열과 유사하게
// 인덱스를 사용해 각 문자에 접근할 수 있다.
console.log(str[0]); // s

// 원시 값인 문자열이 객체처럼 동작한다.
console.log(str.length); // 6
console.log(str.toUpperCase()); // STRING

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
// 하지만 문자열은 원시 값이므로 변경할 수 없다. 이때, 에러가 발생하지 않는다.
str[0] = "S";
console.log(str); // string

// 값에 의한 전달
var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy); // 80

score = 100;

console.log(score); // 100
console.log(copy); // 80

// 할당이 이뤄지는 시점에 객체 리터럴리 해석되고, 그 결과 객체가 생성된다.
var person = {
  name: "Lee",
};

// person 변수에 저장되어 있는 참조 값으로 실제 객체에 접근한다.
// person -> 0x00001332 -> { name: 'Lee' }
console.log(person); // { name: 'Lee' }

// 프로퍼티 값 갱신
person.name = "Kim";

// 프로퍼티 동적 생성
person.address = "Seoul";

console.log(person);

const o2 = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o };
console.log(c1 === o); // false
console.log(c1.x === o.x); // true

const _ = require("lodash");
// 깊은 복사
const c2 = _.cloneDeep(o2);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false

var person = {
  name: "Lee",
};

// 참조 값을 복사 (얕은 복사)
// 두 개의 식별자가 하나의 객체를 공유하게 된다.
var copy = person;

copy.name = "Kim";
person.address = "Seoul";

// copy와 person은 동일한 객체를 가리킨다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 받는다.
console.log(person); // { name: 'Kim', address: 'Seoul' }
console.log(copy); // { name: 'Kim', address: 'Seoul' }
