"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiGithub,
  SiPrisma,
} from "react-icons/si";

const categories = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    description: "Building responsive web experiences",
    technologies: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    description: "APIs and application logic",
    technologies: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
    ],
  },
  {
    id: "data",
    number: "03",
    title: "Data & ORM",
    description: "Persistence and data access",
    technologies: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Prisma", Icon: SiPrisma },
    ],
  },
  {
    id: "workflow",
    number: "04",
    title: "Workflow",
    description: "Tools for shipping software",
    technologies: [{ name: "GitHub", Icon: SiGithub }],
  },
];

export default function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="relative overflow-hidden bg-[#0a0a0b] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
            02 / Engineering toolkit
          </p>

          <h2
            id="tech-stack-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          >
            The tools behind
            <br className="hidden sm:block" />{" "}
            <span className="text-neutral-500">the systems I build.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-400">
            From crafting web experiences to designing APIs and working with
            databases, these are the technologies I use to turn ideas into
            working products.
          </p>
        </motion.div>

        {/* Capability categories */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, categoryIndex) => (
            <motion.article
              key={category.id}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: shouldReduceMotion ? 0 : categoryIndex * 0.06,
              }}
              className="group flex flex-col rounded-2xl border border-white/[0.09] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-emerald-200/25 hover:bg-white/[0.035] sm:p-6 motion-reduce:transition-none"
            >
              <div className="mb-6 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-medium tracking-tight">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    {category.description}
                  </p>
                </div>

                <span className="font-mono text-xs text-emerald-200/60">
                  {category.number}
                </span>
              </div>

              <ul className="mt-auto space-y-1">
                {category.technologies.map(({ name, Icon }) => (
                  <li key={name}>
                    <div className="flex min-h-12 items-center gap-3 rounded-xl border border-transparent px-3 transition-colors duration-200 group-hover:border-white/[0.04] hover:bg-white/[0.035] motion-reduce:transition-none">
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.035] text-xl text-neutral-300 transition-colors duration-200 group-hover:text-emerald-100 motion-reduce:transition-none"
                      >
                        <Icon />
                      </span>

                      <span className="text-sm text-neutral-200">{name}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div
                aria-hidden="true"
                className="mt-5 h-px w-full bg-gradient-to-r from-emerald-200/20 via-white/[0.06] to-transparent"
              />
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-neutral-500">
          Technologies reflect my current toolkit, not a claim of equal
          expertise across every tool.
        </p>
      </div>
    </section>
  );
}
