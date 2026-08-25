import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Aspacity — Building Technology for Tomorrow",
  description:
    "Aspacity builds technology products that connect people, creativity, and intelligent tools across the physical spaces shaping how we live and work.",
  keywords: [
    "Aspacity",
    "PaintIT Studio",
    "3D Spatial Technology",
    "Interior Design Software",
    "Painter Visualization Tools",
    "Generative AI Materials",
    "Trade Ecosystems",
  ],
  authors: [{ name: "Aspacity Technology Inc." }],
  openGraph: {
    title: "Aspacity — Building Technology for Tomorrow",
    description:
      "Aspacity builds technology products that connect people, creativity, and intelligent tools.",
    url: "https://aspacity.com",
    siteName: "Aspacity",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspacity — Building Technology for Tomorrow",
    description:
      "Aspacity builds technology products connecting people, creativity, and intelligent tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-brand-charcoal min-h-screen flex flex-col antialiased selection:bg-brand-orange selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
