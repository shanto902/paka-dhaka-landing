// app/layout.tsx
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Paka | Mark your Paka Moments! ",
  description:
    "Born in Dhaka in 2023, Paka is an illustrated world where humor, culture, rebellion, and self-love collide in a colorful, cheeky explosion. Paka — meaning (ripe) — reminds us that the juiciest, boldest version of yourself is yet to come, and it only gets better with time. Through playful typography, bright palettes, life-inspired storytelling, exploration of our relationship with our culture down South, Paka brings you fashion, stationery, prints, and everyday trinkets that make you smile, think, and feel seen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
