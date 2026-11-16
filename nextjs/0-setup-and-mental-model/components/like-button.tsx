"use client";

import { useState } from "react";

export default function LikeButton() {
  const [nbLikes, setNbLikes] = useState<number>(0);

  console.log("rendu");

  return (
    <div className="flex items-center gap-2">
      <button
        className="px-2 bg-blue-500 cursor-pointer"
        onClick={() => setNbLikes((prev) => prev + 1)}
      >
        Like
      </button>
      <span>{nbLikes} like(s)</span>
    </div>
  );
}
