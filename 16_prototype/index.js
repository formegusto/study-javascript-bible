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
