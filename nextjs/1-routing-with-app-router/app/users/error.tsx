"use client";

import { useEffect } from "react";

export default function ErrorUsersPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => console.log(error), [error]);

  return (
    <div>
      <div>Something went wrong.</div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
