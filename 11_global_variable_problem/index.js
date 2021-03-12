var x = "global";

function foo() {
  console.log(x); // undefined
  var x = "local";
}

foo();
console.log(x); // global

// 전역 변수의 사용을 억제하는 방법
// 1. 즉시 실행 함수
(function () {
  var foo = 100;
})();

// 2. 네임스페이스 객체
var MYAPP = {}; // 전역 네임스페이스 객체
MYAPP.name = "Lee";
MYAPP.person = {
  name: "Lee",
  address: "Seoul",
};
console.log(MYAPP);

// 3. module pattern
var Counter = (function () {
  // private 변수
  var num = 0;

  // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

console.log(Counter.num); // undefined
console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
