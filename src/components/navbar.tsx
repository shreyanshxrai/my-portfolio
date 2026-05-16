import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-800 bg-black/80 px-8 py-5 backdrop-blur-md">
      <h1 className="text-2xl font-bold tracking-wide">
        Shreyansh Rai
      </h1>

      <div className="flex gap-8 text-gray-300">
        <Link
          href="/"
          className="transition hover:text-white"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="transition hover:text-white"
        >
          About
        </Link>

        <Link
          href="/projects"
          className="transition hover:text-white"
        >
          Projects
        </Link>

        <Link
          href="/contact"
          className="transition hover:text-white"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}