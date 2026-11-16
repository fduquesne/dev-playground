"use client";

import NavLink from "./_components/nav-link";

export default function LayoutUsers({ children }: LayoutProps<"/users">) {
  return (
    <div className="flex flex-col gap-4">
      <nav className="flex gap-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/users">Users</NavLink>
      </nav>

      {children}
    </div>
  );
}
