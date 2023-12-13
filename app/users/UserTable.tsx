import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

export default async function UserTable({ sortOrder }: Props) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <table className="border-collapse border border-slate-400">
      <thead>
        <tr className="border bg-slate-100">
          <th className="border border-slate-300 ">
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th className="border border-slate-300 ">
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td className="border border-slate-300 px-2 py-1">{user.name}</td>
            <td className="border border-slate-300 px-2 py-1">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
