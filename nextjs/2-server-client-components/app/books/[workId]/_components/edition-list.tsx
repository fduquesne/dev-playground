"use client";

import { use, useState } from "react";

type EditionListProps = { editionsPromise: Promise<{ entries: any[] }> };
export default function EditionList({ editionsPromise }: EditionListProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const editions = use(editionsPromise);

  return (
    <div>
      <label className="flex items-center gap-2 my-4 cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Seulement en français
      </label>

      <ul>
        {editions.entries
          .filter((edition) =>
            isChecked
              ? edition.languages
                  ?.map((l: any) => l.key)
                  .includes("/languages/fre")
              : true,
          )
          .map((edition) => (
            <li
              key={`${edition.title}-${edition.publish_date}-${edition.created.value}`}
            >
              {edition.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
