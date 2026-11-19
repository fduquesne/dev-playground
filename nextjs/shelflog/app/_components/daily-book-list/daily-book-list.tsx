import { getTrends } from "@/lib/open-library/client";
import BookList from "../book-list/book-list";

export default async function DailyBookList() {
  const trends = await getTrends();

  return <BookList works={trends} />;
}
