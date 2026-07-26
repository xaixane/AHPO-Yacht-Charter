import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AHPO Yachts | Sail Beyond The Ordinary",
  description: "Private yacht charters crafted around you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
