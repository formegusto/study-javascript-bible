// Array.prototype.sort (asc)
{
  const fruits = ["Banana", "Orange", "Apple"];

  // 오름차순 (ascending) 정렬
  fruits.sort();
  console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

  // 한글도 적용된다.
  const fruitsKor = ["바나나", "오렌지", "사과"];
  fruitsKor.sort();
  console.log(fruitsKor); //  '바나나', '사과', '오렌지' ]

  // Array.prototype.sort + reverse (desc)
  fruits.reverse();
  console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]
}

// Array.prototype.sort (problem number)
{
  console.log([40, 100, 1, 5, 2, 25, 10].sort());
  /*
    [
        1, 10, 100, 2,
        25, 40,   5
    ]
    */
  console.log(["40", "100", "1", "5", "2", "25", "10"].sort());
  /*
  [
    '1',   '10',
    '100', '2',
    '25',  '40',
    '5
  ]
  */
}

// Array.prototype.sort (비교함수)
{
  const points = [40, 100, 1, 5, 2, 25, 10];

  // rtn < 0
  points.sort((a, b) => a - b);
  console.log(points);
  /*
  [
    1,  2,   5, 10,
   25, 40, 100
  ]
  */
  // 최소/최대값 취득
  console.log("min :", points[0], ", max :", points[points.length - 1]); // min : 1 , max : 100

  // rtn > 0
  points.sort((a, b) => b - a);
  console.log(points);
  /*
  [
    100, 40, 25, 10,
      5,  2,  1
  ]
  */
  // 최소/최대값 취득
  console.log("min :", points[points.length - 1], ", max :", points[0]); // min : 1 , max : 100
}

// Array.prototype.sort (Object Array Sort)
{
  const todos = [
    { id: 4, content: "JavaScript" },
    { id: 1, content: "HTML" },
    { id: 2, content: "CSS" },
  ];

  const compare = (key) => (a, b) =>
    a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;

  todos.sort(compare("id"));
  console.log(todos);
  /*
  [
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' },
    { id: 4, content: 'JavaScript' }
  ]
  */

  todos.sort(compare("content"));
  console.log(todos);
  /*
  [
    { id: 2, content: 'CSS' },
    { id: 1, content: 'HTML' },
    { id: 4, content: 'JavaScript' }
  ]
  */
}

// Array.prototype.forEach
{
  const numbers = [1, 2, 3];
  const pows = [];

  numbers.forEach((item) => pows.push(item ** 2));
  console.log(pows); // [ 1, 4, 9 ]

  // forEach 메서드의 콜백 함수는 forEach 메서드를 호출한 배열의 요소값과 인덱스,
  // 그리고 forEach를 호출한 배열 그 자체 (this)를 순차적으로 전달받을 수 있다.
  numbers.forEach((item, index, arr) => {
    console.log(
      `요소값 : ${item}, 인덱스 : ${index}, this: ${JSON.stringify(arr)}`
    );
  });
  /*
    요소값 : 1, 인덱스 : 0, this: [1,2,3]
    요소값 : 2, 인덱스 : 1, this: [1,2,3]
    요소값 : 3, 인덱스 : 2, this: [1,2,3] 
  */

  numbers.forEach((item, index, arr) => {
    arr[index] = arr[index] ** 2;
  });
  console.log(numbers); // [ 1, 4, 9 ]
}

// Array.prototype.forEach (with this binding)
{
  class Numbers {
    numberArray = [];

    multiply(arr) {
      // 클래스 내부에서의 일반 함수 호출은
      // strict mode 적용에 의해 undefined를 반환한다.
      // 1. ES6 화살표 함수
      arr.forEach((item) => {
        this.numberArray.push(item * item);
      });

      // 2. this 바인딩
      arr.forEach(function (item) {
        this.numberArray.push(item * item);
      }, this);
    }
  }

  const numbers = new Numbers();
  numbers.multiply([1, 2, 3]);
  console.log(numbers.numberArray);
}

// Array.prototype.forEach polyfill
{
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
      // 첫 번째 인수가 함수가 아니면 TypeError
      if (typeof callback !== "function")
        throw new TypeError(callback + "is not functions");

      // this가 들어오지 않으면 전역객체와 바인딩
      thisArg = thisArg || globalThis;

      // for문의로 콜백을 순차 실행
      // 첫 번째로 바인딩 할 것,
      // 매개변수로
      // 현재 요소의 값, 인덱스 값, 배열 그 자체 this
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
}

// Array.prototype.forEach (+)
{
  [1, 2, 3].forEach((item) => {
    console.log(item);
    // if (item > 1) break; // SyntaxError: Illegal break statement
  });

  [1, 2, 3].forEach((item) => {
    console.log(item);
    // if (item > 1) continue; // SyntaxError: Illegal continue statement: no surrounding iteration statement
  });

  // 희소 배열
  const arr = [1, , 3];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1, undefined, 3
  }

  arr.forEach((item) => console.log(item)); // 1, 3
}

