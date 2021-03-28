// 1. String Constructor
{
  const strObj = new String();
  console.log(strObj); // [String: '']
}

// 2. array-like object
{
  const strObj = new String("NoTh");
  console.log(strObj);

  strObj[0] = "X";
  console.log(strObj); // "NoTh"
}

// 3. 타입 변환
{
  let strObj;

  strObj = new String(123);
  console.log(strObj); // "123"

  strObj = new String(null);
  console.log(strObj); // "null"

  strObj = new String(undefined);
  console.log(strObj); // "undefined"

  strObj = new String(NaN);
  console.log(strObj); // "NaN"

  strObj = new String(Infinity);
  console.log(strObj); // "Infinity"
}

// 4. length 프로퍼티
{
  console.log("Hello".length); // 5
  console.log("안녕하세요".length); // 5
}

// 5. String method
{
  const strObj = new String("string");

  console.log(Object.getOwnPropertyDescriptors(strObj));
  /*
  writable 이 전부 false 이다.
  {
  '0': {
    value: 's',
    writable: false,
    enumerable: true,
    configurable: false
  },
  '1': {
    value: 't',
    writable: false,
    enumerable: true,
    configurable: false
  },
  '2': {
    value: 'r',
    writable: false,
    enumerable: true,
    configurable: false
  },
  '3': {
    value: 'i',
    writable: false,
    enumerable: true,
    configurable: false
  },
  '4': {
    value: 'n',
    writable: false,
    enumerable: true,
    configurable: false
  },
  '5': {
    value: 'g',
    writable: false,
    enumerable: true,
    configurable: false
  },
  length: { value: 6, writable: false, enumerable: false, configurable: false }
  }
  */
}

// String.prototype.indexOf
{
  const str = "Hello World";

  console.log(str.indexOf("l")); // 2
  console.log(str.indexOf("or")); // 7
  console.log(str.indexOf("x")); // -1

  // indexOf 두번째 인수로는 검색을 시작할 인덱스를 전달할 수 있다.
  console.log(str.indexOf("l", 3)); // 3

  // 주로 대상 문자열에 특정 문자열이 존재하는지 확인할 때 사용하는데,
  // ES6에서 도입된 String.prototype.includes 메서드를 사용해서 가독성을 높인다.
  if (str.includes("Hello")) console.log("hello가 있어요!");
}

// String.prototype.search
{
  const str = "Hello World";

  console.log(str.search(/o/)); // 4
  console.log(str.search(/x/)); // -1
}

// String.prototype.includes
{
  const str = "Hello World";

  console.log(str.includes("Hello")); // true
  console.log(str.includes("")); // true
  console.log(str.includes("x")); // false
  console.log(str.includes()); // false
}

// String.prototype.startsWith
{
  const str = "Hello World";

  console.log(str.startsWith("He")); // true
  console.log(str.startsWith("Wor")); // false

  // 두 번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.
  console.log(str.startsWith("Wor", 6)); // true
}

// String.prototype.endsWith
{
  const str = "Hello World";

  console.log(str.endsWith("ld")); // true
  console.log(str.endsWith("lo")); // false

  // 역시나 두 번째 인덱스 문자열의 길이
  console.log(str.endsWith("lo", 5)); // true
}

// String.prototype.charAt
{
  const str = "Hello";

  for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i)); // H e l l o
  }

  // 배열 유사 객체이기 때문에
  // 인덱스를 벗어나면 빈 문자열이 반환된다. (주의. undefined 아님)
  console.log(str.charAt(6)); // ''
}

// String.prototype.substring
{
  const str = "Hello World";

  console.log(str.substring(1, 4)); // ell
  // 두 번째 인수도 생략 가능하다
  console.log(str.substring(1)); // ello World

  // Rule
  // 첫 번째 인수 > 두 번째 인수인 경우 두 인수는 교환된다.
  // 인수 < 0 또는 NaN인 경우 0으로 취급된다.
  // 인수 > 문자열의 길이(str.length)인 경우 인수는 문자열의 길이(str.length)로 취급된다.
  console.log(str.substring(4, 1)); // ell
  console.log(str.substring(-1)); // Hello World
  console.log(str.substring(1, 10000)); // ello World
  console.log(str.substring(10000)); // '' : length로 취급되면 빈 문자열이 나오는 것이 맞다.
}

