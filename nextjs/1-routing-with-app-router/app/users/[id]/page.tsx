import { notFound } from "next/navigation";

type User = { id: number; name: string; email: string; phone: string };
type Post = { id: number; title: string; body: string };

export default async function UserPage({ params }: PageProps<"/users/[id]">) {
  "use cache";

  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) notFound();

  const user: User = await res.json();

  const resPost = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`,
  );
  if (!res.ok) throw new Error("Something went wrong");
  const posts: Post[] = await resPost.json();

  return (
    <div>
      <h1>
        {user.name} - {user.email} - {user.phone}
      </h1>

      <div>Posts :</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} - {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
