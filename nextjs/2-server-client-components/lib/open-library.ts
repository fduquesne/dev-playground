const API = "https://openlibrary.org/";

export async function getWork(id: string) {
  "use cache";
  const res = await fetch(`${API}/works/${id}.json`);
  return await res.json();
}

export async function getEditions(id: string) {
  "use cache";
  const res = await fetch(`${API}/works/${id}/editions.json`);
  return await res.json();
}
