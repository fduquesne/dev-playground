import "server-only";

const API = "https://openlibrary.org/";

type RawWork = {
  title: string;
  description?: string | { type: string; value: string };
  covers?: number[];
};
type RawEditions = {
  entries: { key: string; title: string; languages?: { key: string }[] }[];
};

export type Work = {
  title: string;
  description: string | null;
  coverId: number | null;
};
export type Edition = { key: string; title: string; languages: string[] };

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

export async function getEditions(id: string) {
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
