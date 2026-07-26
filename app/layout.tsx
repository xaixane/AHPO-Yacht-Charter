import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: {
    default: "AHPO YACHTS | Exceptional By Design",
    template: "%s | AHPO YACHTS",
  },
  description: "A handpicked portfolio of world-class superyachts, motor yachts, sailing vessels, and expedition explorers.",
  metadataBase: new URL("https://ahpoyachts.com"),
  keywords: [
    "superyacht charter",
    "luxury yacht charter",
    "mega yacht rentals",
    "mediterranean charter",
    "caribbean luxury yachts",
    "AHPO yachts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-white text-[#0F0F0E] min-h-screen flex flex-col selection:bg-[#0F0F0E] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
