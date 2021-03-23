// const arr = [1, 2, 3];

// console.log(typeof arr); // object
// console.log(arr.constructor === Array); // true
// console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

// console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
// {
//     '0': { value: 1, writable: true, enumerable: true, configurable: true },
//     '1': { value: 2, writable: true, enumerable: true, configurable: true },
//     '2': { value: 3, writable: true, enumerable: true, configurable: true },
//     length: { value: 3, writable: true, enumerable: false, configurable: false }
// }

// const arr = [
//   "string",
//   10,
//   true,
//   null,
//   undefined,
//   NaN,
//   Infinity,
//   [],
//   {},
//   function () {},
// ];
// console.log(Object.getOwnPropertyDescriptors(arr));
// // {
// //     '0': {
// //       value: 'string',
// //       writable: true,
// //       enumerable: true,
// //       configurable: true
// //     },
// //     '1': { value: 10, writable: true, enumerable: true, configurable: true },
// //     '2': { value: true, writable: true, enumerable: true, configurable: true },
// //     '3': { value: null, writable: true, enumerable: true, configurable: true },
// //     '4': {
// //       value: undefined,
// //       writable: true,
// //       enumerable: true,
// //       configurable: true
// //     },
// //     '5': { value: NaN, writable: true, enumerable: true, configurable: true },
// //     '6': {
// //       value: Infinity,
// //       writable: true,
// //       enumerable: true,
// //       configurable: true
// //     },
// //     '7': { value: [], writable: true, enumerable: true, configurable: true },
// //     '8': { value: {}, writable: true, enumerable: true, configurable: true },
// //     '9': {
// //       value: [Function (anonymous)],
// //       writable: true,
// //       enumerable: true,
// //       configurable: true
// //     },
// //     length: { value: 10, writable: true, enumerable: false, configurable: false }
// // }

// const arr = [];
// console.time("Array Performance Test");
// for (let i = 0; i < 100000000; i++) {
//   arr[i] = i;
// }
// console.timeEnd("Array Performance Test");
// // Array Performance Test: 1.625s

// const obj = {};
// console.time("Array Performance Test");
// for (let i = 0; i < 100000000; i++) {
//   obj[i] = i;
// }
// console.timeEnd("Array Performance Test");
// // Array Performance Test: 2.405s

console.log([].length); // 0
console.log([1, 2, 3].length); // 3

const arr = [1, 2, 3];
arr.length = 1;
console.log(arr); // [ 1 ]

arr.push(2);
arr.push(3);
arr.length = 5;
console.log(arr); // [ 1, 2, 3, <2 empty items> ]
// 이 때 값 없이 비어 있는 요소를 위해 메모리 공간을 확보하지 않으며,
// 빈 요소를 생성하지도 않는다.
console.log(Object.getOwnPropertyDescriptors(arr));
// {
//     '0': { value: 1, writable: true, enumerable: true, configurable: true },
//     '1': { value: 2, writable: true, enumerable: true, configurable: true },
//     '2': { value: 3, writable: true, enumerable: true, configurable: true },
//     length: { value: 5, writable: true, enumerable: false, configurable: false }
// }

const emptyArr = [, 2, , 4];
console.log(emptyArr.length); // 4
console.log(emptyArr); // [ <1 empty item>, 2, <1 empty item>, 4 ]
console.log(Object.getOwnPropertyDescriptors(emptyArr));
// 0과 2인 요소는 존재하지 않는다.
// {
//     '1': { value: 2, writable: true, enumerable: true, configurable: true },
//     '3': { value: 4, writable: true, enumerable: true, configurable: true },
//     length: { value: 4, writable: true, enumerable: false, configurable: false }
// }

// 배열 리터럴
{
  const arr1 = [1, 2, 3];
  console.log(arr1.length); // 3

  const arr2 = [];
  console.log(arr2.length); // 0

  const arr3 = [1, , 3];
  console.log(arr3.length); // 3
  // 희소 배열의 length는 배열의 실제 요소 개수보다 언제나 크다.
}

{
  const arr1 = new Array(10);
  console.log(arr1); // [ <10 empty items> ]
  console.log(arr1.length); // 10
  // 이 때 생성된 배열은 희소 배열이다.
  console.log(Object.getOwnPropertyDescriptors(arr1));
  /*
    {
        length: { value: 10, writable: true, enumerable: false, configurable: false }
    }
  */

  //   new Array(43242423423423); // RangeError: Invalid array length
  //   new Array(-1); // RangeError: Invalid array length

  console.log(new Array()); // []

  console.log(new Array(1, 2, 3)); //  [ 1, 2, 3 ]
  console.log(new Array({})); // [ {} ]

  console.log(Array.of(1)); // [ 1 ]
  console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]
  console.log(Array.of("string")); // [ 'string' ]

  // 유사 배열 객체를 변환하여 배열을 생성한다.
  console.log(Array.from({ length: 2, 0: "a", 1: "b" })); // ['a','b']
  // 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
  console.log(Array.from("Hello")); // [ 'H', 'e', 'l', 'l', 'o' ]

  // Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다.
  console.log(Array.from({ length: 3 })); // [ undefined, undefined, undefined ]

  // Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다.
  console.log(Array.from({ length: 3 }, (_, i) => i)); // [ 0, 1, 2 ]

  // 유사 배열 객체
  const arrayLike = {
    0: "apple",
    1: "banana",
    2: "orange",
    length: 3,
  };
  for (let i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i]);
  }
  /*
    apple
    banana
    orange
  */
}

{
  const arr = [0];
  arr[1] = 1;

  console.log(arr); // [ 0, 1 ]
  console.log(arr.length); // 2

  arr[100] = 100;
  console.log(arr); // [ 0, 1, <98 empty items>, 100 ]
  console.log(arr.length); // 101

  // 요소 값의 갱신
  arr[1] = 10;
  console.log(arr[1]); // 10
}
{
  const arr = [];

  // 배열 요소의 추가
  arr[0] = 1;
  arr["1"] = 2;

  // 프로퍼티 추가
  arr["foo"] = 3;
  arr.bar = 4;
  arr[1.1] = 5;
  arr[-1] = 6;

  console.log(arr); // [ 1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6 ]
  console.log(arr.length); // 2
}

{
  const arr = [1, 2, 3];

  delete arr[1];
  console.log(arr); // [ 1, <1 empty item>, 3 ]

  // length 프로퍼티에 영향을 주지 않는다. 즉, 희소 배열이 된다.
  console.log(arr.length); // 3
}

{
  const arr = [1, 2, 3];

  // Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
  // arr[1]부터 1개의 요소 제거
  arr.splice(1, 1);
  console.log(arr); // [ 1, 3 ]
  console.log(arr.length); // 2
}

{
  const arr = [1];

  // push 메서드는 원본 배열(arr)을 직접 변경한다.
  arr.push(2);
  console.log(arr); // [ 1, 2 ]

  // concat 메서드는 원본 배열(arr)을 직접 변경하지 않고 새로운 배열을 생성하여 반환한다.
  const result = arr.concat(3);
  console.log(arr); // [ 1, 2 ]
  console.log(result); // [ 1, 2, 3 ]
}
