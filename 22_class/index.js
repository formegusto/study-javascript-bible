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

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(`Hi! iam${this.name}`);
//   }
// }
// const me = new Person("me");
// me.sayHi();
// console.log(Object.getPrototypeOf(me) === Person.prototype); // true
// console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true
// console.log(me instanceof Person); // true
// console.log(me instanceof Object); // true
// console.log(me.constructor === Person); // true

// var x = 1;

// Person.sayHello = function () {
//   console.log(x);
// };

// console.log(Person.sayHello());

// 표준 빌트인 객체의 정적 메서드
// console.log(Math.max(1, 2, 3)); // 3;
// console.log(Number.isNaN(NaN)); // true;
// console.log(JSON.stringify({ a: 1 })); // {"a":1};
// console.log(Object.is({}, {})); // false
// console.log(Reflect.has({ a: 1 }, "a")); // true;

// class Person {
//   // 생성자
//   constructor(name) {
//     // 1. 암묵적으로 인스턴스가 생성되고, this에 바인딩된다.
//     console.log(this); // Person {}
//     console.log(Object.getPrototypeOf(this) === Person.prototype); // true

//     // 2. this에 바인딩되어 있는 인스턴스를 초기화 한다.
//     this.name = name;
//     console.log(this); // Person { name: 'me' }

//     // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
//   }
// }

// const me = new Person("me");

