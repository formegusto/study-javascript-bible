// 제너레이터 함수
function* getFunc() {
    yield 1;
    yield 2;
    yield 3;
}

// 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
const generator = getFunc();

console.log(Symbol.iterator in generator); // true
console.log('next' in generator); // true