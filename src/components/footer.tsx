"use client";

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/shreyanshxrai",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shreyanshxrai",
    external: true,
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=shreyanshtalks@gmail.com",
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0b] text-neutral-400">
      <div className="footer-reveal mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Identity */}
          <div className="space-y-3">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0b]"
              aria-label="Shreyansh Rai — back to top"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-300"
              />
              <span>Shreyansh Rai</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              >
                ↗
              </span>
            </a>

            <p className="max-w-sm text-sm leading-6 text-neutral-500">
              Building scalable backends and thoughtful AI-powered products.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="footer-link inline-flex min-h-11 items-center text-sm transition-colors duration-200 hover:text-emerald-300 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 motion-reduce:transition-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs leading-5 text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Shreyansh Rai. All rights reserved.
          </p>

          <a
            href="#top"
            className="group inline-flex min-h-11 items-center gap-2 self-start transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:self-auto motion-reduce:transition-none"
          >
            Back to top
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
            >
              ↑
            </span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer-reveal {
          animation: footer-enter 650ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .footer-link {
          position: relative;
        }

        .footer-link::after {
          position: absolute;
          right: 0;
          bottom: 7px;
          left: 0;
          height: 1px;
          background: currentColor;
          content: "";
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 220ms ease;
        }

        .footer-link:hover::after,
        .footer-link:focus-visible::after {
          transform: scaleX(1);
        }

        @keyframes footer-enter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-reveal {
            animation: none;
          }

          .footer-link::after {
            transition: none;
          }
        }
      `}</style>
    </footer>
  );
}
