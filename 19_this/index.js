{
  const circle = {
    radius: 5,
    getDiameter() {
      return 2 * this.radius;
    },
  };

  console.log(circle.getDiameter()); // 10

  function Circle(radius) {
    this.radius = radius;

    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }
  const circleCons = new Circle(10);
  console.log(circleCons.getDiameter()); // 20
}

{
  function Circle(radius) {
    this.radius = radius;
  }
  Circle.prototype.getDiameter = function () {
    return 2 * this.radius;
  };

  const circleCons = new Circle(20);
  console.log(circleCons.getDiameter()); // 40
}

{
  // this는 어디서든지 참조 가능하다.
  console.log(this); // browser : window , nodejs : {}

  function square(number) {
    // 일반 함수에서 this는 전역 객체를 가리킨다.
    console.log(this); // global
    return number * number;
  }
  square(2);

  const person = {
    name: "Lee",
    getName() {
      // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
      return this.name;
    },
  };
  console.log(person.getName());

  function Person(name) {
    this.name = name;
    // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.getName = function () {
      return this.name;
    };
  }
  const personTwo = new Person("no");
  console.log(personTwo.getName());
}

{
  const foo = function () {
    console.dir(this);
  };

  // 1. 일반 함수 호출
  foo(); // global, window

  // 2. 메서드 호출
  const obj = { foo };
  obj.foo(); // { foo: [Function: foo] } === obj

  // 3. 생성자 함수 호출
  new foo(); // foo {} === 생성자 함수가 생성한 인스턴스

  // 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
  const bar = { name: "bar" };
  foo.call(bar); // { name: 'bar' } === bar
  foo.apply(bar); // { name: 'bar' } === bar
  foo.bind(bar)(); // { name: 'bar' } === bar
}

{
  x = 1;

  function foo() {
    console.log("foo's this: " + this);
    console.log("foo's this x: " + this.x);

    function bar() {
      console.log("bar's this: " + this);
      console.log("bar's this x: " + this.x);
    }
    bar();
  }
  foo();
  //   foo's this: [object global]
  //   foo's this x: 1
  //   bar's this: [object global]
  //   bar's this x: 1
}

{
  value = 1;

  const obj = {
    value: 100,
    foo() {
      console.log("foo's this: " + this);
      console.log("foo's this x: " + this.value);

      function bar() {
        console.log("bar's this: " + this);
        console.log("bar's this x: " + this.value);
      }
      bar();
    },
  };
  obj.foo();

  // foo's this: [object Object]
  // foo's this x: 100
  // bar's this: [object global]
  // bar's this x: 1
}

{
  value = 1;

  const obj = {
    value: 100,
    foo() {
      console.log("foo's this: " + this); // [object object] === obj
      // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
      setTimeout(function () {
        console.log("callback's this: " + this); // 5
        console.log("callback's this.value: " + this.value); // undefined
      }, 100);
    },
  };

  obj.foo();
}

{
  value = 1;

  const obj = {
    value: 100,
    foo() {
      const that = this;
      setTimeout(function () {
        console.log(that); // { value: 100, foo: [Function: foo] }
        console.log(that.value); // 100
      }, 100);
    },
  };

  obj.foo();
}

{
  value = 1;

  const obj = {
    value: 100,
    foo() {
      setTimeout(
        function () {
          console.log(this); // { value: 100, foo: [Function: foo] }
          console.log(this.value); // 100
        }.bind(this),
        100
      );
    },
  };

  obj.foo();
}

{
  value = 1;

  const obj = {
    value: 100,
    foo() {
      setTimeout(() => console.log(this.value), 100);
    },
  };

  obj.foo();
}
