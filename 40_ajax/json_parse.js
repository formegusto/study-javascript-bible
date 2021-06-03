const obj = {
  name: "Lee",
  age: 20,
  alive: true,
  hobby: ["traveling", "tennis"],
};
const json = JSON.stringify(obj);
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
/*
    object { name: 'Lee', age: 20, alive: true, hobby: [ 'traveling', 'tennis' ] }
*/

// 배열 요소도 가능하다.
const todos = [
  { id: 1, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "JavaScript", completed: false },
];
const arrJson = JSON.stringify(todos);
const arrParsed = JSON.parse(arrJson);
console.log(typeof arrParsed, arrParsed);
/*
object [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'JavaScript', completed: false }
]
*/
