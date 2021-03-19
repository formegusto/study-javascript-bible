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

const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

const innerFunc = outer();
innerFunc(); // 10
