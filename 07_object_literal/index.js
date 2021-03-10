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
