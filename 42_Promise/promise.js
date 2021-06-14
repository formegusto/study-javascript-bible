new Promise((resolve) => resolve("fulfilled")).then(
  (v) => console.log(v),
  (e) => console.error(e) // fulfilled
);

new Promise((_, reject) => reject("rejected")).then(
  (v) => console.log(v),
  (e) => console.error(e) // rejected
);
