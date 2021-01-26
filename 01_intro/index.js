const arr = [1, 2, 3];

arr.forEach(console.log);
// console.log 매개변수로 arr 이 붙어서
// forEach의 변수인 item, idx, arr 이 콘솔 출력

arr.forEach(alert);
// alert 는 WebAPI 로,
// 브라우저에서만 동작한다.
