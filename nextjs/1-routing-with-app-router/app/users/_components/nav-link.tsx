"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function NavLink({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link href={href} className={active ? "font-semibold" : ""}>
      {children}
    </Link>
  );
}
