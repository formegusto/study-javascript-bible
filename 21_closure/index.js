// const x = 1;

// function outerFunc() {
//   const x = 10;

//   function innerFunc() {
//     console.log(x); // 10
//   }

//   innerFunc();
// }

// outerFunc();

// const x = 1;

// function foo() {
//   const x = 10;
//   bar();
// }

// function bar() {
//   console.log(x);
// }

// foo(); // 1
// bar(); // 1

// const x = 1;

// function outer() {
//   const x = 10;
//   const inner = function () {
//     console.log(x);
//   };
//   return inner;
// }

// const innerFunc = outer();
// innerFunc(); // 10

// let num = 0;

// const increase = function () {
//   return ++num;
// };

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(increase()); // 3

// const increase = (function () {
//   let num = 0;

//   return function () {
//     return ++num;
//   };
// })();

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(increase()); // 3

// const counter = (function () {
//   let num = 0;

//   return {
//     increase: function () {
//       return ++num;
//     },
//     decrease: function () {
//       return --num;
//     },
//   };
// })();

// console.log(counter.increase()); // 1
// console.log(counter.increase()); // 2
// console.log(counter.decrease()); // 1

// const Counter = (function () {
//   let num = 0;

//   function Counter() {
//     // this.num = 0;
//     // 프로퍼티로 만들면 public해져서 은닉되지 않는다.
//   }

//   Counter.prototype.increase = function () {
//     return ++num;
//   };

//   Counter.prototype.decrease = function () {
//     return --num;
//   };

//   return Counter;
// })();

// const counter = new Counter();

// console.log(counter.increase()); // 1
// console.log(counter.increase()); // 2
// console.log(counter.decrease()); // 1

// function makeCounter(predicate) {
//   let counter = 0;

//   return function () {
//     counter = predicate(counter);
//     return counter;
//   };
// }

// function increase(n) {
//   return ++n;
// }

// function decrease(n) {
//   return --n;
// }

// const increaser = makeCounter(increase);
// console.log(increaser()); // 1
// console.log(increaser()); // 2

// const decreaser = makeCounter(decrease);
// console.log(decreaser()); // -1
// console.log(decreaser()); // -2

const counter = (function () {
  let counter = 0;

  return function (predicate) {
    counter = predicate(counter);
    return counter;
  };
})();

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

console.log(counter(increase)); // 1
console.log(counter(increase)); // 2

console.log(counter(decrease)); // 1
console.log(counter(decrease)); // 0

// function Person(name, age) {
//   this.name = name; // public
//   let _age = age; // private

//   this.sayHi = function () {
//     console.log(`Hi! My name is ${this.name}. I am ${_age}`);
//   };
// }

// const me = new Person("no", 26);
// me.sayHi(); // Hi! My name is no. I am 26
// console.log(me.name); // no
// console.log(me._age); // undefined

// function Person(name, age) {
//   this.name = name; // public
//   let _age = age; // private
// }
// Person.prototype.sayHi = function () {
//   console.log(`Hi! My name is ${this.name}. I am ${_age}`); // ReferenceError: _age is not defined
// };

// const Person = (function () {
//   let _age = 0; // private

//   function Person(name, age) {
//     this.name = name;
//     _age = age;
//   }

//   Person.prototype.sayHi = function () {
//     console.log(`Hi! My name is ${this.name}. I am ${_age}`);
//   };

//   return Person;
// })();

// const me = new Person("no", 26);
// me.sayHi(); // Hi! My name is no. I am 26
// console.log(me.name); // no
// console.log(me._age); // undefined

// const kim = new Person("Kim", 30);
// me.sayHi(); // Hi! My name is no. I am 30

function Person(name, age) {
  this.name = name;
  let _age = age; // private

  if (age === 26) {
    Person.prototype.sayHi = function () {
      console.log(`Hi! My name is ${this.name}. I am ${_age}`);
    };
  } else {
    Person.prototype.sayHi_2 = function () {
      console.log(`Hi! My name is ${this.name}. I am ${_age}`);
    };
  }
}

const me = new Person("no", 26);
me.sayHi(); // Hi! My name is no. I am 26
console.log(me.name); // no
console.log(me._age); // undefined

const kim = new Person("Kim", 30);
// 렉시컬 환경이 계속 남아있기 때문이다.
// 즉 _age는 계속 살아있고, 값이 변경되고
// 객체들은 모두 똑같은 age를 바라보고 있는 것이다.
// 적어도 함수 실행 컨텍스트 내에서는
// 반환되는 this(Person) 객체는 다를 수 있어도 말이다.
me.sayHi(); // Hi! My name is no. I am 30

// var funcs = [];

// for (var i = 0; i < 3; i++) {
//   funcs[i] = function () {
//     return i;
//   };
// }

// for (var j = 0; j < funcs.length; j++) {
//   console.log(funcs[j]()); // 3 3 3
// }

// var funcs = [];

// for (var i = 0; i < 3; i++) {
//   funcs[i] = (function (id) {
//     return function () {
//       return id;
//     };
//   })(i);
// }

// for (var j = 0; j < funcs.length; j++) {
//   console.log(funcs[j]()); // 0 1 2
// }

// var funcs = [];

// for (let i = 0; i < 3; i++) {
//   funcs[i] = function () {
//     return i;
//   };
// }

// for (var j = 0; j < funcs.length; j++) {
//   console.log(funcs[j]()); // 0 1 2
// }

const funcs = Array.from(new Array(3), (_, i) => () => i); // (3) [f,f,f]

funcs.forEach((func) => console.log(func())); // 0 1 2
