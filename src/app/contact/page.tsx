"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "shreyanshtalks@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=shreyanshtalks@gmail.com",
    Icon: FaEnvelope,
    external: false,
  },
  {
    label: "GitHub",
    value: "@shreyanshxrai",
    href: "https://github.com/shreyanshxrai",
    Icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shreyanshxrai",
    href: "https://www.linkedin.com/in/shreyanshxrai/",
    Icon: FaLinkedin,
    external: true,
  },
];

export default function ContactPage() {
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

      <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-emerald-300/[0.06] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <motion.header
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="mb-14 max-w-3xl sm:mb-20"
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-200" />
            Get in touch
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl md:text-7xl">
            Have something
            <br />
            <span className="text-neutral-500">worth building?</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            Whether it's a software engineering opportunity, an interesting
            project, or an idea worth exploring, I'd be happy to hear from you.
          </p>
        </motion.header>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-7">
          {/* Contact form */}
          <motion.section
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            aria-labelledby="contact-form-heading"
            className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-9 lg:p-10"
          >
            <div className="mb-8">
              <p className="mb-3 font-mono text-xs text-emerald-200">
                01 / YOUR MESSAGE
              </p>

              <h2
                id="contact-form-heading"
                className="text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Let&apos;s start a conversation.
              </h2>

              <p className="mt-3 text-sm leading-6 text-neutral-400">
                Share a little context, and I'll have a better idea of how I can
                help.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xojzdevp"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New portfolio contact message"
              />

              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-neutral-200"
                >
                  Your name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Shreyansh Rai"
                  required
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 hover:border-white/20 focus:border-emerald-200/60 focus:ring-2 focus:ring-emerald-200/15 motion-reduce:transition-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-neutral-200"
                >
                  Email address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="shreyansh@example.com"
                  required
                  className="min-h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 hover:border-white/20 focus:border-emerald-200/60 focus:ring-2 focus:ring-emerald-200/15 motion-reduce:transition-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-neutral-200"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  minLength={10}
                  placeholder="Tell me a little about what you have in mind..."
                  required
                  className="w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-7 text-white outline-none transition-colors placeholder:text-neutral-600 hover:border-white/20 focus:border-emerald-200/60 focus:ring-2 focus:ring-emerald-200/15 motion-reduce:transition-none"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-emerald-200 px-5 py-3 text-sm font-semibold text-[#101411] transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0b] motion-reduce:transition-none"
              >
                Send message
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  ↗
                </span>
              </button>

              <p className="text-xs leading-5 text-neutral-500">
                Your message is submitted through Formspree. Please don't post
                include passwords or sensitive financial information.
              </p>
            </form>
          </motion.section>

          {/* Contact details */}
          <motion.aside
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              delay: reduceMotion ? 0 : 0.08,
            }}
            aria-labelledby="contact-links-heading"
            className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-9 lg:p-10"
          >
            <div>
              <p className="mb-3 font-mono text-xs text-emerald-200">
                02 / ELSEWHERE
              </p>

              <h2
                id="contact-links-heading"
                className="text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Find me online.
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-400">
                I'm interested in backend engineering, applied AI, building
                useful products, and connecting with people who enjoy solving
                difficult problems.
              </p>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <ul className="space-y-3">
              {contactLinks.map(({ label, value, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex min-h-[76px] items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.015] p-4 transition-colors hover:border-emerald-200/25 hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 motion-reduce:transition-none"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-lg text-neutral-300 transition-colors group-hover:text-emerald-200 motion-reduce:transition-none"
                    >
                      <Icon />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-neutral-500">
                        {label}
                      </span>

                      <span className="mt-1 block break-all text-sm font-medium text-neutral-200 transition-colors group-hover:text-white motion-reduce:transition-none">
                        {value}
                      </span>
                    </span>

                    <FaExternalLinkAlt
                      aria-hidden="true"
                      className="shrink-0 text-xs text-neutral-600 transition-colors group-hover:text-emerald-200 motion-reduce:transition-none"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <a
                href="/Shreyansh_rai_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-14 items-center justify-between gap-4 rounded-xl border border-emerald-200/20 bg-emerald-200/[0.045] p-4 transition-colors hover:border-emerald-200/40 hover:bg-emerald-200/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 motion-reduce:transition-none"
              >
                <span className="flex items-center gap-3">
                  <FaFileAlt aria-hidden="true" className="text-emerald-200" />

                  <span>
                    <span className="block text-sm font-medium text-white">
                      My résumé
                    </span>

                    <span className="mt-1 block text-xs text-neutral-500">
                      View PDF
                    </span>
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="text-emerald-200 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  ↗
                </span>
              </a>
            </div>
          </motion.aside>
        </div>

        <p className="mt-10 text-center text-xs leading-6 text-neutral-500">
          Good conversations can lead to great things.
        </p>
      </div>
    </main>
  );
}