// String.prototype.substring + String.prototype.indexOf
{
  const str = "Hello World";

  console.log(str.substring(0, str.indexOf(" "))); // Hello
  console.log(str.substring(str.indexOf(" ") + 1, str.length)); // World
}

// String.prototype.slice
{
  const str = "Hello World";

  console.log(str.substring(0, 5)); // Hello
  console.log(str.slice(0, 5)); // Hello

  console.log(str.substring(2)); // llo World
  console.log(str.slice(2)); // llo World

  console.log(str.substring(-5)); // Hello Worlde
  console.log(str.slice(-5)); // World
}

// String.prototype.toUpperCase
{
  const str = "Hello World";

  console.log(str.toUpperCase()); // HELLO WORLD
}

// String.prototype.toLowerCase
{
  const str = "Hello World";

  console.log(str.toLowerCase()); // hello world
}

// String.prototype.trim
{
  const str = "          foo    ";
  console.log(str.trim()); // "foo"

  // 2020년 1월 현재, stage 4에 제안되어 있는
  // String.prototype.trimStart,
  // String.prototype.trimEnd
  // 를 사용하면 대상 문자열 앞 또는 뒤에 공백 문자가 있을 경우
  // 이를 제거한 문자열을 반환해준다.
  console.log(str.trim().length); // 3
  console.log(str.trimStart().length); // 7 "foo    "
  console.log(str.trimEnd()); // ""          foo"

  // 이들은 정규 표현식으로도 가능하다.
  // String.prototype.replace를 사용한다.
  console.log(str.replace(/\s/g, ""));
  console.log(str.replace(/^\s+/g, ""));
  console.log(str.replace(/\s+$/g, ""));
}

// String.prototype.repeat
{
  const str = "abc";

  console.log(str.repeat()); // ""
  console.log(str.repeat(0)); // ""
  console.log(str.repeat(1)); // abc
  console.log(str.repeat(2)); // abcabc
  console.log(str.repeat(2.5)); // abcabc (2.5 => 2)
}

// String.prototype.replace
{
  const str = "Hello World";

  console.log(str.replace("World", "Lee")); // Hello Lee

  // 검색된 문자열이 여럿 존재할 경우 첫 번째로 검색된 문자열만 치환한다.
  const str2 = "Hello World World";
  console.log(str2.replace("World", "No")); // Hello No World

  // 특수한 교체 패턴을 사용할 수 있다.
  // ex) $&는 검색된 문자열을 의미한다.
  // MDN 함수 설명 참고 바란다.
  console.log(str.replace("World", "<strong>$&</string>")); // Hello <strong>World</string>

  // 정규표현식
  console.log(str.replace(/hello/gi, "Bye")); // Bye World
}

// String.prototype.replace exam - camel to snake, snake to camel
{
  const camelToSnake = (camelCase) =>
    camelCase.replace(
      /.[A-Z]/g,
      (match) => match[0] + "_" + match[1].toLowerCase()
    );

  console.log(camelToSnake("helloWorldIamTaeheon")); // hello_world_iam_taeheon

  const snakeToCamel = (snake_case) =>
    snake_case.replace(/_[a-z]/g, (match) => match[1].toUpperCase());
  console.log(snakeToCamel("hello_world_iam_taeheon")); // helloWorldIamTaeheon
}

// String.prototype.split
{
  const str = "How are you doing?";

  console.log(str.split(" ")); // [ 'How', 'are', 'you', 'doing?' ]

  console.log(str.split(/\s/)); // [ 'How', 'are', 'you', 'doing?' ]

  console.log(str.split(""));
  /*
  [
    'H', 'o', 'w', ' ', 'a',
    'r', 'e', ' ', 'y', 'o',
    'u', ' ', 'd', 'o', 'i',
    'n', 'g', '?'
  ]
  */

  console.log(str.split()); // [ 'How are you doing?' ]

  // split 메서드는 배열을 반환한다.
  // 그래서 reverse, join 등 배열 메서드를 사용할 수 있으며,
  // 이를 통해 글자 뒤집기를 쉽게할 수 있따.
  console.log(str.split("").reverse().join("")); // ?gniod uoy era woH
}

// 테스팅
{
  const str = "Hello";

  console.log(Array.prototype.slice.call(str));
}
