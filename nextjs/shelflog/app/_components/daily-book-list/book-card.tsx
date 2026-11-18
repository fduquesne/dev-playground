import { TrendWork } from "@/lib/open-library/types";
import Link from "next/link";

interface BookCardProps {
  work: TrendWork;
}

export default function BookCard({ work }: BookCardProps) {
  return (
    <Link href={`/works/${work.id}`}>
      <div className="flex flex-col w-50 h-70 rounded-r-lg rounded-l-sm border-l-4 border-gray-800 bg-gray-700 cursor-pointer hover:-translate-y-1">
        <div className="flex-1 p-4 text-lg font-semibold">{work.title}</div>
        <div className="px-4 py-2 text-xs uppercase">{work.authorName[0]}</div>
      </div>
    </Link>
  );
}
