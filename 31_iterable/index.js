{
  const isIterable = (v) =>
    v !== null && typeof v[Symbol.iterator] === "function";

  console.log(isIterable([])); // true
  console.log(isIterable("")); // true
  console.log(isIterable(new Map())); // true
  console.log(isIterable(new Set())); // true
  console.log(isIterable({})); // false
}

{
  const array = [1, 2, 3];

  // 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
  console.log(Symbol.iterator in array); // true

  // 이터러블 배열은 for ... of 문으로 순회 가능하다.
  for (const item of array) {
    console.log(item);
  } // 1 2 3

  // 이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있다.
  console.log([...array]); // [ 1, 2, 3 ]

  // 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
  const [a, ...rest] = array;
  console.log(a, rest); // 1 [2, 3]
}

{
  const obj = { a: 1, b: 2 };

  // 스프레드 프로퍼티 제안은 객체 리터럴 내부에서 스프레드 문법의 사용을 허용한다.
  console.log({ ...obj }); // { a: 1, b: 2 }
}

{
  const array = [1, 2, 3];

  const iterator = array[Symbol.iterator]();
  console.log("next" in iterator); // true

  console.log(iterator.next()); // { value: 1, done: false }
  console.log(iterator.next()); // { value: 2, done: false }
  console.log(iterator.next()); // { value: 3, done: false }
  console.log(iterator.next()); // { value: undefined, done: true }
}

// for ... of 문의 내부 동작
{
  const iterable = [1, 2, 3];

  const iterator = iterable[Symbol.iterator]();

  for (;;) {
    const res = iterator.next();

    if (res.done) break;

    const item = res.value;
    console.log(item);
  }
}

// 유사 배열 객체
{
  const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
  };

  for (let i = 0; i < arrayLike.length; i++) console.log(arrayLike[i]);
}

// 유사 배열 객체 -> 배열
{
  const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
  };

  const arr = Array.from(arrayLike);
  for (item of arr) console.log(item);
}

// Custom Iterable
{
  const fibonacci = {
    [Symbol.iterator]() {
      let [pre, cur] = [0, 1];
      const max = 10;

      return {
        next() {
          [pre, cur] = [cur, pre + cur];

          const res = { value: cur, done: cur >= max };
          console.log(res);

          return res;
        },
      };
    },
  };

  // for .. of
  for (const num of fibonacci) console.log(num); // 1 2 3 5 8

  // 스프레드
  const arr = [...fibonacci];
  console.log(arr);

  // 디스트럭처링
  const [first, second, ...rest] = fibonacci;
  console.log(first, second, rest);
}

// construct iterable function
{
  const fibonacci = function (max) {
    let [pre, cur] = [0, 1];

    return {
      [Symbol.iterator]() {
        return {
          next() {
            [pre, cur] = [cur, pre + cur];

            const res = { value: cur, done: cur >= max };
            console.log(res);

            return res;
          },
        };
      },
    };
  };

  for (const num of fibonacci(20)) console.log(num);

  const iterable = fibonacci(20);
  const iterator = iterable[Symbol.iterator]();

  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
}

// 이터러블 이면서 이터레이터
{
  const fibonacci = function (max) {
    let [pre, cur] = [0, 1];

    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        [pre, cur] = [cur, pre + cur];

        const res = { value: cur, done: cur >= max };
        console.log(res);

        return res;
      },
    };
  };

  let iter = fibonacci(20);

  for (const num of iter) {
    console.log(num);
  }

  // fibonacci 는 이터러블 이면서 이터레이터다.
  // 이터레이터는 자체적으로 next 메서드를 소유한다.
  // 이터레이터를 따로 받을 필요가 없다.
  iter = fibonacci(10);
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
}

{
  const fibonacci = function () {
    let [pre, cur] = [0, 1];

    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        [pre, cur] = [cur, pre + cur];

        // 무한 구현은 done을 생략한다.
        // done이 undefined라 false로 찍힐것
        return { value: cur };
      },
    };
  };

  for (const num of fibonacci()) {
    if (num > 10000) break;
    console.log(num);
  }

  // 무한 이터러블에서 3개의 요소만 취득한다.
  const [f1, f2, f3] = fibonacci();
  console.log(f1, f2, f3);
}
