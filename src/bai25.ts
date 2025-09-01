function downloadFile(filename: string): Promise<void> {
  return new Promise((resolve) => {
    console.log(`Bắt đầu tải ${filename}...`);
    setTimeout(() => {
      console.log(`${filename} đã tải xong!`);
      resolve();
    }, 3000);
  });
}
