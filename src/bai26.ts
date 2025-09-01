function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function simulateWait() {
  console.log('Đang chờ 5 giây...');
  await wait(5000);
  console.log('Đã chờ xong 5 giây!');
}
