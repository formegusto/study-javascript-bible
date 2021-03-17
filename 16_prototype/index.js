{
  const person = {
    name: "Lee",
    address: "Seoul",
  };
  console.log(person);
}

{
  const circle = {
    radius: 5, // 반지름

    // 원의 지름 : 2r
    getDiameter() {
      return 2 * this.radius;
    },

    // 원의 둘레 : 2nr
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    },

    // 원의 넓이 : nrr
    getArea() {
      return Math.PI * this.radius ** 2;
    },
  };

  console.log(circle);

  console.log(circle.getDiameter()); // 10
  console.log(circle.getPerimeter()); // 31.41592653589793
  console.log(circle.getArea()); // 78.53981633974483
}

{
  function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
      return Math.PI * this.radius ** 2;
    };
  }

  const circle1 = new Circle(1);
  const circle2 = new Circle(2);

  // Circle 생성자 함수는 인스턴스를 생성할 때 마다 동일한 동작을 하는
  // getArea 메서드를 중복 생성하고, 모든 인스턴스가 중복 소유한다.
  // getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
  console.log(circle1.getArea === circle2.getArea); // false
}

{
  function Circle(radius) {
    this.radius = radius;
  }

  // Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
  // 공유해서 사용할 수 있도록 프로토타입에 추가한다.
  // 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
  Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
  };

  const circle1 = new Circle(1);
  const circle2 = new Circle(2);

  // Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
  // 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
  // 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
  console.log(circle1.getArea === circle2.getArea); // true

  console.log(circle1.getArea()); // 3.141592653589793
  console.log(circle2.getArea()); // 12.566370614359172
}

{
  const obj = {};
  const parent = { x: 1 };

  console.log(obj.__proto__); // Object: null prototype] {}

  obj.__proto__ = parent;
  console.log(obj.__proto__); // { x: 1 }

  console.log(obj.x); // 1
}

{
  const parent = {};
  const child = {};

  child.__proto__ = parent;
  //   parent.__proto__ = child; // TypeError: Cyclic __proto__ value
}

{
  // obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다.
  const obj = Object.create(null);

  console.log(obj.__proto__); // undefined
  // 따라서 __proto__ 보다는 getPrototypeOf 메서드를 이용해서 취득하는 편이 좋다.
  console.log(Object.getPrototypeOf(obj)); // null
}

{
  const obj = Object.create(null);
  const parent = { x: 1 };

  Object.getPrototypeOf(obj);
  Object.setPrototypeOf(obj, parent);

  console.log(obj.x); // 1
}

{
  // 함수 객체는 prototype 프로퍼티를 소유한다.
  console.log(function () {}.hasOwnProperty("prototype")); // true

  // 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
  console.log({}.hasOwnProperty("prototype")); // false
}

{
  const Person = (name) => {
    this.name = name;
  };
  console.log(Person.hasOwnProperty("prototype")); // false
  console.log(Person.prototype); // undefined

  const obj = {
    foo() {},
  };
  console.log(obj.foo.hasOwnProperty("prototype")); // false
  console.log(obj.foo.prototype); // undefined
}

{
  function Person(name) {
    this.name = name;
  }

  const me = new Person("noth");
  console.log(Person.prototype === me.__proto__); // true
}

{
  function Person(name) {
    this.name = name;
  }

  const me = new Person("noth");
  console.log(Person === me.constructor); // true
}

{
  const obj = new Object();
  console.log(obj.constructor === Object); // true

  const add = new Function("a", "b", "return a + b");
  console.log(add.constructor === Function); // true

  function Person(name) {
    this.name = name;
  }
  const me = new Person("noth");
  console.log(me.constructor === Person); // true
}

{
  const obj = {};
  console.log(obj.constructor === Object);

  const add = function (a, b) {
    return a + b;
  };
  console.log(add.constructor === Function);

  const arr = [1, 2, 3];
  console.log(arr.constructor === Array);

  const regexp = /is/gi;
  console.log(regexp.constructor === RegExp);
}

{
  // 2. Object 생성자 함수에 의한 객체 생성
  // 인수가 전달되지 않았을 때, 추상 연산 OrdinaryObjectCreate를 호출하여 빈 객체를 생성한다.
  let obj = new Object();
  console.log(obj); // {}

  // 1. new.target이 undefined나 Object가 아닌 경우
  // 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인이 생성된다.
  class Foo extends Object {}
  console.log(new Foo()); // Foo {}

  // 3. 인수가 전달된 경우에는 인수를 객체로 변환한다.
  obj = new Object(123);
  console.log(obj); // [Number: 123]
}

