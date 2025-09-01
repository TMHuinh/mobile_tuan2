function createTask(id: number, time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Task ${id} done in ${time}ms`), time);
  });
}

async function batchProcess() {
  const tasks = [
    createTask(1, 1000),
    createTask(2, 2000),
    createTask(3, 1500),
    createTask(4, 500),
    createTask(5, 1200),
  ];

  const results = await Promise.all(tasks);
  console.log('Batch results:', results);
}

batchProcess();
