"use client";

import { useState } from "react";

type ExpandableTextProps = { description: string };
export default function ExpandableText({ description }: ExpandableTextProps) {
  const [isFull, setIsFull] = useState<boolean>(false);

  return (
    <span>
      <p>{isFull ? description : `${description.slice(0, 300)}...`}</p>
      <button className="cursor-pointer" onClick={() => setIsFull(!isFull)}>
        {isFull ? "Réduire" : "Lire la suite"}
      </button>
    </span>
  );
}
