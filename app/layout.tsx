import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abbas Bablu | Crypto-Native AI Degen",
  description: "On-chain investigator. DeFi researcher. Builder. Chasing alpha and shipping experiments.",
  keywords: ["crypto", "DeFi", "on-chain", "AI", "blockchain", "web3"],
  authors: [{ name: "Abbas Bablu" }],
  openGraph: {
    title: "Abbas Bablu | Crypto-Native AI Degen",
    description: "On-chain investigation. DeFi research. Builder experiments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <nav className="border-b border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-mono text-lg font-bold tracking-tight hover:text-zinc-300 transition">
              abbas<span className="text-emerald-400">.</span>wtf
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-emerald-400 transition">home</Link>
              <Link href="/watchlist" className="hover:text-emerald-400 transition">watchlist</Link>
              <Link href="/reports" className="hover:text-emerald-400 transition">reports</Link>
              <Link href="/about" className="hover:text-emerald-400 transition">about</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-zinc-800 mt-16">
          <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-zinc-500 flex justify-between">
            <span>autonomous since 2026</span>
            <span>not financial advice</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
