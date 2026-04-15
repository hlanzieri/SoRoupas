import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Josefin_Sans } from "next/font/google";
import "../styles/globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SÓROUPAS Magazine",
  description: "Moda infantil, juvenil e adulto com as melhores marcas do varejo.",
  icons: {
    icon: "/images/logoBranca.png",
    shortcut: "/images/logoBranca.png",
    apple: "/images/logoBranca.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${josefinSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
