"use client";

import { motion, useReducedMotion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "Interfaces & experiences",
    description:
      "Building responsive web interfaces with a focus on usability, component architecture, and maintainable code.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend",
    subtitle: "APIs & application logic",
    description:
      "Designing APIs, implementing authentication, and exploring the engineering decisions behind reliable, scalable services.",
    technologies: ["Node.js", "Express.js", "Hono", "REST APIs"],
  },
  {
    number: "03",
    title: "Data & Systems",
    subtitle: "Persistence & reliability",
    description:
      "Working with relational and document databases while developing a deeper understanding of data modelling, performance, and system design.",
    technologies: ["PostgreSQL", "MongoDB", "Prisma", "System design"],
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0a0a0b] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 75%)",
        }}
      />

      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-emerald-300/[0.06] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <motion.header
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-200" />A
            little about me
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl">
            I build for the
            <br />
            <span className="text-neutral-500">systems behind</span>
            <br />
            the experience.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg sm:leading-9">
            I&apos;m Shreyansh Rai, an IT engineering student interested in
            backend engineering, scalable systems, and applied AI. I enjoy
            understanding how applications work beneath the interface — from API
            design and authentication to data modelling and performance.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg sm:leading-9">
            My goal is to build software that is not only functional, but also
            reliable, maintainable, and thoughtfully engineered. I&apos;m
            continually strengthening my foundations while building projects
            that turn these ideas into practice.
          </p>
        </motion.header>

        {/* Engineering philosophy */}
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          aria-labelledby="philosophy-heading"
          className="mt-20 border-y border-white/10 py-8 sm:mt-28 sm:py-10"
        >
          <div className="grid gap-5 sm:grid-cols-[0.7fr_1.3fr] sm:items-start sm:gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Engineering philosophy
              </p>
              <h2
                id="philosophy-heading"
                className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl"
              >
                Think beyond the code.
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-base leading-8 text-neutral-300">
                A working feature is only the beginning. I want to understand
                what happens when requests increase, data grows, dependencies
                fail, or a system needs to evolve.
              </p>

              <p className="text-sm leading-7 text-neutral-500">
                That curiosity drives my interest in backend architecture,
                database design, performance profiling, and practical AI
                integration.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Capabilities */}
        <section
          aria-labelledby="capabilities-heading"
          className="mt-20 sm:mt-28"
        >
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
                What I work with
              </p>

              <h2
                id="capabilities-heading"
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                My engineering toolkit.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-neutral-500">
              Three connected areas, with a growing focus on backend engineering
              and applied AI.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
                className="group flex flex-col rounded-2xl border border-white/[0.09] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-emerald-200/25 hover:bg-white/[0.035] sm:p-7 motion-reduce:transition-none"
              >
                <div className="mb-9 flex items-center justify-between">
                  <span className="font-mono text-xs text-emerald-200/70">
                    {capability.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-lg text-neutral-600 transition-colors duration-200 group-hover:text-emerald-200 motion-reduce:transition-none"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight">
                  {capability.title}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-wider text-neutral-500">
                  {capability.subtitle}
                </p>

                <p className="mt-5 flex-1 text-sm leading-7 text-neutral-400">
                  {capability.description}
                </p>

                <div className="my-6 h-px bg-white/[0.08]" />

                <ul
                  aria-label={`${capability.title} technologies and topics`}
                  className="flex flex-wrap gap-2"
                >
                  {capability.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-white/[0.08] px-2.5 py-1.5 text-xs text-neutral-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Closing statement */}
        <motion.section
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          aria-label="Current direction"
          className="mt-20 rounded-2xl border border-emerald-200/15 bg-emerald-200/[0.035] p-6 sm:mt-28 sm:p-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">
            Where I&apos;m heading
          </p>

          <h2 className="mt-4 max-w-3xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl md:text-4xl">
            Becoming an engineer who can build reliable backends and integrate
            AI where it genuinely adds value.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
            I&apos;m focused on learning through implementation, testing ideas
            against real problems, and improving the way I design and build
            software.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
