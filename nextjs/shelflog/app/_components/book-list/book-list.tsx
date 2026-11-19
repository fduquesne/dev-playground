import { Work } from "@/lib/open-library/types";
import BookCard from "./book-card";

interface BookListProps {
  works: Work[];
}

export default function BookList({ works }: BookListProps) {
  return (
    <div className="flex flex-wrap gap-6">
      {works.map((work) => (
        <BookCard key={work.id} work={work} />
      ))}
    </div>
  );
}
