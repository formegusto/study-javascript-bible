// 블록문
{
  var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
  x++;
}

// 함수 선언문
function sum(a, b) {
  return a + b;
}

var x = 2;
var result;

if (x % 2) {
  result = "홀수";
} else {
  result = "짝수";
}
console.log(result); // 짝수

// 대부분의 if ...else 문은 삼항 조건 연산자로 바꿔 쓸 수 있다.
console.log(x % 2 ? "홀수" : "짝수");

var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "July";
    break;
  case 9:
    monthName = "August";
    break;
  case 10:
    monthName = "September";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
}

console.log(monthName);

var year = 2004;
var month = 2;
var days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    console.log("Invalid month");
}
console.log(days);

for (var i = 0; i < 2; i++) {
  console.log(i);
}

var count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

var count = 0;
do {
  console.log(count);
  count++;
} while (count < 3);

// label statement 탈출 예시
foo: {
  console.log(1);
  break foo;
  console.log(2);
}
console.log("Done!");

outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}
console.log("Done!");

var string = "Hello World!";
var search = "l";
var index;
for (index = 0; index < string.length; index++)
  if (string[index] === search) break;
console.log(index);

var count_L = 0;
for (index = 0; index < string.length; index++) {
  if (string[index] !== search) continue;
  count_L++;
}
console.log(count_L);
