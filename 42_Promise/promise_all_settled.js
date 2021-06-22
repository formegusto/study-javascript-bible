Promise.allSettled([
  new Promise((resolve) => setTimeout(() => resolve(1), 2000)),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Error!")), 1000)
  ),
]).then(console.log);
/*
[
  { status: 'fulfilled', value: 1 },
  {
    status: 'rejected',
    reason: Error: Error!
        at Timeout._onTimeout (/Users/formegusto/Desktop/formegusto/study/study-javascript-bible/42_Promise/promise_all_settled.js:4:29)
        at listOnTimeout (internal/timers.js:554:17)
        at processTimers (internal/timers.js:497:7)
  }
]
*/
