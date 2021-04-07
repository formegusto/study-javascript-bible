// Map
{
  // Map 객체는 Map 생성자 함수로 생성한다.
  const map = new Map();
  console.log(map); // Map(0) {}

  // Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성한다.
  // 이 때 인수로 전달되는 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야 한다.
  const map1 = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
  console.log(map1); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

  //   new Map([1, 2]); // TypeError: Iterator value 1 is not an entry object
}

// Map.prototype.size
{
  const { size } = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]);
  console.log(size); // 2

  // getter 함수만 존재하는 접근자 프로퍼티로,
  // 수정이 불가능하다.
  // 변경 시 에러는 발생하지 않지만, 무시된다.
  console.log(Object.getOwnPropertyDescriptor(Map.prototype, "size"));
  //   {
  //     get: [Function: get size],
  //     set: undefined,
  //     enumerable: false,
  //     configurable: true
  //   }
}

// Map.prototype.set
{
  const map = new Map();
  console.log(map);

  map.set("key1", "value1");
  console.log(map); // Map(1) { 'key1' => 'value1' }

  // map.set은 새로 만들어진 this를 반환하여
  // 메서드 체이닝이 가능해진다.
  map.set("key2", "value2").set("ket3", "value3");
  console.log(map);
  // Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'ket3' => 'value3' }

  // Map 객체이는 중복된 키 값이 존재할 수 없으므로 중복 키로 값을 넣을 경우
  // 덮어씌여진다.
  map.set("key1", "update value1");
  console.log(map);
  //   Map(3) {
  //     'key1' => 'update value1',
  //     'key2' => 'value2',
  //     'ket3' => 'value3'
  //   }

  // NaN과 NaN을 같다고 평가하여 중복 추가를 허용하지 않는다.
  map.set(NaN, "nan1").set(NaN, "nan2");

  // +0과 -0을 같다고 평가하여 중복 추가를 허용하지 않는다.
  map.set(+0, "+0").set(-0, "-0");

  console.log(map);
  //   Map(5) {
  //     (..)
  //     NaN => 'nan2',
  //     0 => '-0'
  //   }
}

// 키에 타입 제한이 없다.
{
  const map = new Map();

  const lee = { name: "Lee " };
  const kim = { name: "Kim" };

  // 객체도 키로 사용할 수 있다.
  map.set(lee, "developer").set(kim, "designer");
  console.log(map);
  /*
  Map(2) {
    { name: 'Lee ' } => 'developer',
    { name: 'Kim' } => 'designer'
  }
  */
}

// Map.prototype.get
{
  const map = new Map();

  const lee = { name: "Lee " };
  const kim = { name: "Kim" };

  map.set(lee, "developer").set(kim, "designer");
  console.log(map.get(lee)); // developer

  // Map.prototype.has
  console.log(map.has(kim)); // true

  // Map.prototype.delete
  console.log(map.delete(lee)); // true
  console.log(map); // Map(1) { { name: 'Kim' } => 'designer' }
}

// Map.prototype.clear
{
  const map = new Map();

  const lee = { name: "Lee " };
  const kim = { name: "Kim" };

  map.set(lee, "developer").set(kim, "designer");

  map.clear();
  console.log(map); // Map(0) {}
}

// Map.prototype.forEach
{
  const map = new Map();

  const lee = { name: "Lee " };
  const kim = { name: "Kim" };

  map.set(lee, "developer").set(kim, "designer");

  map.forEach((v, k, map) => console.log(v, k, map));
}

// Map is iterable
{
  const map = new Map();

  const lee = { name: "Lee " };
  const kim = { name: "Kim" };

  map.set(lee, "developer").set(kim, "designer");

  console.log(Symbol.iterator in map); // true

  // for ... of
  for (const entry of map) {
    console.log(entry);
    /*
        [ { name: 'Lee ' }, 'developer' ]
        [ { name: 'Kim' }, 'designer' ]
    */
  }

  // 스프레드
  console.log([...map]); // [ [ { name: 'Lee ' }, 'developer' ], [ { name: 'Kim' }, 'designer' ] ]

  // 디스트럭처링
  const [a, b] = map;
  console.log(a); // [ { name: 'Lee ' }, 'developer' ]
}

{
  const map = new Map();

  const lee = { name: "Lee " };
  const kim = { name: "Kim" };

  map.set(lee, "developer").set(kim, "designer");

  for (const key of map.keys()) {
    console.log(key);
  }
  /*
    { name: 'Lee ' }
    { name: 'Kim' } 
  */

  for (const value of map.values()) {
    console.log(value);
  }
  /*
    developer
    designer
  */

  for (const entry of map.entries()) {
    console.log(entry);
  }
  /*
    [ { name: 'Lee ' }, 'developer' ]
    [ { name: 'Kim' }, 'designer' ]
   */
}
