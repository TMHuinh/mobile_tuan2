async function fetchTodo(): Promise<any> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const todo = await fetchTodo();
    console.log(todo);
  } catch (error) {
    console.error(error);
  }
})();
