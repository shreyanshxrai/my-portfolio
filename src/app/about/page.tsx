export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <div className="space-y-8">
        <h1 className="text-5xl font-bold">About Me</h1>

        <p className="text-lg leading-8 text-gray-400">
         I am an IT engineering student passionate about backend and full-stack development. I enjoy designing scalable systems, building APIs, and developing modern web applications using Node.js, Express.js, PostgreSQL, MongoDB, React, and Next.js. I focus on writing clean, efficient code and creating reliable backend architectures that power seamless user experiences.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              Frontend
            </h2>
            <p className="text-gray-400">
              Next.js, React, Tailwind CSS, Responsive Design
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              Backend
            </h2>
            <p className="text-gray-400">
              Node.js, Express.js, Hono, REST APIs, Authentication
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              Database
            </h2>
            <p className="text-gray-400">
              MongoDB, Postges. </p>
          </div>
        </div>
      </div>
    </main>
  );
}