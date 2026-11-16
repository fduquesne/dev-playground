import { Suspense } from "react";
import { getEditions, getWork } from "@/lib/open-library";
import ExpandableText from "./_components/expandable-text";
import Tabs from "./_components/tabs";
import EditionList from "./_components/edition-list";

export default async function WorkBookPage({
  params,
}: PageProps<"/books/[workId]">) {
  "use cache";

  const { workId } = await params;

  const work = await getWork(workId);
  const editionsPromise = getEditions(workId);

  console.log(work);

  return (
    <div>
      <h1>{work.title}</h1>

      <img
        src={`https://covers.openlibrary.org/b/id/${work.covers[0]}-L.jpg`}
      />

      <Tabs
        tabs={[
          {
            label: "Description",
            content: <ExpandableText description={work.description} />,
          },
          {
            label: "Editions",
            content: (
              <Suspense>
                <EditionList editionsPromise={editionsPromise} />
              </Suspense>
            ),
          },
        ]}
      />
    </div>
  );
}
