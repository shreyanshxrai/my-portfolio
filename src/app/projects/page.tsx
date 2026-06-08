"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    {
    title: "Medium - Blogging Platform",
    description:
      "A full-stack blogging platform featuring authentication, article management, CRUD operations, and a responsive user experience.",
    image: "/blogging-platform.png",
    tech: [
      
      "TypeScript",
      "Node.js",
      "Hono",
      "PostgreSQL",
    ],
    github:
      "https://github.com/shreyanshxrai/Medium",
    live: "https://medium-shreyanshxrai.vercel.app/",
  },
  {
    title: "Paytm like Wallet App",
    description:
      "Implemented JWT authentication, user accounts, balance tracking, and peer-to-peer transfers using REST APIs and MongoDB.",
    image: "/wallet.png",
    tech: [
    
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/shreyanshxrai/Paytm",
  },

  

  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built using Next.js, TypeScript, Tailwind CSS.",
    image: "/portfolio.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      
    ],
    github:
      "https://github.com/shreyanshxrai/my-portfolio"
    
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="mb-4 text-5xl font-bold">
          Projects
        </h1>

        <p className="text-gray-500 dark:text-gray-400">
          A collection of projects I've built while exploring
          full-stack development, backend systems, and modern web
          technologies.
        </p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              overflow-hidden
              rounded-3xl
              border
              border-gray-200
              dark:border-gray-800
              bg-white
              dark:bg-black
              shadow-sm
            "
          >
            <div className="relative h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="mb-3 text-2xl font-semibold">
                {project.title}
              </h2>

              <p className="mb-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-gray-300
                      dark:border-gray-700
                      px-3
                      py-1
                      text-xs
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-xl
                      bg-black
                      px-4
                      py-2
                      text-sm
                      text-white
                      transition
                      hover:opacity-80
                      dark:bg-white
                      dark:text-black
                    "
                  >
                    Live Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-xl
                    border
                    border-gray-300
                    dark:border-gray-700
                    px-4
                    py-2
                    text-sm
                    transition
                    hover:bg-gray-100
                    dark:hover:bg-gray-900
                  "
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

