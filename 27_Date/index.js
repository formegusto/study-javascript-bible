process.env.TZ = "Asia/Seoul";

// new Date()
{
  console.log(new Date()); // 2021-03-25T16:39:49.092Z
  console.log(Date()); // Fri Mar 26 2021 01:40:00 GMT+0900 (대한민국 표준시)

  console.log(typeof new Date()); // object
  console.log(typeof Date()); // string
}

// new Date(milliseconds)
{
  console.log(new Date(0)); // 1970-01-01T00:00:00.000Z

  // 86,400,000ms 는 1day를 의미한다.
  // 1s = 1,000ms
  // 1m = 60,000ms
  // 1h = 3,600,000ms
  // 1d = 86,400,000ms
  console.log(new Date(86400000)); // 1970-01-02T00:00:00.000Z
}

// new Date(dateString)
{
  console.log(new Date("May 26, 2020 10:00:00")); // 2020-05-26T01:00:00.000Z
  console.log(new Date("2020/03/26/10:00:00")); // 2020-03-26T01:00:00.000Z
}

// new Date(year, month, [,day, hour, minute, second, millisecond])
{
  console.log(new Date(2020, 2).toLocaleString()); // 2020. 3. 1. 오전 12:00:00
  console.log(new Date(2020, 2, 26, 10, 00, 00, 0).toLocaleString()); // 2020. 3. 26. 오전 10:00:00
  console.log(new Date("2020/3/26/10:00:00:00").toLocaleString()); //  2020. 3. 26. 오전 10:00:00
}

{
  console.log(Date.now()); // 1616864650498
}

{
  console.log(Date.parse("Jan 2, 1970 00:00:00 UTC")); // 86400000

  console.log(Date.parse("Jan 2, 1970 09:00:00")); // 86400000

  console.log(Date.parse("1970/01/02/09:00:00")); // 86400000
}

{
  console.log(Date.UTC(1970, 0, 2)); // 86400000
}

{
  console.log(new Date("2020/07/24").getFullYear()); // 2020
}

{
  const today = new Date();

  // 년도 지정
  today.setFullYear(2019);
  console.log(today.getFullYear()); // 2019

  // 년도/월/일 지정
  today.setFullYear(2015, 0, 1);
  console.log(today.toLocaleString("KST")); // 2015. 1. 1. 오전 2:12:42
}

{
  console.log(new Date("2020/07/24").getMonth()); // 6
}

{
  const today = new Date();

  // 년도 지정
  today.setMonth(9);
  console.log(today.getMonth()); // 9

  // 년도/월/일 지정
  today.setMonth(9, 1);
  console.log(today.toLocaleString("KST")); // 2021. 8. 1. 오전 2:15:34
}

// Date.prototype.getTime
{
  console.log(new Date("2020/07/24/12:30").getTime()); // 1595561400000
}

// Date.prototype.setTime
{
  const today = new Date("2020/07/24/12:30");

  today.setTime("86400000");
  console.log(today); // 1970-01-02T00:00:00.000Z
}

// Date.prototype.getTimezoneOffset
{
  const today = new Date();

  console.log(today.getTimezoneOffset() / 60); // -9
}

// 시게 예제
{
  (function printNow() {
    const today = new Date();

    const dayNames = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];

    const day = dayNames[today.getDay()];

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    const ampm = hour >= 12 ? "pm" : "am";

    // 12시간 단위 표현
    hour %= 12;
    hour = hour || 12;

    // 10 미만인 분과 초를 2자리로 변경
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second}${ampm}`;
    console.log(now);

    // 계속해서 반복 호출됨
    setTimeout(printNow, 1000);
  })();
}
