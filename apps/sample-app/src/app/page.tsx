import { use } from 'react';
import { sample1 } from 'sample-1';
import { sample2 } from 'sample-2';

type User = {
  id: number;
  login: string;
};

const fetchUsers: () => Promise<User[]> = async () => {
  const res = await fetch('https://api.github.com/users');
  return res.json();
};

export default function Page() {
  const users = use(fetchUsers());
  return (
    <div>
      <h1>GitHub Users!</h1>
      <p>sample1x: {sample1()}</p>
      <p>sample2: {sample2()}</p>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              {user.id}: {user.login}
            </div>
          );
        })}
      </div>
    </div>
  );
}
