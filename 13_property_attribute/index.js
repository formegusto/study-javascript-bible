{
  const o = {};

  console.log(o.__proto__); // [Object: null prototype] {}
}

{
  const person = {
    name: "Lee",
  };
  // 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
  console.log(Object.getOwnPropertyDescriptor(person, "name"));
  // { value: 'Lee', writable: true, enumerable: true, configurable: true }
}

{
  const person = {
    name: "Lee",
  };

  // 프로퍼티 동적 생성
  person.age = 20;

  // 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
  console.log(Object.getOwnPropertyDescriptors(person));
  //   {
  //     name: {
  //       value: 'Lee',
  //       writable: true,
  //       enumerable: true,
  //       configurable: true
  //     },
  //     age: { value: 20, writable: true, enumerable: true, configurable: true }
  //   }
}

{
  const person = {
    //데이터 프로퍼티
    firstName: "Ungmo",
    lastName: "Lee",

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    // setter 함수
    set fullName(name) {
      // 배열 디스트럭처링 할당
      [this.firstName, this.lastName] = name.split(" ");
    },
  };

  // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
  console.log(person.fullName);

  // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
  person.fullName = "Heegun Lee";
  console.log(person.fullName);

  console.log(Object.getOwnPropertyDescriptor(person, "fullName"));
  //   {
  //     get: [Function: get fullName],
  //     set: [Function: set fullName],
  //     enumerable: true,
  //     configurable: true
  //   }

  var descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
  console.log(descriptor.get()); // undefined undefined
  // descriptor 만 받은 객체에는 firstName과 lastName의 대한 정보가 없다.
  descriptor.set("th no");
  console.log(descriptor.get()); // th no
  console.log(descriptor);
  //   {
  //     get: [Function: get fullName],
  //     set: [Function: set fullName],
  //     enumerable: true,
  //     configurable: true,
  //     firstName: 'th',
  //     lastName: 'no'
  //   }
}

{
  // 일반 객체의 __proto__는 접근자 프로퍼티다.
  console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
  //   {
  //     get: [Function: get __proto__],
  //     set: [Function: set __proto__],
  //     enumerable: false,
  //     configurable: true
  //   }

  // 함수 객체의 prototype은 데이터 프로퍼티다.
  console.log(Object.getOwnPropertyDescriptor(function () {}, "prototype"));
  //   { value: {}, writable: true, enumerable: false, configurable: false }
}
