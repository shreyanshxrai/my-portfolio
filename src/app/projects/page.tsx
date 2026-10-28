"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live?: string;
  status?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "PayGuard",
    category: "Payments · Fraud Detection",
    description:
      "A P2P payment platform with an AI-powered fraud detection direction. The project explores transaction verification, payment flows, and how AI can support safer financial systems.",
    image: "/paygaurd.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "Turborepo"],
    github: "https://github.com/shreyanshxrai/paygaurd",
    live: "https://paygaurdshreyanshxrai.vercel.app",
    status: "AI integration in progress",
    featured: true,
  },
  {
    title: "Medium",
    category: "Full-stack · Content Platform",
    description:
      "A blogging platform with authentication, article management, CRUD operations, and a responsive interface backed by a PostgreSQL database.",
    image: "/blogging-platform.png",
    tech: ["TypeScript", "Node.js", "Hono", "PostgreSQL"],
    github: "https://github.com/shreyanshxrai/Medium",
    live: "https://medium-shreyanshxrai.vercel.app/",
  },
  {
    title: "P2P Wallet",
    category: "Backend · Financial Applications",
    description:
      "A wallet application featuring JWT authentication, user accounts, balance tracking, and peer-to-peer transfers through REST APIs.",
    image: "/wallet.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/shreyanshxrai/Paytm",
  },
  {
    title: "Developer Portfolio",
    category: "Frontend · Personal Project",
    description:
      "A personal portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase projects, technical interests, and engineering progress.",
    image: "/portfolio.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/shreyanshxrai/my-portfolio",
    live: "https://shreyanshraiportfolio.vercel.app/",
  },
];

export default function ProjectsPage() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0a0a0b] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 70%)",
        }}
      />

      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-emerald-300/[0.06] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Page introduction */}
        <motion.header
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="mb-14 max-w-3xl sm:mb-20"
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-200" />
            535 / Selected work
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl md:text-7xl">
            Built to solve
            <br />
            <span className="text-neutral-500">real problems.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            A selection of applications and experiments exploring backend
            engineering, databases, full-stack development, and practical AI
            integration.
          </p>
        </motion.header>

        {/* Featured project */}
        <motion.section
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{
            delay: reduceMotion ? 0 : 0.08,
          }}
          aria-labelledby="featured-project-heading"
          className="mb-20 sm:mb-28"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Featured project
            </p>

            <span className="rounded-full border border-amber-200/20 bg-amber-200/[0.06] px-3 py-1.5 text-xs text-amber-100">
              In progress
            </span>
          </div>

          <article className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] lg:grid-cols-[1.1fr_0.9fr]">
            {/* Project image */}
            <a
              href={featuredProject.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the PayGuard live project"
              className="group relative block aspect-[16/10] overflow-hidden bg-[#111313] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-200 lg:aspect-auto lg:min-h-[440px]"
            >
              <Image
                src={featuredProject.image}
                alt="PayGuard project preview"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              />

              <span className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-xs text-white backdrop-blur-md">
                View deployed app ↗
              </span>
            </a>

            {/* Project details */}
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-200">
                {featuredProject.category}
              </p>

              <h2
                id="featured-project-heading"
                className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                {featuredProject.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8">
                {featuredProject.description}
              </p>

              <div className="mt-7">
                <p className="mb-3 text-xs uppercase tracking-[0.16em] text-neutral-500">
                  Technology
                </p>

                <ul className="flex flex-wrap gap-2">
                  {featuredProject.tech.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-neutral-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-xs leading-6 text-amber-100/80">
                Note: AI fraud detection integration is still in progress. The
                deployed app should not be interpreted as evidence of a finished
                fraud-detection system.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {featuredProject.live && (
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-emerald-200 px-4 py-2.5 text-sm font-semibold text-[#101411] transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#111313] motion-reduce:transition-none"
                  >
                    Live demo <span aria-hidden="true">↗</span>
                  </a>
                )}

                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm text-white transition-colors hover:border-white/30 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 motion-reduce:transition-none"
                >
                  Source code <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        </motion.section>

        {/* Remaining projects */}
        <section aria-labelledby="other-projects-heading">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
                More work
              </p>

              <h2
                id="other-projects-heading"
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Other projects.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-neutral-500">
              Different applications, shared curiosity about how software works.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.02] transition-colors duration-300 hover:border-emerald-200/25 hover:bg-white/[0.035] motion-reduce:transition-none"
              >
                <a
                  href={project.live ?? project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} ${
                    project.live ? "live demo" : "source code"
                  }`}
                  className="relative block aspect-[16/10] overflow-hidden bg-[#111313] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-200"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
                  />
                </a>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-emerald-200/80">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-neutral-400">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-md border border-white/[0.08] px-2.5 py-1.5 text-xs text-neutral-300"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.08] pt-5">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-emerald-200 transition-colors hover:text-emerald-100 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 motion-reduce:transition-none"
                      >
                        Live demo <span aria-hidden="true">↗</span>
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 motion-reduce:transition-none"
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
