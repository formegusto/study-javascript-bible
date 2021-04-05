{
  console.log(...[1, 2, 3]); // 1 2 3

  console.log(..."Hello"); // H e l l o

  console.log(
    ...new Map([
      ["a", "1"],
      ["b", "2"],
    ])
  ); // [ 'a', '1' ] [ 'b', '2' ]

  console.log(...new Set([1, 2, 3])); // 1 2 3

  // console.log(...{ a: 1, b: 2 }); // TypeError: Found non-callable @@iterator
  // const list = ...[1,2,3]; // SyntaxError: Unexpected token '...'
}

{
  const arr = [1, 2, 3];

  console.log(Math.max(...arr)); // 3
  console.log(Math.max(1, 2, 3)); // 3
  console.log(Math.max(arr)); // NaN
  console.log(Math.max.apply(null, arr)); // 3
}

{
  // Rest 파라미터는 인수들의 목록을 배열로 전달받는다.
  function foo(...rest) {
    console.log(rest); // [ 1, 2, 3 ]
  }

  foo(...[1, 2, 3]);
}

// 1. concat
{
  // ES5
  var arr = [1, 2].concat([3, 4]);
  console.log(arr); // [ 1, 2, 3, 4 ]

  // ES6
  const arr2 = [...[1, 2], ...[3, 4]];
  console.log(arr2); // [ 1, 2, 3, 4 ]
}

// 2. splice
{
  // ES5
  var arr1 = [1, 4];
  var arr2 = [2, 3];

  //   arr1.splice(1, 0, arr2);
  //   console.log(arr1); // [ 1, [ 2, 3 ], 4 ]
  // 배열 자체가 추가 된다.

  arr1.splice.apply(arr1, [1, 0].concat(arr2));
  console.log(arr1); // [ 1, 2, 3, 4 ]

  // ES6
  const arr3 = [1, 4];
  const arr4 = [2, 4];

  arr3.splice(1, 0, ...arr4);
  console.log(arr3); // [ 1, 2, 3, 4 ]
}

// 3. 배열복사 (slice)
{
  // ES5
  var origin = [1, 2];
  var copy = origin.slice();
  console.log(copy); // [ 1, 2 ]
  console.log(copy === origin); // false

  // ES6
  const origin2 = [1, 2];
  const copy2 = [...origin];
  console.log(copy2); // [ 1, 2 ]
  console.log(origin2 === copy2); // false
}

// 4. 이터러블을 배열로 반환
{
  // ES5
  function sum() {
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function (pre, cur) {
      return pre + cur;
    }, 0);
  }
  console.log(sum(1, 2, 3));

  // 이터러블이 아닌, 유사 배열 객체
  const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
  };
  const arr = Array.prototype.slice.call(arrayLike);
  console.log(arr);

  // ES6
  function sumSpread() {
    return [...arguments].reduce((pre, cur) => pre + cur);
  }
  console.log(sumSpread(1, 2, 3));

  // Rest
  const sumRest = (...rest) => rest.reduce((pre, cur) => pre + cur);
  console.log(sumRest(1, 2, 3, 4));

  // 단 이터러블이 아닌, 유사 배열 객체는 스프레드 문법의 대상이 될 수 없다.
  // ArrayFrom을 이용해야 한다.
  try {
    console.log([...arrayLike]);
  } catch (err) {
    console.error(err.message); // arrayLike is not iterable
    console.log(Array.from(arrayLike)); // [ 1, 2, 3 ]
  }
}

// Spread Property
{
  // 객체 복사(얕은 복사)
  const obj = { x: 1, y: 2 };
  const copy = { ...obj };
  console.log(copy); // { x: 1, y: 2 }
  console.log(obj === copy); // false

  // 객체 병합
  const merge = { a: 1, b: 2, ...obj };
  console.log(merge);
  // { a: 1, b: 2, x: 1, y: 2 }
}

// Object.assign
{
  // 객체 병합, 프로퍼티가 중복되는 경우 뒤에 프로퍼티가 우선권을 갖는다.
  const merged = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });
  console.log(merged);

  // 특정 프로퍼티 변경
  const changed = Object.assign({}, { x: 1, y: 2 }, { y: 100 });
  console.log(changed);

  // 프로퍼티 추가
  const added = Object.assign({}, { x: 1, y: 2 }, { z: 0 });
  console.log(added);
}

// Spread
{
  const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
  console.log(merged);

  const changed = { ...{ x: 1, y: 2 }, ...{ y: 100 } };
  console.log(changed);

  const added = { ...{ x: 1, y: 2 }, ...{ z: 0 } };
  console.log(added);
}
