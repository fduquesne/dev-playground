export type RawWork = {
  title: string;
  description?: string | { type: string; value: string };
  covers?: number[];
};

export type RawEditions = {
  entries: { key: string; title: string; languages?: { key: string }[] }[];
};

export type Work = {
  title: string;
  description: string | null;
  coverId: number | null;
};

export type Edition = { key: string; title: string; languages: string[] };
