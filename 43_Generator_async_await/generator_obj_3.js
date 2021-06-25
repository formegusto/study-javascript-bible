function* getFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = getFunc();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
*/
