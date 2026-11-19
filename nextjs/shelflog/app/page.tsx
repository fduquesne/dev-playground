import { Suspense } from "react";
import BookListSkeleton from "./_components/book-list/book-list-skeleton";
import DailyBookList from "./_components/daily-book-list/daily-book-list";

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>
          Tendances du jour<span className="text-blue-400">.</span>
        </h1>
        <p className="text-neutral-400">
          Les livres les plus consultés aujourd'hui sur Open Library.
        </p>

        <div className="py-6">
          <Suspense fallback={<BookListSkeleton />}>
            <DailyBookList />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
