// Array.isArray
{
  // true case
  console.log(Array.isArray([]));
  console.log(Array.isArray([1, 2]));
  console.log(Array.isArray(new Array()));

  // false case
  console.log(Array.isArray());
  console.log(Array.isArray({}));
  console.log(Array.isArray(null));
  console.log(Array.isArray(undefined));
  console.log(Array.isArray(1));
  console.log(Array.isArray("Array"));
  console.log(Array.isArray(true));
  console.log(Array.isArray(false));
  // 유사배열객체는 배열이 아니다.
  console.log(Array.isArray({ length: 1, 0: 1 }));
}

// Array.prototype.indexOf
{
  const arr = [1, 2, 2, 3];

  // 중복 값이 있으면 첫번째 요소를 반환
  console.log(arr.indexOf(2)); // 1

  // 값이 검색되지 않으면 -1을 반환
  console.log(arr.indexOf(4)); // -1

  // 두번째 인수는 검색을 시작할 인덱스 번호
  console.log(arr.indexOf(2, 2)); // 2
}

// Array.prototype.indexOf 활용
// 배열에 특정 요소가 존재하는지 확인할 때 유용하다.
{
  const foods = ["apple", "banana", "orange"];

  // orange 요소가 없으면 푸시한다.
  if (foods.indexOf("orange") == -1) {
    foods.push("orange");
  }

  console.log(foods); // [ 'apple', 'banana', 'orange' ]
}

// Array.prototype.includes 활용
{
  const foods = ["apple", "banana", "orange"];

  // orange 요소가 없으면 푸시한다.
  if (!foods.includes("orange")) {
    foods.push("orange");
  }

  console.log(foods); // [ 'apple', 'banana', 'orange' ]
}

// Array.prototype.push
{
  const arr = [1, 2];

  let result = arr.push(3, 4);
  console.log(result); // 4

  console.log(arr); // [ 1, 2, 3, 4 ]
}

// Array.prototype.push < length (성능)
{
  const arr = [1, 2];

  arr[arr.length] = 3;
  console.log(arr); // [ 1, 2, 3 ]
}

// Spread
{
  const arr = [1, 2];
  const newArr = [...arr, 3];
  console.log(newArr); // [ 1, 2, 3 ]
}

// Array.prototype.pop
{
  const arr = [1, 2];

  let result = arr.pop();
  console.log(result); // 2

  // 원본 배열을 직접 변경한다.
  console.log(arr); // [ 1 ]
}

// Stack (Array.prototype.push and pop)
{
  const Stack = (function () {
    function Stack(arr = []) {
      if (!Array.isArray(arr)) return new TypeError(`${arr} Is Not Array!`);
      this.arr = arr;
    }

    Stack.prototype = {
      constructor: Stack,
      push(value) {
        return this.arr.push(value);
      },
      pop(value) {
        return this.arr.pop();
      },
      entries() {
        return [...this.arr];
      },
    };

    return Stack;
  })();

  const stack = new Stack([1, 2]);
  console.log(stack.entries()); // [ 1, 2 ]

  stack.push(3);
  console.log(stack.entries()); // [ 1, 2, 3 ]

  stack.pop();
  console.log(stack.entries()); // [ 1, 2 ]
}

