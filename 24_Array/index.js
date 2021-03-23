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
