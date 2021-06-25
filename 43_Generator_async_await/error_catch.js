/*
try {
  setTimeout(() => {
    throw new Error("Error!");
  }, 1000);
} catch (e) {
  // 에러를 캐치하지 못한다.
  console.error("캐치한 에러", e);
}
*/

const fetch = require("node-fetch");
{
  const foo = async () => {
    try {
      const wrongUrl = "https://wrong.url";
      const response = await fetch(wrongUrl);
      const data = await response.json();

      console.log(data);
    } catch (e) {
      console.error("캐치한 에러", e);
    }
  };
  foo();
}
{
  const foo = async () => {
    const wrongUrl = "https://wrong.url";
    const response = await fetch(wrongUrl);
    const data = await response.json();
  };
  foo()
    .then(console.log)
    .catch((e) => console.error("캐치한 에러", e));
}
