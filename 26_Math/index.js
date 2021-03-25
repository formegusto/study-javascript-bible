// Math.PI
{
  console.log(Math.PI); // 3.141592653589793
}

// Math.abs
{
  console.log(Math.abs(-1)); // 1
  console.log(Math.abs("-1")); // 1
  console.log(Math.abs("")); // 0
  console.log(Math.abs([])); // 0
  console.log(Math.abs(null)); // 0
  console.log(Math.abs(undefined)); // NaN
  console.log(Math.abs({})); // NaN
  console.log(Math.abs("string")); // NaN
  console.log(Math.abs()); // NaN
}

// Math.round
{
  console.log(Math.round(1.4)); // 1
  console.log(Math.round(1.6)); // 2
  console.log(Math.round(-1.4)); // -1
  console.log(Math.round(-1.6)); // -2
  console.log(Math.round(1)); // 1
  console.log(Math.round()); // NaN
}

// Math.ceil
{
  console.log(Math.ceil(1.4)); // 2
  console.log(Math.ceil(1.6)); // 2
  console.log(Math.ceil(-1.4)); // -1
  console.log(Math.ceil(-1.6)); // -1
  console.log(Math.ceil(1)); // 1
  console.log(Math.ceil()); // NaN
}

// Math.floor
{
  console.log(Math.floor(1.4)); // 1
  console.log(Math.floor(1.6)); // 1
  console.log(Math.floor(-1.4)); // -2
  console.log(Math.floor(-1.6)); // -2
  console.log(Math.floor(1)); // 1
  console.log(Math.floor()); // NaN
}

// Math.sqrt
{
  console.log(Math.sqrt(9)); // 3
  console.log(Math.sqrt(-9)); // NaN
  console.log(Math.sqrt(2)); // 1.4142135623730951
  console.log(Math.sqrt(1)); // 1
  console.log(Math.sqrt(0)); // 0
  console.log(Math.sqrt()); //NaN
}

// Math.random
{
  console.log(Math.random()); // 0.5844459932258381

  // 1 ~ 10 사이의 난수 획득
  // 0 ~ 0.9999999999 * 10 + 1
  const random = Math.floor(Math.random() * 10 + 1);
  console.log(random); // 7 2 3
}

// Math.pow
{
  console.log(Math.pow(2, 8)); // 256
  console.log(Math.pow(2, -1)); // 0.5
  console.log(Math.pow(2)); // NaN

  // ES7에서 도입된 지수 연산자를 사용하면 가독성이 더 좋다.
  console.log(2 ** 8); // 256
  console.log(2 ** -1); // 0.5
}

// Math.max
{
  console.log(Math.max(1)); // 1
  console.log(Math.max(1, 2)); // 2
  console.log(Math.max(1, 2, 3)); // 3
  console.log(Math.max()); // -Infinity

  // 배열 중에서 최대값을 구하려면
  // Function.prototype.apply 메서드를 이영한다.
  console.log(Math.max.apply(null, [1, 2, 3])); // 3
  console.log(Math.max(...[1, 2, 3])); // 3
}

// Math.min
{
  console.log(Math.min(1)); // 1
  console.log(Math.min(1, 2)); // 1
  console.log(Math.min(1, 2, 3)); // 1
  console.log(Math.min()); // Infinity

  // 배열 중에서 최대값을 구하려면
  // Function.prototype.apply 메서드를 이영한다.
  console.log(Math.min.apply(null, [1, 2, 3])); // 1
  console.log(Math.min(...[1, 2, 3])); // 1
}
