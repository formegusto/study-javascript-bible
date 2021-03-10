var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`);
  },
};

console.log(typeof person); // object
console.log(person); // { name: 'Lee', sayHello: [Function: sayHello] }

var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: "Lee",
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20,
};

var person = {
  firstName: "Ung-mo", // 식별자 네이밍 규칙을 준수 O
  "last-name": "Lee", // 식별자 네이밍 규칙을 준수 X
};

// var person = {
//     firstName: 'Ung-mo',
//     last-name: 'Lee', // SyntaxError
// }

console.log(person);

var obj = {};
var es5Key = "hello";
var es6Key = "bye";

// ES5: 프로퍼티 키 동적 생성
obj[es5Key] = "world";
// ES6: 계산된 프로퍼티 이름
obj = {
  ...obj,
  [es6Key]: "Earth",
};
console.log(obj); // { hello: 'world', bye: 'Earth' }

var foo = {
  "": "",
};
console.log(foo); // { '': '' }

var foo = {
  0: 1,
  1: 2,
  2: 3,
};
console.log(foo); // { '0': 1, '1': 2, '2': 3 }

var foo = {
  name: "Lee",
  name: "Kim",
};

console.log(foo); // { name: 'Kim' }

var circle = {
  radius: 5, // <- 프로퍼티

  // 원의 지름
  getDiameter: function () {
    // <- 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  },
};
console.log(circle.getDiameter()); // 10

var person = {
  name: "Lee",
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name);

// 대괄호 표기법에 의한 프로퍼티 접근
// 대괄호 표기법을 사용하는 경우
// 대괄호 프로퍼티 접근 연산자 내부에 지정하는
// 프로퍼티 키는 반드시 따옴표로 감싼 문자열!
// 감싸지 않으면 자바스크립트 엔진은 식별자로 해석한다.
// ReferenceError : 대괄호 연산자 내의 따옴표로 감싸지 않은 이름,
// 즉 식별자 name을 평가하기 위해 선언된 name을 찾았지만 찾지 못했기 때문
// 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다. 이 때는 에러도 안나기 때문에
// 주의하자.
console.log(person["name"]);

var person = {
  "last-name": "Lee",
  1: 10,
};

console.log(person["last-name"]);
console.log(person[1]); // 암묵적 타입 변환이 일어난다. 1 -> '1'
console.log(person["1"]);
// console.log(person.last - name);

var person = {
  name: "Lee",
};

person.name = "Kim";
console.log(person); // { name : "Kim" }

person.age = 20;
console.log(person); // { name: 'Kim', age: 20 }

delete person.age;
delete person.address;

console.log(person); // { name : "Kim" }

var x = 1,
  y = 2;
// ES5
var objES5 = {
  x: x,
  y: y,
};
console.log(objES5);
// ES6
var objES6 = {
  x,
  y,
};
console.log(objES6);

var prefix = "prop";
var i = 0;

// ES5
var objES5 = {};
objES5[`${prefix}-${++i}`] = i;
objES5[`${prefix}-${++i}`] = i;
objES5[`${prefix}-${++i}`] = i;
console.log(objES5);

// ES6
var objES6 = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};
console.log(objES6);

// ES5
var objES5 = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi! " + this.name);
  },
};
objES5.sayHi();

// ES6
var objES6 = {
  name: "Lee",
  sayHi() {
    console.log("Hi! " + this.name);
  },
};
objES6.sayHi();
