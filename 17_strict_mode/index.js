// "use strict";

// function foo() {
//   x = 10; // ReferenceError: x is not defined
// }
// foo();

// console.log(x);

// function foo() {
//   "use strict";

//   x = 10; // ReferenceError: x is not defined
// }
// foo();

// console.log(x);

// (function () {
//   // non-strict mode
//   var let = 10;

//   function foo() {
//     "use strict"; // SyntaxError: Unexpected strict mode reserved word

//     let = 20;
//   }

//   foo();
// });

// (function () {
//   "use strict";

//   var x = 1;
//   delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.

//   function foo(a) {
//     delete a; // SyntaxError: Delete of an unqualified identifier in strict mode.
//   }

//   delete foo; // SyntaxError: Delete of an unqualified identifier in strict mode.
// });

// (function () {
//   "use strict";

//   // SyntaxError: Duplicate parameter name not allowed in this context
//   function foo(x, x) {
//     return x + x;
//   }

//   console.log(foo(1, 2));
// });

// (function () {
//   "use strict";

//   //  SyntaxError: Strict mode code may not include a with statement
//   with ({ x: 1 }) {
//     console.log(X);
//   }
// });

(function () {
  "use strict";

  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // Foo
  }
  new Foo();
})();

(function (a) {
  "use strict";
  // 매개변수에 값 재할당
  a = 2;

  console.log(a); // 2
  console.log(arguments); // { '0': 1 }
})(1);
