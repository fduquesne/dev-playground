import { Suspense } from "react";
import DailyBookList from "./_components/daily-book-list/daily-book-list";
import DailyBookListSkeleton from "./_components/daily-book-list/daily-book-list-skeleton";

export default function HomePage() {
  return (
    <div className="w-300 mx-auto pt-16 pb-10">
      <main>
        <section>
          <h1>
            Tendances du jour<span className="text-blue-400">.</span>
          </h1>
          <p className="text-gray-400">
            Les livres les plus consultés aujourd'hui sur Open Library.
          </p>

          <div className="py-6">
            <Suspense fallback={<DailyBookListSkeleton />}>
              <DailyBookList />
            </Suspense>
          </div>
        </section>
      </main>
    </div>
  );
}
