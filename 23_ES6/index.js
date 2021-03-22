// 함수의 구분
var foo = function () {
  return 1;
};

// 일반적인 함수로서의 호출
console.log(foo()); // 1

// 생성자 함수로서 호출
console.log(new foo()); // foo {}

// 메서드로서 호출
var obj = { foo };
console.log(obj.foo()); // 1

var obj = {
  x: 10,
  f: function () {
    return this.x;
  },
};

console.log(obj.f()); // 10

var bar = obj.f;
console.log(bar()); // undefined

console.log(new obj.f()); // f {}

// 콜백 함수를 사용하는 HOF map. 콜백 함수도 constructor이며, 프로토타입을 생성한다.
[1, 2, 3].map(function (item) {
  return item * 2;
});

{
  const obj = {
    x: 1,
    // foo는 메서드다.
    foo() {
      return this.x;
    },
    // bar에 바인딩된 함수는 메서드가 아닌, 일반 함수다.
    bar: function () {
      return this.x;
    },
  };

  console.log(obj.foo()); // 1
  console.log(obj.bar()); // 1

  //   new obj.foo(); // TypeError: obj.foo is not a constructor
  new obj.bar();

  // obj.foo는 ES6의 메서드 이므로 prototype 프로퍼티가 없다.
  console.log(obj.foo.hasOwnProperty("prototype")); // false
  console.log(obj.bar.hasOwnProperty("prototype")); // true
}

{
  const multiply = (x, y) => x * y;
  console.log(multiply(2, 3)); // 6

  //   const arrow = (x, y) => {
  //     return x + y;
  //   };

  //   // 매개변수가 한 개인 경우 소괄호를 생략할 수 있다.
  //   const arrow = (x) => {
  //     return x;
  //   };

  //   // 하지만 없는 경우에는 생략할 수 없다.
  //   const arrow = () => {
  //     return "X";
  //   };

  // concise body
  const power = (x) => x ** 2;
  console.log(power);

  // block body
  //   const power = (x) => {
  //     return x ** 2;
  //   };

  //   const arrow = () => const x = 1; // SyntaxError: Unexpected token 'const'
}

{
  const create = (id, content) => ({ id, content });
  console.log(create("no", "안녕하세요")); // { id: 'no', content: '안녕하세요' }

  // 이것과 동일하다.
  //   const create = (id, content) => {
  //     return { id, content };
  //   };

  const person = ((name) => ({
    sayHi() {
      return `Hi? My name is ${name}`;
    },
  }))("Lee");

  console.log(person.sayHi());

  [1, 2, 3].map(function (v) {
    return v * 2;
  });

  [1, 2, 3].map((v) => v * 2);
}

{
  function normal(a, a) {
    return a + a;
  }
  console.log(normal(1, 2)); // 4
}

// class Prefixer {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   add(arr) {
//     return arr.map(function (item) {
//       return this.prefix + item; // TypeError: Cannot read property 'prefix' of undefined
//     });
//   }
// }

// const prefixer = new Prefixer("-webkit-");
// console.log(prefixer.add(["transition", "user-select"]));

// class Prefixer {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   add(arr) {
//     // this를 우선 회피 시킨다.
//     const that = this;
//     return arr.map(function (item) {
//       // this를 that으로 참조하여 접근한다.
//       return that.prefix + item;
//     });
//   }
// }

// const prefixer = new Prefixer("-webkit-");
// console.log(prefixer.add(["transition", "user-select"]));

class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transition", "user-select"]));

(function () {
  const foo = () => console.log(this);
  foo();
}.call({ a: 1 })); // { a: 1 }

// 화살표 함수가 화살표 함수를 반환한다.
// 제일 가까운 즉, 화살표 함수 위에 화살표 함수가 아닌,
// 상위 스코프의 this가 선택된다.
(function () {
  const bar = () => () => console.log(this);
  bar()();
}.call({ x: 1 })); // { x: 1 }

const counter = {
  num: 1,
  // module.exports에 붙음
  increase: () => ++this.num,
};
console.log(counter.increase()); // NaN

// module.exports를 가리킴 (node.js)

const add = (a, b) => a + b;
console.log(add.apply(null, [4, 5])); // 9
console.log(add.call(null, 1, 2)); // 3
console.log(add.bind(null, 1, 2)()); // 3

// function Person(name) {
//   this.name = name;
// }
// Person.prototype = {
//   ...Person.prototype,
//   sayHi() {
//     console.log(`Hi! ${this.name}`);
//   },
// };

// const person = new Person("no");
// person.sayHi(); // Hi! no

class Person {
  name = "Lee";
  sayHi = () => console.log(`${this.name}`);
}

const person = new Person();
person.sayHi();

(function () {
  const foo = () => console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
  foo(3, 4);
})(1, 2);

{
  function foo(...rest) {
    console.log(rest); // [ 1, 2, 3, 4, 5, 6 ]
  }
  foo(1, 2, 3, 4, 5, 6);
}
{
  function bar(param1, param2, ...rest) {
    console.log(param1); // 1
    console.log(param2); // 2
    console.log(rest); // [3,4,5,6]
  }
  bar(1, 2, 3, 4, 5, 6);
}

{
  function foo(...rest) {}
  console.log(foo.length); // 0
  function bar(x, ...rest) {}
  console.log(bar.length); // 1
  function baz(x, y, ...rest) {}
  console.log(baz.length); // 2
}

{
  function sum() {
    var array = Array.prototype.slice.call(arguments);

    return array.reduce((pre, cur) => pre + cur, 0);
  }

  console.log(sum(1, 2, 3, 4, 5));
}

{
  const sum = (...rest) => rest.reduce((pre, cur) => pre + cur, 0);
  console.log(sum(1, 2, 3, 4, 5, 6));
}

{
  function sum(x, y) {
    x = x || 0;
    y = y || 0;

    return x + y;
  }

  console.log(sum(1, 2));
}

{
  function logName(name = "Lee") {
    console.log(name);
  }

  // 매개변수 기본값은 전달하지 않았을 때, undefined를 전달했을 때만 유효하다.
  logName(); // Lee
  logName(undefined); // Lee
  logName(null); // null
  logName("no"); // no
}

{
  function sum(x, y = 1) {
    console.log(arguments);
  }
  console.log(sum.length); // 1
  sum(1); // [Arguments] { '0': 1 }
  sum(1, 2); // [Arguments] { '0': 1, '1': 2 }

  console.log(Object.getOwnPropertyDescriptors(sum));
}
