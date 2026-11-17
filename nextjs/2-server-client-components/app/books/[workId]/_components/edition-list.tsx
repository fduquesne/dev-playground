"use client";

import { use, useState } from "react";
import type { Edition } from "@/lib/open-library";

type EditionListProps = { editionsPromise: Promise<Edition[]> };
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
        {editions
          .filter((edition) =>
            isChecked ? edition.languages.includes("/languages/fre") : true,
          )
          .map((edition) => (
            <li key={edition.key}>{edition.title}</li>
          ))}
      </ul>
    </div>
  );
}
