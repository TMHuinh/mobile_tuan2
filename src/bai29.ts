function createTaskSequential(id: number, time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Task ${id} done in ${time}ms`), time);
  });
}

async function queueProcess() {
  const tasks = [
    () => createTaskSequential(1, 1000),
    () => createTaskSequential(2, 2000),
    () => createTaskSequential(3, 1500),
    () => createTaskSequential(4, 500),
    () => createTaskSequential(5, 1200),
  ];

  for (const task of tasks) {
    const result = await task();
    console.log('Sequential result:', result);
  }
}

queueProcess();
