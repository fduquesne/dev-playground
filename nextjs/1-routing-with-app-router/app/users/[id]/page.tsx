import { notFound } from "next/navigation";

type User = { id: number; name: string; email: string; phone: string };

export default async function UserPage({ params }: PageProps<"/users/[id]">) {
  "use cache";

  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) notFound();

  // throw new Error("Boom !");

  const user: User = await res.json();
  return (
    <h1>
      {user.name} - {user.email} - {user.phone}
    </h1>
  );
}
