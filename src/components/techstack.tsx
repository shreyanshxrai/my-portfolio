"use client";

import { motion } from "framer-motion";
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

const techStack = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Prisma", Icon: SiPrisma },
  { name: "GitHub", Icon: SiGithub },
];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center text-4xl font-bold"
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="
              flex flex-col items-center
              rounded-2xl
              border
              border-gray-300
              dark:border-gray-800
              p-6
              cursor-pointer
              transition-all
              bg-white
              dark:bg-black
            "
          >
            <tech.Icon className="mb-4 text-5xl" />

            <p className="text-sm font-medium">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}