// Stack (Array.prototype.push and pop) class Verison
{
  class Stack {
    // is private
    #arr;

    constructor(arr = []) {
      if (!Array.isArray(arr)) return new TypeError(`${arr} Is Not Array!`);
      this.#arr = arr;
    }

    push(value) {
      return this.#arr.push(value);
    }

    pop(value) {
      return this.#arr.pop();
    }

    entries() {
      return [...this.#arr];
    }
  }

  const stack = new Stack([1, 2]);
  console.log(stack.entries()); // [ 1, 2 ]

  stack.push(3);
  console.log(stack.entries()); // [ 1, 2, 3 ]

  stack.pop();
  console.log(stack.entries()); // [ 1, 2 ]
}

// Array.prototype.unshift
{
  const arr = [1, 2];

  // 선두에 추가하고, length 반환
  let result = arr.unshift(3, 4);
  console.log(result); //

  console.log(arr); // [ 3, 4, 1, 2 ]
}

// 스프레드 문법
{
  const arr = [1, 2];
  const newArr = [3, 4, ...arr];

  console.log(newArr);
}

// Array.prototype.shift
{
  const arr = [1, 2];

  let result = arr.shift();
  console.log(result); // 1

  console.log(arr); // [ 2 ]
}

// Queue (Function Ver.)
{
  const Queue = (function () {
    function Queue(arr = []) {
      if (!Array.isArray(arr)) {
        return new TypeError(`${arr} is not array!!`);
      }
      this.arr = arr;
    }

    Queue.prototype = {
      constructor: Queue,
      enqueue(value) {
        return this.arr.push(value);
      },
      dequeue() {
        return this.arr.shift();
      },
      entries() {
        return [...this.arr];
      },
    };

    return Queue;
  })();

  const queue = new Queue([1, 2]);
  console.log(queue.entries()); // [ 1, 2 ]

  queue.enqueue(3);
  console.log(queue.entries()); // [ 1, 2, 3 ]

  queue.dequeue();
  console.log(queue.entries()); // [ 2, 3 ]
}

// Queue (Class Ver.)
{
  class Queue {
    // is private!
    #arr;

    constructor(arr = []) {
      if (!Array.isArray(arr)) {
        return new TypeError(`${arr} is not array!!`);
      }
      this.#arr = arr;
    }

    enqueue(value) {
      return this.#arr.push(value);
    }
    dequeue() {
      return this.#arr.shift();
    }
    entries() {
      return [...this.#arr];
    }
  }

  const queue = new Queue([1, 2]);
  console.log(queue.entries()); // [ 1, 2 ]

  queue.enqueue(3);
  console.log(queue.entries()); // [ 1, 2, 3 ]

  queue.dequeue();
  console.log(queue.entries()); // [ 2, 3 ]
}

// Array.prototype.concat
{
  const arr1 = [1, 2];
  const arr2 = [3, 4];

  let result = arr1.concat(arr2);
  console.log(result); // [ 1, 2, 3, 4 ]
  // 원본 배열은 변경되지 않는다.
  console.log(arr1); // [ 1, 2 ]

  result = arr1.concat(3);
  console.log(result); // [ 1, 2, 3 ]

  result = arr1.concat([3, 4], 5);
  console.log(result); // [ 1, 2, 3, 4, 5 ]
}

// Array.prototype.concat == push
{
  const pushArr1 = [1, 2];
  pushArr1.push(3, 4);
  console.log(pushArr1); // [ 1, 2, 3, 4 ]

  let result = [1, 2].concat(3, 4);
  console.log(result);
}

// Array.prototype.concat == unshift
{
  const unshiftArr1 = [3, 4];
  unshiftArr1.unshift(1, 2);
  console.log(unshiftArr1); // [ 1, 2, 3, 4 ]

  let result = [1, 2].concat(3, 4);
  console.log(result);
}

// spread
{
  let result = [1, 2].concat([3, 4]);
  console.log(result);

  result = [...[1, 2], ...[3, 4]];
  console.log(result);
}

// Array.prototype.splice
{
  const arr = [1, 2, 3, 4];

  const result = arr.splice(1, 2, 20, 30);

  console.log(result); // [ 2, 3 ]
  console.log(arr); // [ 1, 20, 30, 4 ]
}

// Array.prototype.splice (deleteCount = 0)
{
  const arr = [1, 2, 3, 4];

  const result = arr.splice(1, 0, 100);

  console.log(result); // []
  console.log(arr); // [ 1, 100, 2, 3, 4 ]
}

// Array.prototype.splice (items = undefined)
{
  const arr = [1, 2, 3, 4];

  const result = arr.splice(1, 2);

  console.log(result); // [ 2, 3 ]
  console.log(arr); // [ 1, 2 ]
}

// Array.prototype.splice (deleteCount = undefined)
{
  const arr = [1, 2, 3, 4];

  const result = arr.splice(1);

  console.log(result); // [ 2, 3, 4 ]
  console.log(arr); // [ 1 ]
}

// Array.prototype.splice + Array.prototype.indexOf
{
  const arr = [1, 2, 3, 4];

  function remove(array, item) {
    const removeIdx = array.indexOf(item);

    if (removeIdx !== -1) array.splice(removeIdx, 1);

    return array;
  }

  console.log(remove(arr, 2)); // [ 1, 3, 4 ]
  console.log(remove(arr, 100)); // [ 1, 3, 4 ]
}

// Array.prototype.filter
{
  const arr = [1, 2, 3, 1, 2];

  const remove = (array, item) => array.filter((arrMem) => arrMem !== item);

  console.log(remove(arr, 1)); // [ 2, 3, 2 ]
  console.log(remove(arr, 2)); // [ 1, 3, 1 ]
}

// Array.prototype.slice
{
  const arr = [1, 2, 3];

  console.log(arr.slice(0, 1)); // [ 1 ]
  console.log(arr.slice(1, 2)); // [ 2 ]

  console.log(arr.slice(1)); // [ 2, 3 ]

  console.log(arr.slice()); // [ 1, 2, 3 ]

  console.log(arr.slice(-1)); // [ 3 ]

  // 원본 배열은 변경되지 않는다.
  console.log(arr); // [ 1, 2, 3 ]

  // 복사본은 얕은 복사 (shadow copy)를 통해 생성된다.
  const copy = arr.slice();
  console.log(copy); // [ 1, 2, 3 ]
  console.log(copy === arr); // false

  const todos = [
    { id: 1, content: "HTML", completed: false },
    { id: 2, content: "CSS", completed: true },
    { id: 3, content: "Javascript", completed: false },
  ];

  // 얕은 복사
  // const _todos = [...todos]
  const _todos = todos.slice();

  console.log(_todos === todos); // false : 별개의 객체임을 의미
  console.log(_todos[0] === todos[0]); // true : 하지만 배열 참조 값은 같다 이것은 얕은 복사다.
}

// Array.prototype.slice + array-like object
{
  function sumES5() {
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    return arr.reduce(function (pre, cur) {
      return pre + cur;
    }, 0);
  }
  console.log(sumES5(1, 2, 3));

  // 다른 방법으로 Array.from 메서드를 사용하면 더욱 쉽게할 수 있다.
  // Array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 배열로 반환한다.
  function sumES6() {
    const arr = Array.from(arguments);
    console.log(arr);

    return arr.reduce((pre, cur) => pre + cur, 0);
  }
  console.log(sumES6(1, 2, 3, 4));

  // arguments는 유사배열객체이면서, 이터러블 객체이다.
  // 이터러블 객체는 ES6의 스프레드 문법을 사용하여 간단하게 배열로 변경할 수 있다.
  function sumSpread() {
    const arr = [...arguments];
    console.log(arr);

    return arr.reduce((pre, cur) => pre + cur, 0);
  }
  console.log(sumSpread(1, 2, 3, 4, 5));
}

// Array.prototype.join
{
  const arr = [1, 2, 3, 4];

  console.log(arr.join()); // 1,2,3,4
  console.log(arr.join("")); // 1234
  console.log(arr.join(":")); // 1:2:3:4
}

// Array.prototype.reverse
{
  const arr = [1, 2, 3, 4];
  const result = arr.reverse();

  console.log(arr); // [ 4, 3, 2, 1 ]
  console.log(result); // [ 4, 3, 2, 1 ]
}

// Array.prototype.fill
{
  const arr = [1, 2, 3];

  // 인수로 전달받은 값 0을 배열의 처음부터 끝까지 요소로 채운다.
  arr.fill(0);
  console.log(arr); // [ 0, 0, 0 ]

  // 인수로 전달받은 값 0을 배열의 인덱스 1부터 끝까지 요소로 채운다.
  const arr2 = [1, 2, 3];

  arr2.fill(0, 1);
  console.log(arr2); // [ 1, 0, 0 ]

  // 인수로 전달받은 값 0을 인덱스 1부터 3이전까지 요소로 채운다.
  const arr3 = [1, 2, 3, 4, 5];

  arr3.fill(0, 1, 3);
  console.log(arr3); // [ 1, 0, 0, 4, 5 ]

  // fill 메서드를 활용하여 배열을 생성하면서 특정 값으로 요소를 채울 수 있다.
  const arr4 = new Array(3);
  console.log(arr4); // [ <3 empty items> ]

  const result = arr4.fill(1);
  console.log(arr4); // [ 1, 1, 1 ]
  console.log(result); // [ 1, 1, 1 ]

  // fill 메서드로 요소를 채울 경우 모든 요소를 하나의 값만으로 채울 수밖에 없다는 단점이 있다.
  // 하지만 Array.from 메서드를 사용하면 두 번째 인수로 전달한 콜백 함수를 통해 요소값을 만들면서 배열을 채울 수 있다.
  const sequence = (length = 0) => Array.from({ length }, (_, i) => i);
  console.log(sequence(3)); // [ 0, 1, 2 ]
}

// Array.prototype.includes
{
  const arr = [1, 2, 3];

  console.log(arr.includes(1)); // true
  console.log(arr.includes(100)); // false

  console.log(arr.includes(1, 1)); // false
  console.log(arr.includes(3, -1)); // true

  // indexOf도 -1 반환을 통해 true false 여부를 확인할 수 있다.
  // 하지만 이의 단점은 -1인지 확인하는 조건식이 필요하고,
  // 배열에 NaN이 포함되어 있는지 확인할 수 없다는 문제가 있다.
  console.log([NaN].indexOf(NaN) !== -1); // false : 존재하지 않는다.
  console.log([NaN].includes(NaN)); // true
}

// Array.prototype.flat
{
  console.log([1, [2, 3, 4]].flat()); // [ 1, 2, 3, 4 ]

  // 중첩 배열을 평탄화할 깊이를 인수로 전달할 수 있다.
  // 인수를 생략할 경우 기본값은 1이다.
  console.log([1, [2, [3, [4]]]].flat()); // [ 1, 2, [ 3, [ 4 ] ] ]
  console.log([1, [2, [3, [4]]]].flat(1)); // [ 1, 2, [ 3, [ 4 ] ] ]

  console.log([1, [2, [3, [4]]]].flat(2)); // [ 1, 2, 3, [ 4 ] ]
  console.log([1, [2, [3, [4]]]].flat().flat()); // [ 1, 2, 3, [ 4 ] ]

  // 중첩 배열을 평탄화하기 위한 깊이 값을 Infinity로 지정하여 중첩 배열 모두를 평탄화한다.
  console.log([1, [2, [3, [4]]]].flat(Infinity)); // [ 1, 2, 3, 4 ]
}
