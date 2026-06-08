import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center gap-8 px-6 text-center">
      <Image
        src="/profile.jpg"
        alt="Shreyansh Rai"
        width={180}
        height={180}
        className="rounded-full border-4 border-gray-800 shadow-2xl transition hover:scale-105"
      />

      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Shreyansh Rai
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
          I build end-to-end web applications with Next.js, React, Node.js, Express, Postgresql, and MongoDB, with a particular interest in backend systems and performance.
        </p>
      </div>

      <div className="flex gap-4">
        <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
          View Projects
        </button>

        <button className="rounded-xl border border-gray-700 px-6 py-3 transition hover:bg-gray-900">
          Contact Me
        </button>
      </div>
    </section>
  );
}