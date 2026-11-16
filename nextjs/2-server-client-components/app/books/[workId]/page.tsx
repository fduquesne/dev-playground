import { getWork } from "@/lib/open-library";
import ExpandableText from "./_components/expandable-text";

export default async function WorkBookPage({
  params,
}: PageProps<"/books/[workId]">) {
  "use cache";

  const { workId } = await params;

  const work = await getWork(workId);

  console.log(work);

  return (
    <div>
      <h1>{work.title}</h1>

      <ExpandableText description={work.description} />

      <img
        src={`https://covers.openlibrary.org/b/id/${work.covers[0]}-L.jpg`}
      />
    </div>
  );
}
