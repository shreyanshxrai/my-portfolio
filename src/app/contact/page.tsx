"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="mb-4 text-5xl font-bold">
          Contact
        </h1>

        <p className="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
          Feel free to reach out for opportunities,
          collaborations, or just to connect.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            h-full
            rounded-3xl
            border
            border-gray-200
            dark:border-gray-800
            p-8
          "
        >
          <h2 className="mb-6 text-2xl font-semibold">
            Send a Message
          </h2>

          <form
            action="https://formspree.io/f/xojzdevp"
            method="POST"
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                dark:border-gray-700
                bg-transparent
                px-4
                py-3
                outline-none
                focus:border-gray-500
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                dark:border-gray-700
                bg-transparent
                px-4
                py-3
                outline-none
                focus:border-gray-500
              "
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                dark:border-gray-700
                bg-transparent
                px-4
                py-3
                outline-none
                resize-none
                focus:border-gray-500
              "
            />

            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-black
                py-3
                font-medium
                text-white
                transition
                hover:opacity-90
                dark:bg-white
                dark:text-black
              "
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            h-full
            rounded-3xl
            border
            border-gray-200
            dark:border-gray-800
            p-8
          "
        >
          <h2 className="mb-6 text-2xl font-semibold">
            Connect With Me
          </h2>

          <p className="mb-8 leading-7 text-gray-500 dark:text-gray-400">
            I'm always open to discussing software
            engineering opportunities, projects,
            collaborations, and interesting ideas.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:shreyanshtalks@gmail.com"
              className="
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-gray-200
                dark:border-gray-800
                p-4
                transition
                hover:bg-gray-50
                dark:hover:bg-gray-900
              "
            >
              <FaEnvelope size={22} />
              <span>shreyanshtalks@gmail.com</span>
            </a>

            <a
              href="https://github.com/shreyanshxrai"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-gray-200
                dark:border-gray-800
                p-4
                transition
                hover:bg-gray-50
                dark:hover:bg-gray-900
              "
            >
              <FaGithub size={22} />
              <span>@shreyanshxrai</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shreyanshxrai/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-gray-200
                dark:border-gray-800
                p-4
                transition
                hover:bg-gray-50
                dark:hover:bg-gray-900
              "
            >
              <FaLinkedin size={22} />
              <span>linkedin.com/in/shreyanshxrai</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-black
                p-4
                font-medium
                text-white
                transition
                hover:opacity-90
                dark:bg-white
                dark:text-black
              "
            >
              <FaFileAlt />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

