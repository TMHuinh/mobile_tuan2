import { fetchUser } from './bai18';

async function fetchUsers(
  ids: number[]
): Promise<{ id: number; name: string }[]> {
  const users = await Promise.all(ids.map((id) => fetchUser(id)));
  return users;
}

(async () => {
  const users = await fetchUsers([1, 2, 3]);
  console.log('Câu 19:', users);
})();
