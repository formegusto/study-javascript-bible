// 1. basic
{
  const tel = "010-1234-5678";
  const tel2 = "010-1234-567팔";

  // 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
  const regExp = /^\d{3}-\d{4}-\d{4}$/;
  console.log(regExp.test(tel)); // true
  console.log(regExp.test(tel2)); // false
}

// 2. pattern is
{
  const target = "Is this all there is?";

  // 패턴: is
  // 플래그: i -> 대소문자를 구별하지 않고, 검색한다.
  const regexp = /is/i;

  // test 메서드는 target 문자열에 대해 정규 표현식
  // regexp의 패턴을 검색하여 매칭 결과를
  // 불리언으로 반환한다.
  console.log(regexp.test(target)); // true
}

// 3. RegExp Contructor
{
  const target = "Is this all there is?";

  //   const regexp = new RegExp(/is/i); ES6
  //   const regexp = new RegExp(/is/, "i");
  const regexp = new RegExp("is", "i");

  console.log(regexp.test(target)); // true
}

// 4. RegExp.prototype.exec
{
  const target = "Is this all there is?";
  const regexp = /is/;

  console.log(regexp.exec(target)); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
}

// 5. String.prototype.match
{
  const target = "Is this all there is?";
  const regexp = /is/g;

  console.log(target.match(regexp)); //  [ 'is', 'is' ]
}

// 6. flag
{
  const target = "Is this all there is?";

  // 플래그를 주지 않으면 대소문자를 구별해서 패턴 검색을 한다.
  // 후에 패턴 검색 매칭 대상이 1개 이상 존재해도 첫 번째 매칭한 대상만 검색하고 종료
  console.log(target.match(/is/));
  // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

  // 대소문자 구별 안함
  console.log(target.match(/is/i));
  // [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

  // 전역 탐색
  console.log(target.match(/is/g));
  // [ 'is', 'is' ]

  // 대소문자를 구별하지 않으면서
  // 전역탐색
  console.log(target.match(/is/gi));
  // [ 'Is', 'is', 'is' ]
}

// 7. pattern - 문자열 검색
{
  const target = "Is this all there is?";

  const regExp = /is/;

  console.log(regExp.exec(target));
}

// 8. pattern - 임의의 문자열 검색
{
  const target = "Is this all there is?";

  // 공백 넣어주어야 한다.
  const regExp = / ... /g;
  console.log(target.match(regExp));

  //   [
  //     ' all ',
  //     index: 7,
  //     input: 'Is this all there is?',
  //     groups: undefined
  //   ]
}

// 9. pattern - 반복 검색
{
  const target = "A AA B BB Aa Bb AAA";

  // 'A'가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다.
  const regExp1 = /A{1,2}/g;
  console.log(target.match(regExp1)); // [ 'A', 'AA', 'A', 'AA', 'A' ]

  // n은 앞선 패턴이 n번 반복되는 문자열을 의미한다. 즉, {n}은 {n,n}과 같다.
  // 'A'가 두번 반복되는 문자열을 전역 검색한다.
  const regExp2 = /A{2}/g;
  console.log(target.match(regExp2)); // [ 'AA', 'AA' ]

  // 'A'가 최소 두번 이상 반복되는 문자열을 전역 검색
  const regExp3 = /A{2,}/g;
  console.log(target.match(regExp3)); // [ 'AA', 'AAA' ]

  // + 는 앞선 패턴이 최소 한번 이상 반복되는 문자열을 의미한다.
  const regExp4 = /A+/g;
  console.log(target.match(regExp4)); // [ 'A', 'AA', 'A', 'AAA' ]

  const target2 = "color colour";
  // ? 는 앞선 패턴이 최대 한 번(0번 포함)
  // 이상 반복되는 문자열을 의미한다.
  // u가 한번이상, 혹은 0개 반복되고, 다음이 r로 이어지는 문자열 매치
  const regExp5 = /colou?r/g;
  console.log(target2.match(regExp5));
}

