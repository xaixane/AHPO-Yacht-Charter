import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";

export const metadata: Metadata = {
  title: {
    default: "VELANTIS YACHTS | Set Sail Beyond The Map",
    template: "%s | VELANTIS YACHTS",
  },
  description: "A handpicked portfolio of world-class superyachts, motor yachts, sailing vessels, and expedition explorers.",
  metadataBase: new URL("https://velantisyachts.com"),
  keywords: [
    "superyacht charter",
    "luxury yacht charter",
    "mega yacht rentals",
    "mediterranean charter",
    "caribbean luxury yachts",
    "VELANTIS yachts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased font-sans bg-white text-[#0F0F0E] min-h-screen flex flex-col selection:bg-[#0F0F0E] selection:text-white"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
