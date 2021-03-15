// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고, 변수에 할당된다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const predicates = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
  let num = 0;

  return function () {
    num = predicate(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1

function square(number) {
  return number * number;
}
console.log(Object.getOwnPropertyDescriptors(square));
// {
//     length: { value: 1, writable: false, enumerable: false, configurable: true },
//     name: {
//         value: 'square',
//         writable: false,
//         enumerable: false,
//         configurable: true
//     },
//     arguments: {
//         value: null,
//         writable: false,
//         enumerable: false,
//         configurable: false
//     },
//     caller: {
//         value: null,
//         writable: false,
//         enumerable: false,
//         configurable: false
//     },
//     prototype: { value: {}, writable: true, enumerable: false, configurable: false }
// }

{
  function multiply(x, y) {
    console.log(arguments);
    return x * y;
  }
  console.log(multiply());
  console.log(multiply(1));
  console.log(multiply(1, 2));
  console.log(multiply(1, 2, 3));

  // [Arguments] {}
  // NaN
  // [Arguments] { '0': 1 }
  // NaN
  // [Arguments] { '0': 1, '1': 2 }
  // 2
  // [Arguments] { '0': 1, '1': 2, '2': 3 }
  // 2
}

{
  function multiply(x, y) {
    const iterator = arguments[Symbol.iterator]();

    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: 3, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }

    return x * y;
  }

  multiply(1, 2, 3);
}

{
  function sum() {
    let res = 0;

    for (let i = 0; i < arguments.length; i++) res += arguments[i];

    return res;
  }

  console.log(sum(1, 2)); // 3
  console.log(sum(1, 2, 3, 4, 5)); // 15
}

{
  function sum() {
    const array = Array.prototype.slice.call(arguments);
    return array.reduce((pre, cur) => pre + cur, 0);
  }

  console.log(sum(1, 2, 3, 4, 5, 6, 7)); // 28
}

{
  function sum(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
  }
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45
}

{
  function foo() {}
  console.log(foo.length); // 0

  function bar(x) {}
  console.log(bar.length); // 1
}

{
  var namedFunc = function foo() {};
  console.log(namedFunc.name); // foo

  var anonymousFunc = function () {};
  console.log(anonymousFunc.name); // anonymousFunc
  // ES5에서는 빈 문자열이 나온다.

  function bar() {}
  console.log(bar.name); // bar
}

{
  const obj = { a: 1 };

  // 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype 이다.
  console.log(obj.__proto__ === Object.prototype); // true

  // 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받았다.
  // hasOwnProperty 메서드는 Object.prototype의 메서드다.
  console.log(obj.hasOwnProperty("a")); // true
  console.log(obj.hasOwnProperty("__proto__")); // false

  // hasOwnProperty
  // 이름에서 알 수 있듯이 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고,
  // 상속받은 프로토타입의 프로퍼티 키인 경우 false를 반환한다
}

{
  // 함수 객체는 prototype 프로퍼티를 소유한다.
  console.log(function () {}.hasOwnProperty("prototype")); // true

  // 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
  console.log({}.hasOwnProperty("prototype")); // false
}
