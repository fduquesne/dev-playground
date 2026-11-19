import { Suspense } from "react";

async function SearchResults({
  searchParams,
}: Pick<PageProps<"/search">, "searchParams">) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q.trim() : "";
  if (!query) return <p>Tape un titre ou un auteur.</p>;

  return (
    <Suspense key={query} fallback={<p>Chargement...</p>}>
      <section>
        <h1>
          Résultat pour "{query}"<span className="text-blue-400">.</span>
        </h1>

        <div className="py-6"></div>
      </section>
    </Suspense>
  );
}

export default function SearchPage({ searchParams }: PageProps<"/search">) {
  return (
    <main>
      <Suspense fallback={<p>Chargement...</p>}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