// Array.prototype.map
{
  const numbers = [1, 4, 9];

  const roots = numbers.map((item) => Math.sqrt(item));
  // == const roots = numbers.map(Math.sqrt);
  console.log(roots); // [ 1, 2, 3 ]
}

// Array.prototype.map((item, index, thisArg) => {})
{
  const numbers = [1, 4, 9];

  numbers.map((item, index, arr) => {
    console.log(
      `요소값 : ${item}, 인덱스 : ${index}, this: ${JSON.stringify(arr)}`
    );
    return item;
  });
  /*
    요소값 : 1, 인덱스 : 0, this: [1,4,9]
    요소값 : 2, 인덱스 : 1, this: [1,4,9]
    요소값 : 3, 인덱스 : 2, this: [1,4,9]
  */
}

// Array.prototype.map (this binding)
{
  class Prefixer {
    constructor(prefix) {
      this.prefix = prefix;
    }

    add(arr) {
      return arr.map(function (item) {
        return `${this.prefix}${item}`;
      }, this);
    }

    addES6(arr) {
      return arr.map((item) => `${this.prefix}${item}`);
    }
  }

  const prefixer = new Prefixer("-webkit-");
  console.log(prefixer.add(["transition", "user-select"])); // [ '-webkit-transition', '-webkit-user-select' ]
  console.log(prefixer.addES6(["transition", "user-select"])); // [ '-webkit-transition', '-webkit-user-select' ]
}

// Array.prototype.filter
{
  const numbers = [1, 2, 3, 4, 5];
  const odds = numbers.filter((item) => item % 2);
  console.log(odds); // [ 1, 3, 5 ]
}

// Array.prototype.filter((item, index, thisArg) => {})
{
  [1, 2, 3].filter((item, index, arr) => {
    console.log(
      `요소값 : ${item}, 인덱스 : ${index}, this: ${JSON.stringify(arr)}`
    );
    return true;
  });
  /*
    요소값 : 1, 인덱스 : 0, this: [1,2,3]
    요소값 : 2, 인덱스 : 1, this: [1,2,3]
    요소값 : 3, 인덱스 : 2, this: [1,2,3]  
  */
}

// Array.prototype.filter (+)
// 자신을 호출한 배열에서 특정 요소를 제거하기 위해 사용할 수도 있다.
{
  class Users {
    constructor() {
      this.users = [
        { id: 1, name: "Lee" },
        { id: 2, name: "Kim" },
      ];
    }

    // 요소 추출
    findById(id) {
      return this.users.filter((user) => user.id === id);
    }

    // 요소 제거
    remove(id) {
      this.users = this.users.filter((user) => user.id !== id);

      return this.users;
    }
  }

  const users = new Users();
  console.log(users.findById(2)); // [ { id: 2, name: 'Kim' } ]

  users.remove(1);
  console.log(users.findById(1)); // []
}

// Array.prototype.reduce
{
  const sum = [1, 2, 3, 4].reduce((pre, cur) => pre + cur, 0);
  console.log(sum); // 10
}

// Array.prototype.reduce 활용 - 1 (평균 구하기)
{
  const values = [1, 2, 3, 4, 5, 6];

  const average = values.reduce(
    (pre, cur, idx, { length }) =>
      length - 1 === idx ? (pre + cur) / length : pre + cur,
    0
  );
  console.log(average); // 3.5
}

// Array.prototype.reduce 활용 - 2 (최대값 구하기)
{
  const values = [1, 3, 6, 4, 5];

  const max = values.reduce((pre, cur) => (pre < cur ? cur : pre), 0);
  console.log(max); // 6

  // Math.max 메서드가 더 직관적이다.
  const mathMax = Math.max(...values);
  console.log(mathMax); // 6
}

// Array.prototype.reduce 활용 - 3 (요소의 중복 횟수 구하기)
{
  const fruits = ["banana", "apple", "orange", "orange", "apple"];

  const count = fruits.reduce((pre, cur) => {
    pre[cur] = pre[cur] + 1 || 1;
    return pre;
  }, {});
  console.log(count); // { banana: 1, apple: 2, orange: 2 }
}

// Array.prototype.reduce 활용 - 4 (중첩 배열 평탄화)
{
  const values = [1, [2, 3], 4, [5, 6]];

  const flatten = values.reduce((pre, cur) => pre.concat(cur), []);
  console.log(flatten); // [ 1, 2, 3, 4, 5, 6 ]

  // 하지만 역시 ES10의 flat가 짱이다.
  const flatten2 = values.flat(Infinity);
  console.log(flatten2);
}

