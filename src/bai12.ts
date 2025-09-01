function simulataTasks(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Task done');
    }, time);
  });
}

async function runTask() {
  var result = await simulataTasks(2000);
  console.log(result);
}

runTask();
