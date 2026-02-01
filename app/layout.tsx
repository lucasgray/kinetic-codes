import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinetic.codes | Principal Engineer & Technical Leader",
  description:
    "I help startups and scale-ups build reliable systems and high-performing engineering teams. Principal engineer and technical leader available for contract work.",
  keywords: [
    "principal engineer",
    "technical leader",
    "contractor",
    "consultant",
    "software engineer",
    "distributed systems",
    "engineering leadership",
  ],
  authors: [{ name: "Lucas Gray" }],
  openGraph: {
    title: "Kinetic.codes | Principal Engineer & Technical Leader",
    description:
      "I help startups and scale-ups build reliable systems and high-performing engineering teams.",
    url: "https://kinetic.codes",
    siteName: "Kinetic.codes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetic.codes | Principal Engineer & Technical Leader",
    description:
      "I help startups and scale-ups build reliable systems and high-performing engineering teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
