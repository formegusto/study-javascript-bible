// 제너레이터 함수 선언문
function* getDecFunc() {
    yield 1;
}

// 제너레이터 함수 표현식
const getExpFunc = function* () {
    yield 1;
}

// 제너레이터 메서드
const obj = {
    * genObjMethod() {
        yield 1;
    }
}

// 제너레이터 클래스 메서드
class MyClass {
    * getClsMethod() {
        yield 1;
    }
}