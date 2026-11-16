import { notFound } from "next/navigation";

type User = { id: number; name: string; email: string; phone: string };
type Post = { id: number; title: string; body: string };

const API = "https://jsonplaceholder.typicode.com";

export default async function UserPage({ params }: PageProps<"/users/[id]">) {
  "use cache";

  const { id } = await params;

  const [userRes, postsRes] = await Promise.all([
    fetch(`${API}/users/${id}`),
    fetch(`${API}/users/${id}/posts`),
  ]);

  if (userRes.status === 404) notFound();
  if (!userRes.ok || !postsRes.ok) {
    throw new Error("Failed to fetch user data");
  }

  const [user, posts]: [User, Post[]] = await Promise.all([
    userRes.json(),
    postsRes.json(),
  ]);

  return (
    <div>
      <h1>{user.name}</h1>

      <p>
        {user.email} - {user.phone}
      </p>

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
