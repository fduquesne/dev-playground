import LikeButton from "@/components/like-button";

type User = { id: number; name: string; email: string };

export default async function UsersPage() {
  "use cache";

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  console.log("rendu");

  return (
    <ul className="*:mb-2">
      {users.map((u) => (
        <li key={u.id} className="flex items-center gap-4">
          <span>
            {u.name} - {u.email}
          </span>

          <LikeButton />
        </li>
      ))}
    </ul>
  );
}