{
  // 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
  console.log(Person.prototype); // {constructor: f}

  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 화살표 함수는 non-constructor로 프로토타입이 생성되지 않는다.
  const Person2 = (name) => {
    this.name = name;
  };
  console.log(Person2.prototype); // undefined

  console.log(Person.__proto__ === Object.__proto__); // true

  console.log(Object.prototype.constructor === Object); // true
}

{
  const obj = { x: 1 };

  console.log(obj.__proto__.constructor === Object); // true
  // constructor는 Object.prototype 으로 상속받았다.
  console.log(obj.constructor === Object); // true
}

{
  const obj = new Object();
  obj.x = 1;

  console.log(obj.__proto__.constructor === Object); // true
  // constructor는 Object.prototype 으로 상속받았다.
  console.log(obj.constructor === Object); // true
}

{
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`안녕하세요! 저는 ${this.name} 입니다!`);
  };
  const me = new Person("me");
  me.sayHello(); // 안녕하세요! 저는 me 입니다!
}

{
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  const me = new Person("No");

  console.log(me.hasOwnProperty("name")); // true

  console.log(Object.getPrototypeOf(me) === Person.prototype); // true
  console.log(Person.__proto__ === Function.prototype); // true
  console.log(Function.__proto__ === Object.__proto__); // true
  console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true

  Object.prototype.hasOwnProperty.call(me, "name");
}

{
  const Person = (function () {
    // 생성자 함수
    function Person(name) {
      this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHello = function () {
      console.log(`안녕하세요! 저는 ${this.name} 입니다!`);
    };

    return Person;
  })();

  const me = new Person("No");

  // 인스턴스 메서드
  me.sayHello = function () {
    console.log(`요요 워럽! 나는 ${this.name} 이다!`);
  };

  me.sayHello(); // 요요 워럽! 나는 No 이다!
  me.__proto__.sayHello(); // 안녕하세요! 저는 undefined 입니다!

  delete me.sayHello;
  me.sayHello(); // 안녕하세요! 저는 No 입니다!

  Person.prototype.sayHello = function () {
    console.log(`차차차! 반갑다! 나는 ${this.name} 이다!`);
  };
  me.sayHello(); // 차차차! 반갑다! 나는 No 이다!

  delete Person.prototype.sayHello;
  // me.sayHello(); // TypeError: me.sayHello is not a function
}

{
  const Person = (function () {
    function Person(name) {
      this.name = name;
    }

    Person.prototype = {
      constructor: Person,
      sayHello() {
        console.log(`아 자기 소개 그만...${this.name}`);
      },
    };

    return Person;
  })();

  const me = new Person("No");

  console.log(me.constructor === Person); // true
  console.log(me.constructor === Object); // false
}

{
  function Person(name) {
    this.name = name;
  }

  const me = new Person("No");
  console.log(Object.getPrototypeOf(me));

  // 프로토타입으로 교체할 객체
  const parent = {
    constructor: Person,
    sayHello() {
      console.log(`나는 부모고, 너는 ${this.name}이야.`);
    },
  };
  // 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
  Person.prototype = parent;
  console.log(Object.getPrototypeOf(me));

  // 프로토타입 교체
  Object.setPrototypeOf(me, parent);
  me.sayHello();
  console.log(Object.getPrototypeOf(me));

  console.log(me.constructor === Person); // true
  console.log(Object.getPrototypeOf(me) === Person.prototype); // true
}

{
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  const me = new Person("Lee");

  console.log(me instanceof Person); // true
  console.log(me instanceof Object); // true

  // 프로토타입 교체
  const parent = {};
  Object.setPrototypeOf(me, parent);

  // 프로토타입 체인 상에 존재하지 않기 때문에 false 반환
  console.log(me instanceof Person); // false
  console.log(me instanceof Object); // true

  // 생성자 함수의 프로토타입을 연결해주면
  Person.prototype = parent;
  // true를 반환한다.
  console.log(me instanceof Person); // true
  console.log(me instanceof Object); // true

  function isInstanceof(instance, constructor) {
    // Get Prototype
    const prototype = Object.getPrototypeOf(instance);

    // 재귀 탈출 조건
    // prototype이 null 이면 프로토타입 체인의 종점에 다다른 것이다.
    if (!prototype) return false;

    // 프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환한다.
    return (
      prototype === constructor.prototype ||
      isInstanceof(prototype, constructor)
    );
  }

  console.log(isInstanceof(me, Person)); // true
  console.log(isInstanceof(me, Object)); // true
  console.log(isInstanceof(me, Array)); // false
}

{
  // 프로토타입이 null인 객체를 생성
  // 생성된 객체는 프로토타입 체인의 종점에 위치한다.
  let obj = Object.create(null);
  console.log(Object.getPrototypeOf(obj) === null); // true
  // Object.prototype을 상속받지 못한다.
  // console.log(obj.toString()); // TypeError: obj.toString is not a function

  // obj = {} 와 동일하다.
  obj = Object.create(Object.prototype);
  console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

  // obj = { x: 1 } 와 동일하다.
  obj = Object.create(Object.prototype, {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
  });
  console.log(obj.x); // 1
  console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

  const myProto = { x: 10 };
  // 임의의 객체를 직접 상속받는다.
  obj = Object.create(myProto);
  console.log(obj.x); // 10
  console.log(Object.getPrototypeOf(obj) === myProto); // true

  function Person(name) {
    this.name = name;
  }
  // obj = new Person('Lee')와 동일하다.
  obj = Object.create(Person.prototype);
  obj.name = "Lee";
  console.log(obj.name); // Lee
  console.log(Object.getPrototypeOf(obj) === Person.prototype); // true

  obj = Object.create(null);
  obj.a = 1;

  console.log(Object.prototype.hasOwnProperty.call(obj, "a")); // true
}

{
  const myProto = { x: 10 };

  const obj = {
    y: 20,
    __proto__: myProto,
  };

  console.log(obj.x, obj.y); // 10 20
  console.log(Object.getPrototypeOf(obj) === myProto); // true
}

{
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`hihihi ${this.name}`);
  };

  Person.staticProp = "static prop";

  Person.staticMethod = function () {
    console.log("static method");
  };

  const me = new Person("No");

  Person.staticMethod(); // static method
  console.log(Person.staticProp); // static prop
}

