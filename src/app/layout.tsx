
import Navbar from "@/components/navbar";
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/footer";
import TechStack from "@/components/techstack";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      
      <body>
      <Navbar/>
       <main>{children}</main> 
       <TechStack/>
       <Footer/>
      </body>
    </html>
  );
}
