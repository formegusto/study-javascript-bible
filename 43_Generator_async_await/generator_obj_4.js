function* getFunc() {
  const x = yield 1;
  const y = yield x + 10;

  return x + y;
}
const generator = getFunc(0);
let res = generator.next();
console.log(res); /* { value: 1, done: false } */

res = generator.next(30);
console.log(res); /* { value: 40, done: false } */

res = generator.next(50);
console.log(res); /* { value: 80, done: true } */
