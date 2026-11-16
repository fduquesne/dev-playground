"use client";

import { ErrorProps } from "next/error";
import { useEffect } from "react";

export default async function ErrorUsersPage({
  error,
  reset,
}: {
  error: unknown;
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
