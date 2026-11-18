import "server-only";

import { Edition, RawEditions, RawWork, Work } from "./types";

const API = "https://openlibrary.org";

export async function getWork(id: string): Promise<Work | null> {
  "use cache";
  const res = await fetch(`${API}/works/${id}.json`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Open Library: failed to fetch work ${id}`);

  const raw: RawWork = await res.json();
  return {
    title: raw.title,
    description:
      typeof raw.description === "string"
        ? raw.description
        : (raw.description?.value ?? null),
    coverId: raw.covers?.[0] ?? null,
  };
}

export async function getEditions(id: string): Promise<Edition[]> {
  "use cache";
  const res = await fetch(`${API}/works/${id}/editions.json`);
  if (!res.ok) throw new Error(`Open Library: failed to editions of ${id}`);

  const raw: RawEditions = await res.json();
  return raw.entries.map((e) => ({
    key: e.key,
    title: e.title,
    languages: e.languages?.map((l) => l.key) ?? [],
  }));
}
