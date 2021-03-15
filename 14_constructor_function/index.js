{
  // 빈 객체 생성
  const person = new Object();

  person.name = "No Tae Heon";
  person.sayHello = function () {
    console.log(`Hi! My Name is ${this.name}`);
  };

  person.sayHello();
}

{
  const strObj = new String("test");
  console.log(typeof strObj); // object
  console.log(strObj); // [String: 'test']

  const numObj = new Number(1);
  console.log(typeof numObj);
  console.log(numObj);

  const boolObj = new Boolean(true);
  console.log(typeof boolObj);
  console.log(boolObj);

  const func = new Function("x", "return x * x");
  console.log(typeof func);
  console.log(func(2));

  const arr = new Array(1, 2, 3);
  console.log(typeof arr);
  console.log(arr);

  // RegExp 객체(정규 표현식) 생성
  const regExp = new RegExp(/ab+/i);
  console.log(typeof regExp);
  console.log(regExp);

  // Date 생성자 함수에 의한 Date 객체 생성
  const date = new Date();
  console.log(typeof date);
  console.log(date);
}

{
  const circle1 = {
    radius: 5,
    getDiameter() {
      return 2 * this.radius;
    },
  };
  console.log(circle1.getDiameter());

  const circle2 = {
    radius: 10,
    getDiameter() {
      return 2 * this.radius;
    },
  };
  console.log(circle2.getDiameter());
}

{
  function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;

    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }

  const circle1 = new Circle(10);
  const circle2 = new Circle(20);
  const circle3 = Circle(30);

  console.log(circle1.getDiameter());
  console.log(circle2.getDiameter());
  console.log(circle3);
}

{
  function foo() {
    console.log(this);
  }

  // 일반적인 함수로서의 호출
  foo(); // window

  const obj = { foo };
  obj.foo(); // obj
}

{
  function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.
    console.log(this); // Circle()

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  }

  // 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
  const circle = new Circle(10);
  console.log(circle);
  // Circle { radius: 10, getDiameter: [Function (anonymous)] }
}

{
  function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.
    console.log(this); // Circle()

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    return {};
  }

  // 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
  const circle = new Circle(10);
  console.log(circle); // {}
}

{
  function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.
    console.log(this); // Circle()

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
    return 100;
  }

  // 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
  const circle = new Circle(10);
  console.log(circle);
  // Circle { radius: 10, getDiameter: [Function (anonymous)] }
}

{
  // 함수는 객체다.
  function foo() {}

  // 함수는 객체 === 프로퍼티 소유 가능
  foo.prop = 10;

  // 함수는 객체 === 메서드 소유 가능
  foo.method = function () {
    console.log(this.prop);
  };

  foo.method(); // 10

  // 일반적인 함수로서 호출 [[Call]] 호출
  foo();

  // new 연산자로서 호출 [[Construct]] 호출
  new foo();
}

{
  // 일반 함수 정의 : 함수 선언문, 함수 표현식
  function foo() {}
  const bar = function () {};
  // 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다.
  // 이는 메서드로 인정하지 않는다.
  const baz = {
    x: function () {},
  };

  console.log(new foo()); // foo {}
  console.log(new bar()); // bar {}
  console.log(new baz.x()); // x {}

  // 화살표 함수 정의
  const arrow = () => {};
  // console.log(new arrow()); // TypeError: arrow is not a constructor

  // 메서드 정의 : ES6의 메서드 축약 표현만 메서드로 인정한다.
  const obj = {
    x() {},
  };
  // console.log(new obj.x()); // TypeError: obj.x is not a constructor
}

{
  function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }

  const circle = Circle(5);
  console.log(circle); // undefined

  // 일반 함수 내부의 this는 전역 객체 window를 가리킨다.
  console.log(radius); // 5
  console.log(getDiameter()); // 10

  // circle.getDiameter(); // TypeError
  console.log(globalThis.radius); // 5
}

{
  function Circle(radius) {
    if (!new.target) {
      // new 연산자를 쓰지 않고 호출한 경우를 대비.
      // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
      return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }

  const circle = Circle(5);
  console.log(circle.getDiameter());
}

{
  // Scope-Safe Constructor Pattern
  function Circle(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킨다.
    // 즉, this와 Circle은 프로토타입에 의해 연결되지 않는다.
    if (!(this instanceof Circle)) {
      return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }

  const circle = Circle(5);
  console.log(circle.getDiameter());
}

{
  const str = String(123);
  console.log(str, typeof str); // 123 string

  const num = Number("123");
  console.log(num, typeof num); // 123 number

  const bool = Boolean("true");
  console.log(bool, typeof bool); // true boolean
}
