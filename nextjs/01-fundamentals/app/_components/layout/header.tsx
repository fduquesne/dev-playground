import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center h-20 border-b border-neutral-700">
      <div className="flex flex-1 items-center h-full px-10">
        <span className="text-lg font-semibold">01-Fundamentals</span>
      </div>

      <nav className="flex items-center h-full px-10">
        <ul className="flex items-center *:mx-2 last:mr-0">
          <li>
            <Link
              className="py-1 px-3 rounded-md hover:bg-neutral-700 cursor-pointer"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="py-1 px-3 rounded-md hover:bg-neutral-700 cursor-pointer"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="py-1 px-3 rounded-md hover:bg-neutral-700 cursor-pointer"
              href="/products/1"
            >
              Product 1
            </Link>
          </li>
          <li>
            <Link
              className="py-1 px-3 rounded-md hover:bg-neutral-700 cursor-pointer"
              href="/products/2"
            >
              Product 2
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
