import { PropsWithChildren } from "react";

export default function Page({ children }: PropsWithChildren) {
  return <div className="w-300 mx-auto pt-20 pb-10">{children}</div>;
}
