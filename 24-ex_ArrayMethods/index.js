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
