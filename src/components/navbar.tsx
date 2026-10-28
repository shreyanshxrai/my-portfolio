import Link from "next/link";
import MobileNav from "./MobileNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0a0a0b]/85 text-white backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"
      >
        {/* Brand */}
        <Link
          href="/"
          className="group inline-flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
          aria-label="Shreyansh Rai home"
        >
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-emerald-200 transition-shadow duration-300 group-hover:shadow-[0_0_14px_rgba(167,243,208,0.5)] motion-reduce:transition-none"
          />
          <span className="text-base font-semibold tracking-tight sm:text-lg">
            Shreyansh Rai
            <span className="text-emerald-200">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden min-h-10 items-center gap-2 rounded-lg border border-white/15 px-4 text-sm font-medium text-neutral-200 transition-colors hover:border-emerald-200/40 hover:bg-emerald-200/[0.06] hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 md:inline-flex motion-reduce:transition-none"
        >
          Let&apos;s talk
          <span aria-hidden="true">↗</span>
        </Link>

        {/* Mobile navigation */}
        <MobileNav links={[...links, { href: "/contact", label: "Contact" }]} />
      </nav>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  // Active-state detection lives in the client-side mobile/desktop
  // navigation component if desired. This server-rendered link stays simple.
  return (
    <Link
      href={href}
      className="group relative rounded-sm py-2 text-sm text-neutral-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 motion-reduce:transition-none"
    >
      {label}
      <span
        aria-hidden="true"
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-emerald-200 transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
      />
    </Link>
  );
}
