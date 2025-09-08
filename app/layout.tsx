// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

// Local fonts
const futura = localFont({
  src: "../assets/fonts/FuturaLT-Book.woff2",
  variable: "--font-futura",
});

const lemonMilk = localFont({
  src: "../assets/fonts/LemonMilk.woff2",
  variable: "--font-lemon",
});

const mrSiv = localFont({
  src: "../assets/fonts/mrsiv.woff2",
  variable: "--font-mrsiv",
});

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
      <body
        className={`${futura.variable} ${lemonMilk.variable} ${mrSiv.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
