interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchCompletedTodos(): Promise<Todo[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const todos: Todo[] = await response.json();
  return todos.filter((t) => t.completed);
}

(async () => {
  try {
    const completedTodos = await fetchCompletedTodos();
    console.log(completedTodos);
  } catch (error) {
    console.error(error);
  }
})();
