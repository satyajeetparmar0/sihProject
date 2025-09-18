import Notification from "@/components/Notification";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Cultural Connect - Sikkim Monasteries",
  description: "Digitize and showcase the monasteries of Sikkim for travel and cultural preservation. Explore the rich Buddhist heritage and architectural marvels of the Himalayas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Notification/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
