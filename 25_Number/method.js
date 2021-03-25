// Number.isFinite
{
  // 인수가 정상적인 유한수이면 true를 반환한다.
  console.log(Number.isFinite(0));
  console.log(Number.isFinite(Number.MAX_VALUE));
  console.log(Number.isFinite(Number.MIN_VALUE));

  // 인수가 무한수이면 false를 반환한다.
  console.log(Number.isFinite(Infinity));
  console.log(Number.isFinite(-Infinity));

  // NaN은 무조건 false를 반환한다.
  console.log(Number.isFinite(NaN));

  // 빌트인 전역 함수 isFinite와 차이가 있다.
  // isFinite 함수는 암묵적 타입 변환을 하지만
  // Number.isFinite는 암묵적 타입 변환을 하지 않아,
  // 숫자가 아닌 값들은 무조건 false다.
  console.log(Number.isFinite(null)); // false
  console.log(isFinite(null)); // true
  console.log(Number.isFinite("1")); // false
  console.log(isFinite("1")); // true
}

// Number.isInteger
{
  // 인수가 정수이면 무조건 true를 반환한다.
  console.log(Number.isInteger(0));
  console.log(Number.isInteger(1));
  console.log(Number.isInteger(-10));

  // 실수 === false
  console.log(Number.isInteger(0.5));
  // 암묵적 타입 변환 X, === false
  console.log(Number.isInteger("1"));
  console.log(Number.isInteger(true));
  // Infinity === false
  console.log(Number.isInteger(Infinity));
  console.log(Number.isInteger(-Infinity));
}

// Number.isNaN
{
  console.log(Number.isNaN(NaN)); // true

  // 빌트인 전역 함수 isNaN과 차이가 있다.
  // 역시나 암묵적 변환을 하느냐 안하느냐의 차이다.
  // 역시나 안하는 쪽은 Number.isNaN 이다.
  // 숫자가 아닌 값들은 무조건 false다.
  console.log(isNaN(undefined)); // true
  console.log(Number.isNaN(undefined)); // false
}

// Number.isSafeInteger
{
  // true case
  console.log(Number.isSafeInteger(0));
  console.log(Number.isSafeInteger(1000000000000000));

  // false case
  console.log(Number.isSafeInteger(10000000000000001));
  console.log(Number.isSafeInteger(0.5));
  console.log(Number.isSafeInteger("123"));
  console.log(Number.isSafeInteger(false));
  console.log(Number.isSafeInteger(Infinity));
}

// Number.protoype.toExponential
{
  console.log((77.1234).toExponential()); // 7.71234e+1
  console.log((77.1234).toExponential(1)); // 7.7e+1
  console.log((77.1234).toExponential(2)); // 7.71e+1

  // 숫자 뒤의 .은 의미가 모호하다. 부동 소수점 숫자의 소수 구분 기호일 수도 있고,
  // 객체 프로퍼티에 접근하기 위한 프로퍼티 접근 연산자일 수도 있다.
  // 자바스크립트 엔진은 숫자 뒤의 .을 부동 소수점 숫자의 소수 구분 기호로 해석한다.
  // 77은 래퍼객체다. 즉 뒤에 숫자가 아니라 에러다.
  //   77.toExponential(); // SyntaxError: Invalid or unexpected token

  // 하지만 소수 뒤에 오면 명백히 프로퍼티 접근 연산자로 해석한다.
  // 하지만 그룹 연산자 사용을 권장한다.
  (77.1234).toExponential();
  (77).toExponential();

  // 자바스크립트 숫자는 정수 부분과 소수 부분 사이에 공백을 포함할 수 없다.
  // 따라서 숫자 뒤의 . 뒤에 공백이 오면 프로퍼티 접근 연산자로 해석한다.
  (77).toExponential();
}

// Number.prototype.toFixed
{
  console.log((12345.6789).toFixed()); // 12346
  console.log((12345.6789).toFixed(1)); // 12346.7
  console.log((12345.6789).toFixed(2)); // 12346.68
  console.log((12345.6789).toFixed(3)); // 12346.679
}

// Number.prototype.toPrecision
{
  console.log((12345.6789).toPrecision()); // 12345.6789
  console.log((12345.6789).toPrecision(1)); // 1e+4
  console.log((12345.6789).toPrecision(2)); // 1.2e+4
  console.log((12345.6789).toPrecision(3)); // 1.23e+4
}

// Number.prototype.toString
{
  console.log((10).toString()); // 10
  console.log((16).toString(16)); // 10
  console.log((8).toString(8)); // 10
  console.log((2).toString(2)); // 10
}
