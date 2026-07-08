import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Labub — Time completo de tecnologia",
  description: "Frontend, Backend, UX Design e DevOps em um único time integrado. Da ideia ao deploy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-bg text-[#f0f0f0] antialiased">{children}</body>
    </html>
  );
}
