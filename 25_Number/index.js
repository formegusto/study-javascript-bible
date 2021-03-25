{
  const numbObj = new Number();
  console.log(numbObj); // [Number: 0]
}

{
  const numObj = new Number(10);
  console.log(numObj); // [Number: 10]
}

{
  // 숫자가 아닌 값을 전달하면 숫자로 강제 변환한다.
  // 하지만 숫자로 변환할 수 없다면 NaN을 내부 슬롯에 할당한
  // Number 래퍼 객체를 생성한다.
  const numObj = new Number("string");
  console.log(numObj); // [Number: NaN]
}

// 명시적 타입 변환
{
  console.log(Number("0")); // 0
  console.log(Number(true)); // 1
}
