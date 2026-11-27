"use client";

import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <button
      className={`w-10 h-10 border border-neutral-500 rounded-lg bg-neutral-600 text-xl ${isLiked ? "text-blue-400" : "text-neutral-50"} cursor-pointer`}
      onClick={() => setIsLiked((prev) => !prev)}
    >
      {isLiked ? "♥" : "♡"}
    </button>
  );
}
