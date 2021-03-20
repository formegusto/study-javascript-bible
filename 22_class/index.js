// {
//   // 클래스 선언문
//   class Person {}

//   // 함수 표현식으로도 사용 가능하다 (일반적이지는 않다.)
//   const Person = class {};
//   const Person = class MyClass {};
// }

// // 클래스 선언문
// class Person {
//   // 생성자
//   constructor(name) {
//     // 인스턴스 생성 및 초기화
//     this.name = name; // name 프로퍼티는 public 하다.
//   }

//   // 프로토타입 메서드
//   sayHi() {
//     console.log(`Hi My name is ${this.name}`);
//   }

//   // 정적 메서드
//   static sayHello() {
//     console.log("Hello!");
//   }
// }

// const me = new Person("noth");
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

// var Person_2 = (function () {
//     // 생성자 함수
//   function Person(name) {
//     this.name = name;
//   }

//   // 프로토타입 메서드
//   Person.prototype.sayHi = function () {
//     console.log(`Hi My name is ${this.name}`);
//   };

//   // 정적 메서드
//   Person.sayHello = function () {
//     console.log("Hello!");
//   };

//   return Person;
// })();
// const me = new Person_2("noth");
// console.log(me.name);
// me.sayHi();
// Person_2.sayHello();

// 클래스 선언문
// console.log(Person); // ReferenceError: Cannot access 'Person' before initialization

// class Person {}
// console.log(typeof Person); // function
// const Person = "";
// {
//   // 호이스팅이 발생하지 않았다면 ''이 출력되어야 한다.
//   console.log(Person);
//   // ReferenceError: Cannot access 'Person' before initialization

//   class Person {}
// }

// {
//   const Person = class MyClass {};

//   const me = new Person();
//   //   console.log(MyClass); // ReferenceError: MyClass is not defined
//   const you = new MyClass(); // ReferenceError: MyClass is not defined
// }

// class Perosn {
//   constructor() {}
//   constructor() {} // SyntaxError: A class may only have one constructor
// }

// class Person {}

// class Person {
//   constructor(name) {
//     this.name = name;

//     return {};
//   }
// }
// const me = new Person("No");
// console.dir(me); // {}

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi! iam${this.name}`);
  }
}
const me = new Person("me");
me.sayHi();
console.log(Object.getPrototypeOf(me) === Person.prototype); // true
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true
console.log(me instanceof Person); // true
console.log(me instanceof Object); // true
console.log(me.constructor === Person); // true

var x = 1;

Person.sayHello = function () {
  console.log(x);
};

console.log(Person.sayHello());

// 표준 빌트인 객체의 정적 메서드
console.log(Math.max(1, 2, 3)); // 3;
console.log(Number.isNaN(NaN)); // true;
console.log(JSON.stringify({ a: 1 })); // {"a":1};
console.log(Object.is({}, {})); // false
console.log(Reflect.has({ a: 1 }, "a")); // true;
