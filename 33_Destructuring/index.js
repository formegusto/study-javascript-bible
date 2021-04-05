{
  const arr = [1, 2, 3];

  // 할당의 기준은 배열 인덱스다.
  const [one, two, three] = arr;
  console.log(one, two, three); // 1 2 3
}

// {
//   const [x, y]; // SyntaxError: Missing initializer in destructuring declaration

//   const [a, b] = {}; // TypeError: {} is not iterable
// }

{
  const arr = [1, 2, 3];

  const [a, b, c] = arr;
  console.log(a, b, c);

  const [d, e, f, g] = arr;
  console.log(g); // undefined

  const [h, , i] = arr;
  console.log(i); // 3

  const [j, k, l = 10, m = 4] = arr;
  console.log(l, m); // 3 4
}

// URL Parsing Example
{
  function parseURL(url = "") {
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parsedURL);
    /*
    [
        'https://developer.mozila.org/ko/docs/WebJavaScript',
        'https',
        'developer.mozila.org',
        'ko/docs/WebJavaScript',
        index: 0,
        input: 'https://developer.mozila.org/ko/docs/WebJavaScript',
        groups: undefined
    ]
    */

    if (!parsedURL) return {};

    const [, protocol, host, path] = parsedURL;
    return { protocol, host, path };
  }

  const parsedURL = parseURL(
    "https://developer.mozila.org/ko/docs/WebJavaScript"
  );
  console.log(parsedURL);
  /*
    {
        protocol: 'https',
        host: 'developer.mozila.org',
        path: 'ko/docs/WebJavaScript'
    }
  */
}

{
  const [x, ...y] = [1, 2, 3];
  console.log(x, y); // 1 [ 2, 3 ]
}

{
  const user = { firstName: "Ungmo", lastName: "Lee" };

  const { lastName, firstName } = user;
  console.log(lastName, firstName); // Lee Ungmo
}

{
  const user = { firstName: "Ungmo", lastName: "Lee" };

  const { lastName: ln = "No", firstName: fn } = user;
  console.log(ln, fn); // Lee Ungmo

  const user2 = { firstName: "Ungmo" };
  const { lastName: ln2 = "No", firstName: fn2 } = user2;
  console.log(ln2, fn2); // No Ungmo
}

{
  function printTodo({ content, completed }) {
    console.log(
      `할일 ${content}은 ${completed ? "완료" : "비완료"} 상태입니다.`
    );
  }

  printTodo({ id: 1, content: "HTML", completed: true }); // 할일 HTML은 완료 상태입니다.
}

{
  const todos = [
    { id: 1, content: "HTML", completed: true },
    { id: 2, content: "CSS", completed: false },
    { id: 3, content: "JS", completed: false },
  ];

  const [, { id, content: ct }] = todos;
  console.log(id, ct); // 2 CSS
}

{
  const user = {
    name: "Lee",
    address: {
      zipCode: "03068",
      city: "Seoul",
    },
  };

  const {
    address: { city },
  } = user;
  console.log(city);
}

{
  const { x, ...rest } = { x: 1, y: 2, z: 3 };
  console.log(x, rest); // 1 { y: 2, z: 3 }
}