// 10. pattern - OR 검색
{
  const target = "A AA B BB Aa Bb AAA";

  // 'A' 또는 'B'를 전역 검색한다.
  const regExp = /A|B/g;
  console.log(target.match(regExp));
  //   [
  //     'A', 'A', 'A', 'B',
  //     'B', 'B', 'A', 'B',
  //     'A', 'A', 'A'
  //   ]
}

// 11. pattern - OR 검색 (+)
{
  const target = "A AA B BB Aa Bb AAA";

  // 'A' 또는 'B'를 전역 검색한다.
  const regExp = /A+|B+/g;
  console.log(target.match(regExp));
  //   [
  //     'A',   'AA',
  //     'B',   'BB',
  //     'A',   'B',
  //     'AAA'
  //   ]
}

// 11. pattern - OR 검색 ([] 1)
{
  const target = "A AA B BB Aa Bb AAA";

  // 'A' 또는 'B'를 전역 검색한다.
  // const regExp = /A+|B+/g;
  const regExp = /[AB]+/g;
  console.log(target.match(regExp));
  //   [
  //     'A',   'AA',
  //     'B',   'BB',
  //     'A',   'B',
  //     'AAA'
  //   ]
}

// 12. pattern - OR 검색 ([] 2)
{
  const target = "A AA BB ZZ Aa Bb";

  // 'A' ~ 'Z' 가 한 번 이상 반복되는 문자열
  const regExp = /[A-Z]+/g;
  console.log(target.match(regExp));
  // [ 'A', 'AA', 'BB', 'ZZ', 'A', 'B' ]
}

// 13. pattern - OR 검색 ([] 3)
{
  const target = "A AA BB ZZ Aa Bb";

  // 'A' ~ 'Z', 'a' ~ 'z' 가 한 번 이상 반복되는 문자열
  const regExp = /[A-Za-b]+/g;
  console.log(target.match(regExp));
  // [ 'A', 'AA', 'BB', 'ZZ', 'Aa', 'Bb' ]
}

// 14. pattern - OR 검색 ([] 4)
{
  const target = "A AA 12,345";

  // '0' ~ '9', , 가 한 번 이상 반복되는 문자열
  const regExp = /[0-9,]+/g;
  console.log(target.match(regExp));
  // [ '12,345' ]
}

// 14. pattern - OR 검색 (\d)
{
  const target = "A AA 12,345";

  // '0' ~ '9', , 가 한 번 이상 반복되는 문자열
  const regExp = /[\d,]+/g;
  console.log(target.match(regExp));
  // [ '12,345' ]
}

// 14. pattern - OR 검색 (\D)
{
  const target = "A AA 12,345";

  // 숫자가 아닌, 문자 또는 , 가 한번 이상 반복
  const regExp = /[\D,]+/g;
  console.log(target.match(regExp));
  // [ 'A AA ', ',' ]
}

// 15. pattern - OR 검색 (\w)
{
  const target = "Aa Bb 12,345 _$%&";

  // 알파벳, 숫자, 언더스코어, ','가 한번 이상 반복되는 문자열을 전역 검색한다.
  let regExp = /[\w,]+/g;
  console.log(target.match(regExp)); // [ 'Aa', 'Bb', '12,345', '_' ]
}

// 15. pattern - OR 검색 (\W)
{
  const target = "Aa Bb 12,345 _$%&";

  // 알파벳, 숫자, 언더스코어, ','가 아닌, 문자열이
  // 한번 이상 반복되는 문자열을 전역 검색한다.
  let regExp = /[\W,]+/g;
  console.log(target.match(regExp)); // [ ' ', ' ', ',', ' ', '$%&' ]
}

// 16. pattern - OR 검색 (^)
{
  const target = "Aa Bb 12,345 _$%&";

  // 숫자를 제외한 문자열을 전역 검색한다.
  let regExp = /[^0-9]+/g;
  console.log(target.match(regExp)); // [ 'Aa Bb ', ',', ' _$%&' ]
}

// 17. pattern - OR 검색 (^)
{
  const target = "https://poiemaweb.com";

  // 'https'로 시작하는지 검사한다.
  const regExp = /^https/;
  console.log(regExp.test(target)); // true
}

