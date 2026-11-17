import Link from "next/link";

type User = { id: number; name: string; email: string };

export default async function UsersPage() {
  "use cache";

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");

  const users: User[] = await res.json();

  return (
    <ul className="*:mb-2">
      {users.map((u) => (
        <li key={u.id} className="flex items-center gap-4">
          <Link href={`/users/${u.id}`}>
            <span>
              {u.name} - {u.email}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
