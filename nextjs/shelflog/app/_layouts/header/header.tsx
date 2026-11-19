import Link from "next/link";
import SearchForm from "./search-form";

export default function Header() {
  return (
    <header className="flex items-center h-16 px-6 border-b border-neutral-400">
      <Link href="/">
        <div className="flex items-center text-2xl font-semibold">
          ShelfLog<span className="text-3xl text-blue-400">.</span>
        </div>
      </Link>

      <div className="ml-20">
        <SearchForm />
      </div>
    </header>
  );
}
