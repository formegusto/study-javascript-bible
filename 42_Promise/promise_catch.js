/*
new Promise((_, reject) => reject(new Error("rejected"))).catch((e) =>
  console.log(e)
); // Error: rejected
*/

new Promise((_, reject) => reject(new Error("rejected"))).then(undefined, (e) =>
  console.log(e)
); // Error: rejected
