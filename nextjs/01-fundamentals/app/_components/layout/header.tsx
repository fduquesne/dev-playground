import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

export default function Header() {
  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products/1", label: "Product 1" },
    { href: "/products/2", label: "Product 2" },
  ];

  return (
    <header className="flex items-center h-20 border-b border-neutral-700">
      <div className="flex flex-1 items-center h-full px-10">
        <span className="text-lg font-semibold">01-Fundamentals</span>
      </div>

      <nav className="flex items-center h-full px-10">
        <ul className="flex items-center last:mr-0">
          {navItems.map((navItem) => (
            <li key={navItem.href}>
              <Link
                className="py-1 px-3 rounded-md hover:bg-neutral-700 cursor-pointer"
                href={navItem.href}
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
