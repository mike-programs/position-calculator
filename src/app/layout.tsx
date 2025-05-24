import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";;
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"]
})

const inter = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Position Calculator",
  description: "A tool to help calculate positions to take trading in crypto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
