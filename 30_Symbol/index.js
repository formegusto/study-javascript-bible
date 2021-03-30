// Symbol Function
{
  const mySymbol = Symbol();
  console.log(typeof mySymbol); // symbol

  console.log(mySymbol); // Symbol()

  // Symbole은 변경 불가능한 원시 값으로,
  // 다른 생성자 함수들과 다르게
  // 생성자 함수가 아니다.
  // 즉, 객체 생성의 원리가 아니다.
  //   new Symbol(); // TypeError: Symbol is not a constructor
}

// Symbol Description
{
  const mySymbol1 = Symbol("mySymbol");
  const mySymbol2 = Symbol("mySymbol");

  console.log(mySymbol1 === mySymbol2); // false
}

// 암묵적 래퍼 객체
{
  const mySymbol = Symbol("mySymbol");

  // 심벌도 래퍼 객체를 생성한다.
  console.log(mySymbol.description); // mySymbol
  console.log(mySymbol.toString()); // Symbol(mySymbol)
}

// 암묵적 타입 변환
{
  const mySymbol = Symbol();

  console.log(!!mySymbol); // true
}

// Symbol.for
{
  // 'mySymbol' 이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
  const s1 = Symbol.for("mySymbol");
  // 'mySymbol' 이라는 키로 저장된 심벌 값이 있으면 해당 심벌로 값을 반환
  const s2 = Symbol.for("mySymbol");

  console.log(s1 === s2); // true
}

// Symbol.keyFor
{
  const s1 = Symbol.for("mySymbol");
  console.log(Symbol.keyFor(s1)); // mySymbol

  const s2 = Symbol("foo");
  console.log(Symbol.keyFor(s2)); // undefined
}

// Symbol Const
{
  const Direction = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4,
  };

  // 이럴때 값 1,2,3,4 에는 특별한 의미가 없고 상수 이름에 의미가 있다.
  // 이러한 경우, 무의미한 상수 대신 중복될 가능성이 없는 유일무이한 심벌 값을 사용하는 것이다.
  const myDirection = Direction.UP;
  if (myDirection === Direction.UP) console.log("You are going UP!");

  const DirectionSymbol = {
    UP: Symbol("up"),
    DOWN: Symbol("down"),
    LEFT: Symbol("left"),
    RIGHT: Symbol("right"),
  };
  const myDirectionSymbol = DirectionSymbol.UP;
  if (myDirectionSymbol === DirectionSymbol.UP)
    console.log("You are going UP!");
}

// JS Enum
{
  const DirectionSymbol = Object.freeze({
    UP: Symbol("up"),
    DOWN: Symbol("down"),
    LEFT: Symbol("left"),
    RIGHT: Symbol("right"),
  });

  const myDirectionSymbol = DirectionSymbol.UP;
  if (myDirectionSymbol === DirectionSymbol.UP)
    console.log("You are going UP!");
}

// Preperty Symbol
{
  const obj = {
    [Symbol.for("mySymbol")]: 1,
  };
  console.log(obj[Symbol.for("mySymbol")]); // 1
}

// Symbol Capsule
{
  const obj = {
    [Symbol.for("mySymbol")]: 1,
  };

  for (const key in obj) {
    console.log(key); // 아무것도 출력되지 않는다.
  }

  console.log(Object.keys(obj)); // []
  console.log(Object.getOwnPropertyNames(obj)); // []

  // 하지만 ES6에서 도입된 Object.getOwnPropertySymbols 메서드를 사용하면
  // 심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티를 찾을 수 있다.
  console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(mySymbol) ]

  const symbolKey1 = Object.getOwnPropertySymbols(obj)[0];
  console.log(obj[symbolKey1]);
}

// built-in extends
{
  Array.prototype[Symbol.for("sum")] = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
  };

  console.log([1, 2][Symbol.for("sum")]()); // 3
}

// Symbol.iterator
{
  const iterable = {
    [Symbol.iterator]() {
      let cur = 1;
      const max = 5;
      // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환
      return {
        next() {
          return { value: cur++, done: cur > max + 1 };
        },
      };
    },
  };

  for (const num of iterable) {
    console.log(num); // 1,2,3,4,5
  }
}
