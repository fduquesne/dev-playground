"use client";

import { useState } from "react";

type ExpandableTextProps = { description: string | null };
export default function ExpandableText({ description }: ExpandableTextProps) {
  const [isFull, setIsFull] = useState<boolean>(false);

  if (!description) return null;
  return (
    <div>
      {description.length > 300 ? (
        <>
          <p>{isFull ? description : `${description.slice(0, 300)}...`}</p>
          <button
            className="cursor-pointer"
            onClick={() => setIsFull((v) => !v)}
          >
            {isFull ? "Réduire" : "Lire la suite"}
          </button>
        </>
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
}
