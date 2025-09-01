async function fetchMultiple(): Promise<void> {
  const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
  ];

  const promises = urls.map((url) =>
    fetch(url).then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
  );

  try {
    const results = await Promise.all(promises);
    console.log(results);
  } catch (error) {
    console.error(error);
  }
}

fetchMultiple();
