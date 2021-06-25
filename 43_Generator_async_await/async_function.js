async function foo(n) {
  return n;
}
foo(1).then((v) => console.log(v));

const bar = async function (n) {
  return n;
};
bar(2).then((v) => console.log(v));

const baz = async (n) => n;
baz(3).then((v) => console.log(v));

class MyClass {
  async bar(n) {
    return n;
  }
}
new MyClass().bar(4).then((v) => console.log(v));
/* Promise { 1 } Promise { 2 } Promise { 3 } Promise { 4 } */
console.log(foo(1), bar(2), baz(3), new MyClass().bar(4));
