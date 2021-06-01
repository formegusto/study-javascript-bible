function sleep(func, delay) {
  const delayUntil = Date.now() + delay;

  while (Date.now() < delayUntil);

  // delay 만큼 시간이 경과했을 때, 실행된다.
  func();
}

function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

// sleep 함수는 3초 이상 실행된다.
sleep(foo, 3 * 1000);

bar();
