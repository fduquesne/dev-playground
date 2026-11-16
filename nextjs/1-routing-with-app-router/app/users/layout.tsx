"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type NavItemProps = PropsWithChildren<{ href: string; selected?: boolean }>;
function NavItem({ children, href, selected = false }: NavItemProps) {
  return (
    <Link href={href} className={selected ? "font-semibold" : ""}>
      {children}
    </Link>
  );
}

function NavBar() {
  const pathName = usePathname();
  const nav = [
    { href: "/", label: "Home", isSelected: pathName === "/" },
    {
      href: "/users",
      label: "Users",
      isSelected: pathName.startsWith("/users"),
    },
  ];
  return (
    <div className="flex gap-2 py-4 border-b">
      <div>Nav :</div>

      <div className="flex items-center gap-2">
        {nav.map((navItem) => (
          <NavItem
            key={navItem.label}
            href={navItem.href}
            selected={navItem.isSelected}
          >
            {navItem.label}
          </NavItem>
        ))}
      </div>
    </div>
  );
}

export default function LayoutUsers({ children }: LayoutProps<"/users">) {
  return (
    <div className="flex flex-col gap-4">
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