// 18. pattern - OR 검색 ($)
{
  const target = "https://poiemaweb.com";

  // 'com' 으로 끝나는 지 검색한다.
  const regExp = /com$/;
  console.log(regExp.test(target)); // true
}

// 19. 특정 단어로 시작하는지 검사
{
  const target = "https://poiemaweb.com";

  // http
  // s가 한번, 혹은 0
  // :
  // /
  // / -> http:// 혹은 https:// 를 탐색하는 정규 표현식
  const regExp = /https?:\/\//g;
  console.log(regExp.test(target)); // true
}

// 20. 특정 단어로 끝나는지 검사
{
  const fileName = "index.html";

  const regExp = /html$/g;
  console.log(regExp.test(fileName)); // true
}

// 21. 숫자로만 이루어진 문자열인지 검사
{
  const targetNum = "12345";
  const targetStr = "1,2,34,5";

  // ^ => 시작이
  // \d => 숫자인가?
  // + => 그리고 한 개 이상 반복되는가
  // $ => 끝
  // 처음부터 끝까지 숫자인가?
  const regExp = /^\d+$/g;
  console.log(regExp.test(targetNum)); // true
  console.log(regExp.test(targetStr)); // false
}

// 22. 하나 이상의 공백으로 시작하는지 검사
{
  const target = " Hi!";
  const target2 = "Hi!";

  // 한 개 이상의 공백으로 시작하는가?
  const regExp = /^[\s]+/;
  console.log(regExp.test(target)); // true
  console.log(regExp.test(target2)); // false
}

// 23. 아이디로 사용가능한지 검사
{
  const id = "abc1234";
  const notId = "abc 1234";
  const notId2 = "ab$$12";

  const regExp = /^[A-Za-z0-9]{4,10}$/;
  console.log(regExp.test(id)); // true
  console.log(regExp.test(notId)); // false
  console.log(regExp.test(notId2)); // false
}

// 24. 메일 주소 형식에 맞는지 검사
{
  const email = "formegusto@gmail.com";
  const emailChk = "_formegusto@gmail.com";
  const emailChk_2 = "formegustogmail.com";
  const emailChk_3 = "formegusto@gmailcom";
  const emailChk_4 = "formegusto@gmail.comdd";

  // ^[A-Za-z0-9] : 시작 숫자나 문자열
  // ([-_\.]?[A-Za-z0-9]) : 후에 - _ . 을 포함할 수 있고,
  // * 없어도 문자열로 구성할 수 있는 그런 친구 (* 는 0회 이상)

  // @ 중간에 @포함 반드시
  // [0-9a-zA-Z] : @ 다음 시작은 반드시 문자열
  // ([-_\.]?[0-9a-zA-Z])* : 그 다음으로는 뭔가 와도 ㄱㅊ
  // . 하지만 중간에 .은 포함
  // [a-zA-Z]{2,3}$ : 끝자리는 최소 2 최대 3 자리로 이루어진 문자
  const regExp = /^[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  console.log(regExp.test(email)); // true
  console.log(regExp.test(emailChk)); // false : 첫 시작 문자를 안 지킴
  console.log(regExp.test(emailChk_2)); // false : 중간에 @ 빼먹음
  console.log(regExp.test(emailChk_3)); // false : 중간에 . 빼먹음
  console.log(regExp.test(emailChk_4)); // false : 뒤에 자릿수 안지켜줌
}

// 25. 핸드폰 번호 형식에 맞는지 검사
{
  const cellphone = "010-1234-5343";

  const regExp = /^\d{3}-\d{3,4}-\d{4}$/;
  console.log(regExp.test(cellphone)); // true
}

// 26. 특수 문자 포함 여부 검사
{
  let target = "abc#123";

  const regExp = /[^a-zA-z0-9]/gi;
  console.log(regExp.test(target)); // true

  // 참고로 특수문자를 제외할 때는 String.prortype.replace를 사용한다.
  target = target.replace(regExp, "");
  console.log(target); // abc123
}
