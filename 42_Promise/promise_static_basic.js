const resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log); // [ 1, 2, 3 ]

/*
    eq.
const resolvedPromise = new Promise((resolve) => resolve([1, 2, 3]));
resolvedPromise.then(console.log);
*/

const rejectedPromise = Promise.reject(new Error("Error!"));
rejectedPromise.catch(console.error);

/*
    eq.
const rejectedPromise = new Promise((_, reject) => reject(new Error("Error")));
rejectedPromise.catch(console.error);
*/
