async function fetchWithRetry(url: string, retries: number): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... attempts left: ${retries}`);
      return fetchWithRetry(url, retries - 1);
    } else {
      throw new Error('Failed after retries: ' + error);
    }
  }
}

(async () => {
  try {
    const data = await fetchWithRetry(
      'https://jsonplaceholder.typicode.com/todos/1',
      3
    );
    console.log('Success:', data);
  } catch (err) {
    console.error('Error:', err);
  }
})();
