"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

export default function MobileNav({ links }: { links: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-neutral-200 transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 motion-reduce:transition-none"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>

        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span
            className={`h-px w-5 bg-current transition-transform duration-200 motion-reduce:transition-none ${
              open ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition-all duration-200 motion-reduce:transition-none ${
              open ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition-transform duration-200 motion-reduce:transition-none ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[72px] z-40 cursor-default bg-black/30"
          />

          <div
            id="mobile-navigation"
            className="mobile-menu absolute right-0 top-[calc(100%+12px)] z-50 w-[min(18rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-white/10 bg-[#111313] p-2 shadow-2xl shadow-black/40"
          >
            <div className="px-3 pb-2 pt-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                Navigation
              </p>
            </div>

            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-12 items-center justify-between rounded-xl px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-200 motion-reduce:transition-none ${
                    active
                      ? "bg-emerald-200/[0.08] text-emerald-100"
                      : "text-neutral-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {link.label}
                  <span aria-hidden="true" className="text-neutral-500">
                    ↗
                  </span>
                </Link>
              );
            })}
          </div>
        </>
      )}

      <style jsx>{`
        .mobile-menu {
          animation: menu-enter 160ms ease-out both;
        }

        @keyframes menu-enter {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-menu {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