// Array.prototype.reduce 활용 - 5 (중복 요소 제거)
{
  const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

  const result = values.reduce(
    (pre, cur) => (pre.includes(cur) ? pre : pre.concat(cur)),
    []
  );
  console.log(result); // [ 1, 2, 3, 5, 4 ]

  const result2 = values.reduce((pre, cur, i, arr) => {
    if (arr.indexOf(cur) === i) pre.push(cur);
    return pre;
  }, []);
  console.log(result2); // [ 1, 2, 3, 5, 4 ]

  // 하지만 filter 미만잡이다.
  const filterResult = values.filter((item, i, arr) => arr.indexOf(item) === i);
  console.log(filterResult);

  // 중복되지 않는 유일한 값들의 집한인 Set을 사용할 수도 있다.
  // 추천하시는 방법
  const setResult = [...new Set(values)];
  console.log(setResult);
}

// Array.prototype.reduce (initialValue)
{
  const sum = [1, 2, 3, 4, 5].reduce((pre, cur) => pre + cur);
  console.log(sum); // 15

  // 빈 배열은 초기값 없이 사용할 수 없다.
  //   const sum2 = [].reduce((pre, cur) => pre + cur);
  // TypeError: Reduce of empty array with no initial value
  //   console.log(sum2);

  // 객체의 특정 프로퍼티 값을 합산하는 경우에는 반드시 초깃값을 전달해야 한다.
  const products = [
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 300 },
  ];
  // 1번째에는 pre { id: 1, price: 100 }, cur { id: 2, price: 200 },
  // 2번째에는 pre 300, { id: 3, price: 300 },
  // 즉 여기서부터 꼬인다 300은 price라는 프로퍼티가 없다.
  //   const priceSum = products.reduce((pre, cur) => pre.price + cur.price);
  const priceSum = products.reduce((pre, cur) => pre + cur.price, 0);
  console.log(priceSum); // NaN // 600
}

// Array.prototype.some
{
  // 배열 중 10이라는 요소가 하나라도 존재하는 지 확인
  console.log([5, 10, 15].some((item) => item > 10)); // true
  console.log([5, 10, 15].some((item) => item < 0)); // false

  // 배열의 요소 중 'banana'가 1개 이상 존재하는지 확인
  console.log(["apple", "banana", "mango"].some((item) => item === "banana")); // true

  // some 메서드를 호출한 배열이 빈 배열인 경우 언제나 false를 반환
  console.log([].some((item) => item > 3)); // false
}

// Array.prototype.every
{
  console.log([5, 10, 15].every((item) => item > 3)); // true
  console.log([5, 10, 15].every((item) => item > 10)); // false
  console.log([].every((item) => item > 3)); // true
}

// Array.prototype.find
{
  const users = [
    { id: 1, name: "Lee" },
    { id: 2, name: "Kim" },
    { id: 3, name: "Choi" },
    { id: 4, name: "Park" },
  ];

  console.log(users.find((user) => user.id === 3)); // { id: 3, name: 'Choi' }
  // filter와 다른 점은 배열을 반환하는 것이 아니고,
  // 요소를 반환 한다.
}

// Array.prototype.findIndex
{
  const users = [
    { id: 1, name: "Lee" },
    { id: 2, name: "Kim" },
    { id: 3, name: "Choi" },
    { id: 4, name: "Park" },
  ];

  // id 가 2인 요소의 인덱스를 구한다.
  console.log(users.findIndex((user) => user.id === 3)); // 2
  console.log(users.findIndex((user) => user.id === 6)); // -1

  function predicate(key, value) {
    return (item) => item[key] === value;
  }
  console.log(users.findIndex(predicate("id", 3))); // 2
  console.log(users.findIndex(predicate("name", "Kim"))); // 1
}

// Array.prototype.flatMap
{
  const arr = ["hello", "world"];
  const arrMap = arr.map((x) => x.split(""));
  console.log(arrMap);
  //[ [ 'h', 'e', 'l', 'l', 'o' ], [ 'w', 'o', 'r', 'l', 'd' ] ]

  console.log(arrMap.flat());
  console.log(arr.flatMap((x) => x.split("")));
  /*
  [
    'h', 'e', 'l', 'l',
    'o', 'w', 'o', 'r',
    'l', 'd'
  ]
  */

  // 단, flat처럼 인수를 전달하여 평탄화 깊이를 지정할 수는 없다.
  // 1단계만 평탄화 한다. 그래서 flatMap보다는 map과 flat을 조합하는 편이 좋다.
  console.log(arr.flatMap((str, index) => [index, [str, str.length]]));
  // [ 0, [ 'hello', 5 ], 1, [ 'world', 5 ] ]
  const arrMap2 = arr.map((str, index) => [index, [str, str.length]]);
  console.log(arrMap2.flat(Infinity));
  // [ 0, 'hello', 5, 1, 'world', 5 ]
}
