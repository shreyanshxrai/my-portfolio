
import Link from "next/link";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html>
      <body>
        <nav className="flex gap-6 p-4 text-white">
          
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          
        </nav>

        {children}
      </body>
    </html>
  );
}
