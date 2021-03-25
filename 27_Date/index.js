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
