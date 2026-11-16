import Link from "next/link";

type User = { id: number; name: string; email: string };

export default async function UsersPage() {
  "use cache";

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <ul className="*:mb-2">
      {users.map((u) => (
        <Link key={u.id} href={`/users/${u.id}`}>
          <li className="flex items-center gap-4">
            <span>
              {u.name} - {u.email}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );
}
