import { fetchUser } from './bai18';

async function fetchUserWithTimeout(
  id: number,
  timeout = 2000
): Promise<{ id: number; name: string }> {
  const userPromise = fetchUser(id);

  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout: API call took too long'));
    }, timeout);
  });

  return Promise.race([userPromise, timeoutPromise]);
}

(async () => {
  try {
    const user = await fetchUserWithTimeout(5, 2000);
    console.log('Câu 20:', user);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Câu 20 - Error:', error.message);
    }
  }
})();
