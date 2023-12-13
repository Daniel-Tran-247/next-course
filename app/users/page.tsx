import { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link"; 

interface Props {
  searchParams: { sortOrder: string };
}

export default function UserPage({ searchParams: { sortOrder } }: Props) {
  return (
    <div className="space-y-6">
      <h1 className="mb-3">Users</h1>
      <Link href="/users/new" className="px-4 py-2 bg-slate-200 rounded-md">New User</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder}/>
      </Suspense>
    </div>
  );
}
