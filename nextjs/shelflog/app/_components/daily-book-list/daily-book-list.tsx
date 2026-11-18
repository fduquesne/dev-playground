import { getTrends } from "@/lib/open-library/client";
import BookCard from "./book-card";

export default async function DailyBookList() {
  const trends = await getTrends();

  return (
    <div className="flex flex-wrap gap-6">
      {trends.map((work) => (
        <BookCard key={work.id} work={work} />
      ))}
    </div>
  );
}
