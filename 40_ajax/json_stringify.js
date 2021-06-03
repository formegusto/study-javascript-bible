const obj = {
  name: "Lee",
  age: 20,
  alive: true,
  hobby: ["traveling", "tennis"],
};

const json = JSON.stringify(obj);
console.log(typeof json, json);
// tring {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기를 한다.
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);
/*
    string {
        "name": "Lee",
        "age": 20,
        "alive": true,
        "hobby": [
            "traveling",
            "tennis"
        ]
    }
*/

// relacer 함수. 값의 타입이 Number 이면 필터링되어 반환되지 않는다.
function filter(key, value) {
  return typeof value === "number" ? undefined : value;
}
// JSON.stringfy 메서드에 두 번째 인수로 filter 함수를 전달한다.
const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);
/*
    string {
        "name": "Lee",
        "alive": true,
        "hobby": [
                "traveling",
                "tennis"
            ]
    }
*/

const todos = [
  { id: 1, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "JavaScript", completed: false },
];

const arrJson = JSON.stringify(todos, null, 2);
console.log(typeof arrJson, arrJson);
/*
    string [
        {
            "id": 1,
            "content": "HTML",
            "completed": false
        },
        {
            "id": 2,
            "content": "CSS",
            "completed": true
        },
        {
            "id": 3,
            "content": "JavaScript",
            "completed": false
        }
    ]
*/
