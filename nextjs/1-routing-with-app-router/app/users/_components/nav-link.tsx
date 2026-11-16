"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, Suspense } from "react";

type Props = PropsWithChildren<{ href: string }>;

function NavLinkView({ children, href, active }: Props & { active?: boolean }) {
  return (
    <Link href={href} className={active ? "font-semibold" : ""}>
      {children}
    </Link>
  );
}

function ActiveNavLink(props: Props) {
  const pathname = usePathname();
  const { href } = props;
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return <NavLinkView {...props} active={active} />;
}

export default function NavLink(props: Props) {
  return (
    <Suspense fallback={<NavLinkView {...props} active={false} />}>
      <ActiveNavLink {...props} />
    </Suspense>
  );
}
