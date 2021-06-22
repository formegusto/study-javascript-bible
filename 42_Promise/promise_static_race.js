Promise.race([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => reject(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
])
  .then(console.log) // 3
  .catch(console.catch);
