import { RawTrendWork, TrendWork } from "@/lib/open-library/types";

export function getWorkIdentifier(key: string): string {
  return key.split("/")[2];
}

export function mapRawToWork(raw: RawTrendWork): TrendWork {
  return {
    authorName: raw.author_name,
    id: getWorkIdentifier(raw.key),
    title: raw.title,
  };
}