{
  const person = {
    name: "Lee",
    address: "Seoul",
  };

  console.log("name" in person); // true
  console.log("address" in person); // true
  console.log("age" in person); // false
  console.log("toString" in person); // true

  console.log(Reflect.has(person, "name")); // true
  console.log(Reflect.has(person, "toString")); // true
  console.log(Reflect.has(person, "age")); // false

  console.log(Object.prototype.hasOwnProperty.call(person, "name")); // true
  console.log(Object.prototype.hasOwnProperty.call(person, "age")); // false
  console.log(Object.prototype.hasOwnProperty.call(person, "toString")); // false
}

{
  const person = {
    name: "No",
    address: "Seoul",
  };

  for (const key in person) {
    console.log(key + ": " + person[key]);
  }
  // name: No
  // address: Seoul
}

{
  const sym = Symbol();
  const person = {
    name: "Lee",
    address: "Seoul",
    [sym]: 10,
  };

  for (const key in person) console.log(key + ": " + person[key]);
  // name: Lee
  // address: Seoul
}

{
  const sym = Symbol();
  const person = {
    name: "Lee",
    address: "Seoul",
    [sym]: 10,
    __proto__: { age: 20 },
  };

  for (const key in person) {
    if (person.hasOwnProperty(key)) console.log(key + ": " + person[key]);
  }
  // name: Lee
  // address: Seoul

  const obj = {
    2: 2,
    3: 3,
    1: 1,
    b: "b",
    a: "a",
  };

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) console.log(key + ": " + obj[key]);
  }
  // 1: 1
  // 2: 2
  // 3: 3
  // b: b
  // a: a
}

{
  const arr = [1, 2, 3];
  arr.x = 10; // 가질 수 있음

  for (const i in arr) {
    // 프로퍼티도 출력될 수 있다.
    console.log(arr[i]); // 1 2 3 10
  }

  for (let i = 0; i < arr.length; i++) console.log(arr[i]); // 1 2 3

  arr.forEach((v) => console.log(v)); // 1 2 3

  // for ...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
  for (const value of arr) console.log(value); // 1 2 3
}

{
  const person = {
    name: "Lee",
    address: "Seoul",
    __proto__: { age: 20 },
  };

  console.log(Object.keys(person));
  // [ 'name', 'address' ]
  console.log(Object.values(person));
  // [ 'Lee', 'Seoul' ]
  console.log(Object.entries(person));
  // [ [ 'name', 'Lee' ], [ 'address', 'Seoul' ] ]
  Object.entries(person).forEach(([key, value]) => console.log(key, value));
  // name Lee
  // address Seoul
}
