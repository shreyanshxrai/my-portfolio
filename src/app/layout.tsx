import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Shreyansh Rai | Backend & Applied AI Engineer",
    template: "%s | Shreyansh Rai",
  },
  description:
    "Explore Shreyansh Rai's projects in backend engineering, full-stack development, scalable systems, and applied AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0b] text-white antialiased">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-emerald-200 px-4 py-3 font-medium text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
