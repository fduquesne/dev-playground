import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getEditions, getWork } from "@/lib/open-library";
import ExpandableText from "./_components/expandable-text";
import Tabs from "./_components/tabs";
import EditionList from "./_components/edition-list";

export default async function WorkBookPage({
  params,
}: PageProps<"/books/[workId]">) {
  const { workId } = await params;

  const work = await getWork(workId);
  if (!work) notFound();

  const editionsPromise = getEditions(workId);

  return (
    <div>
      <h1>{work.title}</h1>

      {work.coverId && (
        <img
          alt={work.title}
          src={`https://covers.openlibrary.org/b/id/${work.coverId}-L.jpg`}
        />
      )}

      <Tabs
        tabs={[
          {
            label: "Description",
            content: <ExpandableText description={work.description} />,
          },
          {
            label: "Editions",
            content: (
              <Suspense fallback={<p>Chargement des editions...</p>}>
                <EditionList editionsPromise={editionsPromise} />
              </Suspense>
            ),
          },
        ]}
      />
    </div>
  );
}