const person = {
  // 데이터 프로퍼티
  firstName: "Ungmo",
  lastName: "Lee",

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // setter 함수
  set fullName(name) {
    // 배열 디스트럭처링 할당
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${person.firstName} ${person.lastName}`); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장.
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = "Heegun Lee";
console.log(person); // { firstName: 'Heegun', lastName: 'Lee', fullName: [Getter/Setter] }

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); // Heegun Lee

console.log(Object.getOwnPropertyDescriptor(person, "fullName"));
// {
//   get: [Function: get fullName],
//   set: [Function: set fullName],
//   enumerable: true,
//   configurable: true
// }

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
//   // getter 함수
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   // setter 함수
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   }
// }
// const me = new Person("Ungmo", "Lee");

// // 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
// console.log(`${me.firstName} ${me.lastName}`); // Ungmo Lee

// // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
// console.log(me.fullName); // Ungmo Lee

// // fullName의 접근자 프로퍼티다.
// // 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
// console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName"));
// // {
// //   get: [Function: get fullName],
// //   set: [Function: set fullName],
// //   enumerable: false,
// //   configurable: true
// // }

// console.log(Object.getOwnPropertyDescriptors(me));
// // {
// //   firstName: {
// //     value: 'Ungmo',
// //     writable: true,
// //     enumerable: true,
// //     configurable: true
// //   },
// //   lastName: {
// //     value: 'Lee',
// //     writable: true,
// //     enumerable: true,
// //     configurable: true
// //   }
// // }

// console.log(Object.getOwnPropertyDescriptors(Person.prototype));
// // {
// //   constructor: {
// //     value: [class Person],
// //     writable: true,
// //     enumerable: false,
// //     configurable: true
// //   },
// //   fullName: {
// //     get: [Function: get fullName],
// //     set: [Function: set fullName],
// //     enumerable: false,
// //     configurable: true
// //   }
// // }

// class Person {
//   // 클래스 필드 정의
//   name = "Lee";
// }
// const me = new Person();
// console.log(me); // Person { name: 'Lee' }

// class Person {
//   this.name = ''; // SyntaxError: Unexpected token '.'
// }

// 존재하는 경우 스코프 체인으로 전역 스코프에 접근된다.
// const name = "test";
// class Person {
//   // 클래스 필드
//   name = "Lee";

//   constructor() {
//     console.log(name); // ReferenceError: name is not defined
//   }
// }
// console.log(name);

// class Person {
//   name;
// }
// const me = new Person();
// console.log(me); // Person { name: undefined }

// class Person {
//   name;

//   constructor(name) {
//     this.name = name;
//   }
// }
// const me = new Person("taeheon");
// console.log(me); // Person { name: 'taeheon' }

// class Person {
//   name = "Lee";

//   getName = function () {
//     return this.name;
//   };
// }

// const lee = new Person();
// console.log(lee.getName()); // Lee
// console.log(Object.getOwnPropertyDescriptors(Person.prototype));
// // {
// //   constructor: {
// //     value: [class Person],
// //     writable: true,
// //     enumerable: false,
// //     configurable: true
// //   }
// // }
// console.log(Object.getOwnPropertyDescriptors(lee));
// // {
// //   name: {
// //     value: 'Lee',
// //     writable: true,
// //     enumerable: true,
// //     configurable: true
// //   },
// //   getName: {
// //     value: [Function: getName],
// //     writable: true,
// //     enumerable: true,
// //     configurable: true
// //   }
// // }

// class Person {
//   // private 필드 정의
//   #name = " ";

//   constructor(name) {
//     this.#name = name;
//   }
// }

// const me = new Person("Lee");
// // private 필드 #name은 클래스 외부에서 참조할 수 없다.
// console.log(me.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class

// class Person {
//   // private 필드 정의
//   #name = " ";

//   constructor(name) {
//     this.#name = name;
//   }

//   get name() {
//     // trim은 공백제거
//     return this.#name.trim();
//   }
// }

// const me = new Person(" Lee ");
// console.log(me.name); // Lee

// class Person {
//   constructor(name) {
//     this.#name = name;
//     // SyntaxError: Private field '#name' must be declared in an enclosing class
//   }

//   get name() {
//     // trim은 공백제거
//     return this.#name.trim();
//   }
// }

class MyMath {
  // static public 필드 정의
  static PI = 22 / 7;

  // static private 필드 정의
  static #num = 10;

  // static 메서드
  static increment() {
    return ++MyMath.#num;
  }
}

console.log(MyMath.PI); // 3.142857142857143
console.log(MyMath.increment()); // 1

// class Animal {
//   constructor(age, weight) {
//     this.age = age;
//     this.weight = weight;
//   }

//   eat() {
//     return "eat";
//   }

//   move() {
//     return "move";
//   }
// }

// class Bird extends Animal {
//   fly() {
//     return "fly";
//   }
// }

// class Lion extends Animal {
//   attack() {
//     return "attack";
//   }
// }

// const bird = new Bird(1, 5);
// console.log(bird); // Bird { age: 1, weight: 5 }
// console.log(bird instanceof Bird); // true
// console.log(bird instanceof Animal); // true
// console.log(bird instanceof Lion); // true

// console.log(bird.eat()); // eat
// console.log(bird.move()); // move
// console.log(bird.fly()); // fly

var Animal = (function () {
  function Animal(age, weight) {
    this.age = age;
    this.weight = weight;
  }
  Animal.prototype.eat = function () {
    return "eat";
  };
  Animal.prototype.move = function () {
    return "move";
  };

  return Animal;
})();

var Bird = (function () {
  function Bird() {
    // 여기서 this가 호출되니까 자동으로 객체가 반환되는 느낌인가보다.
    // 그래서 this를 바인딩
    Animal.apply(this, arguments);
    this.test = "1";
  }

  // 프로토타입 연결
  Bird.prototype = Object.create(Animal.prototype);

  // 받아온거에는 Animal 로 만드는 것만 있으니까,
  // constructor를 Bird로 교체
  Bird.prototype.constructor = Bird;

  Bird.prototype.fly = function () {
    return "fly";
  };

  return Bird;
})();

var Lion = (function () {
  function Lion() {
    Animal.apply(this, arguments);
  }
  Lion.prototype = Object.create(Animal.prototype);
  Lion.prototype.constructor = Lion;
  Lion.prototype.attack = function () {
    return "attack";
  };

  return Lion;
})();

const bird = new Bird(1, 5);
console.log(bird); // Bird { age: 1, weight: 5, test: '1' }
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true
console.log(bird instanceof Lion); // true

console.log(bird.eat()); // eat
console.log(bird.move()); // move
console.log(bird.fly()); // fly

console.log(Object.getOwnPropertyDescriptors(bird.__proto__));
console.log(Object.getOwnPropertyDescriptors(new Lion(2, 3).__proto__));

// // 생성자 함수
// function Base(a) {
//   this.a = a;
// }

// class Derived extends Base {}
// const derived = new Derived(1);
// console.log(derived); // Derived { a: 1 }

// function Base1() {}
// class Base2 {}
// let condition = true;

// class Derived extends (condition ? Base1 : Base2) {}
// const derived = new Derived();
// console.log(derived); // Derived {}
// console.log(derived instanceof Base1); // true
// console.log(derived instanceof Base2); // false

// // 수퍼 클래스
// class Base {}

// // 서브 클래스
// class Derived extends Base {
//   // 암묵적으로 생성된다.
//   constructor(...args) {
//     super(...args);
//   }
// }

// const derived = new Derived();
// console.log(derived);

// // 수퍼클래스
// class Base {
//   constructor(a, b) {
//     // 4
//     this.a = a; // 5
//     this.b = b; //  6
//   }
// }

// // 서브 클래스
// class Derived extends Base {
//   constructor(a, b, c) {
//     // 2
//     super(a, b); // 3
//     this.c = c; // 7
//   }
// }

// const derived = new Derived(1, 2, 3); // 1
// console.log(derived); // Derived { a: 1, b: 2, c: 3 }

// class Base {}
// class Derived extends Base {
//   constructor() {
//     // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//     console.log("constructor call");
//   }
// }
// const derived = new Derived();

// class Base {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     return `Hi ${this.name} (is Super)`;
//   }
// }

// class Derived extends Base {
//   sayHi() {
//     const __super = Object.getPrototypeOf(Derived.prototype);
//     return `${__super.sayHi.call(this)}! How are u doing? (is Derived)`;
//     // return `${super.sayHi()}! How are u doing? (is Derived)`;
//   }
// }

// const derived = new Derived("th");
// console.log(derived.sayHi()); // Hi th (is Super)! How are u doing? (is Derived)

const base = {
  name: "Lee",
  sayHi() {
    return `Hi ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  sayHi() {
    return `${super.sayHi()}. yeah~~`;
  },
};

console.log(derived.sayHi()); // Hi Lee. yeah~~

class Base {
  static sayHi() {
    return "Hi!!";
  }
}

class Derived extends Base {
  static sayHi() {
    return `${super.sayHi()} i am derived!`;
  }
}

console.log(Derived.sayHi()); // Hi!! i am derived!

class Rectangle {
  constructor(width, height) {
    // 암묵적으로 빈 객체, 즉 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // ColorRectangle {}
    // new 연산자와 함께 호출된 함수, 즉 new.target은 ColorRectangle 이다.
    console.log(new.target); // [class ColorRectangle extends Rectangle]

    // 생성된 인스턴스의 프로토타입으로 ColorRectangle.prototype 이 설정된다.
    console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype); // true
    console.log(this instanceof ColorRectangle); // true
    console.log(this instanceof Rectangle); // true
    this.width = width;
    this.height = height;

    console.log(this); // ColorRectangle { width: 2, height: 4 }
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);

    console.log(this); // ColorRectangle { width: 2, height: 4 }

    // 초기화
    this.color = color;

    console.log(this); // ColorRectangle { width: 2, height: 4, color: 'red' }
  }

  toString() {
    return `${super.toString()}, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, "red");
console.log(colorRectangle); // ColorRectangle { width: 2, height: 4, color: 'red' }
console.log(colorRectangle.getArea()); // 8
console.log(colorRectangle.toString()); // width = 2, height = 4, color = red

// class MyArray extends Array {
//   // 중복된 배열 요소를 제거하고 반환한다.
//   uniq() {
//     return this.filter((v, i, self) => self.indexOf(v) === i);
//   }

//   // 모든 배열 요소의 평균을 구한다: [1,2,3] => 2
//   average() {
//     return this.reduce((pre, cur) => pre + cur, 0) / this.length;
//   }
// }

// const myArray = new MyArray(1, 1, 2, 3);
// console.log(myArray); // MyArray(4) [ 1, 1, 2, 3 ]

// console.log(myArray.uniq()); // MyArray(3) [ 1, 2, 3 ]
// console.log(myArray.average()); // 1.75

// // 메서드 체이닝
// // filter =[1,1,3]=> uniq =[1,3]=> average =4=>
// console.log(
//   myArray
//     .filter((v) => v % 2)
//     .uniq()
//     .average()
// ); // 2

class MyArray extends Array {
  // 모든 메서드가 Array 타입의 인스턴스를 반환하도록한다.
  static get [Symbol.species]() {
    return Array;
  }

  // 중복된 배열 요소를 제거하고 반환한다.
  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  // 모든 배열 요소의 평균을 구한다: [1,2,3] => 2
  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray.uniq() instanceof MyArray); // false
console.log(myArray.uniq() instanceof Array); // true

console.log(myArray.uniq()); // [ 1, 2, 3 ]
console.log(myArray.average()); // 1.75
