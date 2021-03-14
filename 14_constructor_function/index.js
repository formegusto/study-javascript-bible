{
  // 빈 객체 생성
  const person = new Object();

  person.name = "No Tae Heon";
  person.sayHello = function () {
    console.log(`Hi! My Name is ${this.name}`);
  };

  person.sayHello();
}

{
  const strObj = new String("test");
  console.log(typeof strObj); // object
  console.log(strObj); // [String: 'test']

  const numObj = new Number(1);
  console.log(typeof numObj);
  console.log(numObj);

  const boolObj = new Boolean(true);
  console.log(typeof boolObj);
  console.log(boolObj);

  const func = new Function("x", "return x * x");
  console.log(typeof func);
  console.log(func(2));

  const arr = new Array(1, 2, 3);
  console.log(typeof arr);
  console.log(arr);

  // RegExp 객체(정규 표현식) 생성
  const regExp = new RegExp(/ab+/i);
  console.log(typeof regExp);
  console.log(regExp);

  // Date 생성자 함수에 의한 Date 객체 생성
  const date = new Date();
  console.log(typeof date);
  console.log(date);
}
