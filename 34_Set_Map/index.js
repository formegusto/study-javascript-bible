{
  const set0 = new Set();
  console.log(set0); // Set(0) {}

  const set1 = new Set([1, 2, 3, 3]);
  console.log(set1); // Set(3) { 1, 2, 3 }

  const set2 = new Set("Hello");
  console.log(set2); // Set(4) { 'H', 'e', 'l', 'o' }

  // 이러한 Set의 특성을 이용해서 배열에서 중복된 요소를 제거할 수 있다.
  const uniq = (array) => array.filter((v, i, self) => self.indexOf(v) === i);
  console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]

  const uniqSet = (array) => [...new Set(array)];
  console.log(uniqSet([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
}

{
  const { size } = new Set([1, 2, 3, 3]);
  console.log(size); // 3
}

{
  const set = new Set();
  console.log(set); // Set(0) {}

  set.add(1);
  console.log(set); // Set(1) { 1 }

  // 연속적인 호출이 가능하다. (method chain)
  set.add(2).add(3);
  console.log(set); // Set(3) { 1, 2, 3 }

  // 중복된 요소는 허용하지 않는다.
  set.add(2);
  console.log(set); // Set(3) { 1, 2, 3 }

  // Set은 NaN과 NaN을 같다고 평가할 수 있다.
  // 그래서 중복 추가를 허용하지 않는다.
  // +0과 -0도 같다고 평가한다. 때문에 중복추가를 허용하지 않는다.
  set.add(NaN).add(NaN);
  set.add(0).add(-0);
  console.log(set); // Set(5) { 1, 2, 3, NaN, 0 }
}

{
  const set = new Set();
  set
    .add(1)
    .add("a")
    .add(true)
    .add(undefined)
    .add(null)
    .add({})
    .add([])
    .add(() => {});

  console.log(set);
  /*
  Set(8) {
    1,
    'a',
    true,
    undefined,
    null,
    {},
    [],
    [Function (anonymous)]
  }
  */
}

{
  const set = new Set([1, 2, 3]);

  console.log(set.has(2)); // true
  console.log(set.has(4)); // false
}

// Set.prototype.delete
{
  const set = new Set([1, 2, 3]);

  set.delete(2);
  console.log(set);

  //   set.delete().delete(); // TypeError: set.delete(...).delete is not a function
}

// Set.prototype.clear
{
  const set = new Set([1, 2, 3]);

  set.clear();
  console.log(set); // Set(0) {}
}

// Set.prototype.forEach
{
  const set = new Set([1, 2, 3]);

  set.forEach((v, v2, set) => console.log(v, v2, set));

  /*
    1 1 Set(3) { 1, 2, 3 }
    2 2 Set(3) { 1, 2, 3 }
    3 3 Set(3) { 1, 2, 3 }
  */
}

// Set is Iterable
{
  const set = new Set([1, 2, 3]);

  const iterator = set[Symbol.iterator]();
  console.log(iterator.next());

  for (const value of set) {
    console.log(value);
  }

  console.log([...set]);

  const [one, , three] = set;
  console.log(one, three);
}

// intersection
{
  Set.prototype.intersection = function (set) {
    const result = new Set();

    for (const value of set) if (this.has(value)) result.add(value);

    return result;
  };

  const setA = new Set([1, 2, 3, 4]);
  const setB = new Set([2, 4]);

  console.log(setA.intersection(setB)); // Set(2) { 2, 4 }

  Set.prototype.intersection = function (set) {
    return new Set([...this].filter((v) => set.has(v)));
  };
  console.log(setB.intersection(setA)); // Set(2) { 2, 4 }
}

// union
{
  Set.prototype.union = function (set) {
    const result = new Set(this);

    for (const value of set) result.add(value);

    return result;
  };

  const setA = new Set([1, 2, 3, 4]);
  const setB = new Set([2, 4]);

  console.log(setA.union(setB)); // Set(4) { 1, 2, 3, 4 }

  Set.prototype.union = function (set) {
    return new Set([...this], [...set]);
  };
  console.log(setA.union(setB)); // Set(4) { 1, 2, 3, 4 }
}

// difference
{
  Set.prototype.difference = function (set) {
    const result = new Set(this);

    for (const value of set) result.delete(value);

    return result;
  };

  const setA = new Set([1, 2, 3, 4]);
  const setB = new Set([2, 4]);

  console.log(setA.difference(setB)); // Set(2) { 1, 3 }

  Set.prototype.difference = function (set) {
    return new Set([...this].filter((v) => !set.has(v)));
  };
  console.log(setA.difference(setB)); // Set(2) { 1, 3 }
}

// superset
{
  Set.prototype.isSuperset = function (subset) {
    for (const value of subset) {
      if (!this.has(value)) return false;
    }
    return true;
  };

  const setA = new Set([1, 2, 3, 4]);
  const setB = new Set([2, 4]);

  console.log(setA.isSuperset(setB)); // true
  console.log(setB.isSuperset(setA)); // false

  Set.prototype.isSuperset = function (subset) {
    const supersArr = [...this];
    return [...subset].every((v) => supersArr.includes(v));
  };
  console.log(setA.isSuperset(setB)); // true
  console.log(setB.isSuperset(setA)); // false
}
