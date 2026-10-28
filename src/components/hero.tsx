"use client";
import Image from "next/image";
import Link from "next/link";

const technologies = ["TypeScript", "Node.js", "PostgreSQL", "Applied AI"];

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="hero-section relative isolate flex min-h-[85svh] items-center overflow-hidden bg-[#0a0a0b] px-5 py-20 text-white sm:px-8 lg:px-12"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 -z-10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-emerald-400/[0.08] blur-3xl sm:h-[32rem] sm:w-[32rem]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        {/* Introduction */}
        <div className="hero-copy space-y-8">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-emerald-300"
            />
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
              Backend Engineering · Applied AI
            </p>
          </div>

          <div className="space-y-5">
            <h1
              id="hero-heading"
              className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-8xl"
            >
              Building systems
              <br />
              that <span className="text-emerald-200">scale.</span>
            </h1>

            <p className="max-w-xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
              I&apos;m Shreyansh Rai, an IT engineering student building
              full-stack products with a backend-first mindset. I&apos;m
              interested in scalable APIs, reliable distributed systems, and
              practical AI integrations.
            </p>
          </div>

          {/* Technology tags */}
          <ul aria-label="Areas of focus" className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-300"
              >
                {technology}
              </li>
            ))}
          </ul>

          {/* Calls to action */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/projects"
              className="hero-primary group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-emerald-200 px-6 py-3 text-sm font-semibold text-[#101411] transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0b]"
            >
              Explore projects
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              >
                ↗
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0b] motion-reduce:transition-none"
            >
              Get in touch
            </Link>
          </div>

          <p className="pt-1 text-xs tracking-wide text-neutral-500">
            Curious by nature. Engineering for the real world.
          </p>
        </div>

        {/* Profile / engineering card */}
        <div className="hero-profile relative mx-auto w-full max-w-sm lg:ml-auto">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] border border-emerald-200/[0.08]"
          />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111313] p-5 shadow-2xl shadow-black/30 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-neutral-400">
                / about-me
              </span>
              <span className="font-mono text-xs text-emerald-200">v1.0</span>
            </div>

            <div className="relative mx-auto my-8 w-fit">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full border border-dashed border-emerald-200/20"
              />

              <Image
                src="/profile.jpg"
                alt="Portrait of Shreyansh Rai"
                width={180}
                height={180}
                priority
                className="relative h-36 w-36 rounded-full border border-white/15 object-cover sm:h-44 sm:w-44"
                sizes="(max-width: 640px) 144px, 176px"
              />
            </div>

            <div className="space-y-2 text-center">
              <h2 className="text-xl font-semibold tracking-tight">
                Shreyansh Rai
              </h2>
              <p className="text-sm text-neutral-400">IT Engineering Student</p>
            </div>

            <div className="my-6 h-px bg-white/10" />

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm text-neutral-500">Building</span>
                <span className="text-right text-sm text-neutral-200">
                  Scalable backends
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="text-sm text-neutral-500">Exploring</span>
                <span className="text-right text-sm text-neutral-200">
                  Applied AI systems
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="text-sm text-neutral-500">Approach</span>
                <span className="text-right text-sm text-neutral-200">
                  Performance · Reliability
                </span>
              </div>
            </div>

            <div className="mt-7 rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3">
              <p className="font-mono text-xs leading-6 text-neutral-400">
                <span className="text-emerald-200">const</span> focus = [
                <br />
                &nbsp;&nbsp;&quot;backend&quot;,
                <br />
                &nbsp;&nbsp;&quot;systems&quot;,
                <br />
                &nbsp;&nbsp;&quot;applied-ai&quot;
                <br />
                ];
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          background-image:
            linear-gradient(
              to right,
              rgb(255 255 255 / 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgb(255 255 255 / 0.035) 1px,
              transparent 1px
            );
          background-size: 64px 64px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
        }

        .hero-copy {
          animation: hero-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hero-profile {
          animation: hero-enter 850ms cubic-bezier(0.22, 1, 0.36, 1) 100ms both;
        }

        @keyframes hero-enter {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-copy,
          .hero-profile {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
