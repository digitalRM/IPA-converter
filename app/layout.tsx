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
  title: "IPA Converter | English to International Phonetic Alphabet",
  description:
    "Convert English text to International Phonetic Alphabet (IPA) notation. A modern, fast, and accurate IPA conversion tool.",
  keywords: [
    "IPA",
    "phonetics",
    "linguistics",
    "converter",
    "English",
    "pronunciation",
    "transcription",
  ],
  authors: [{ name: "Ruslan Mukhamedvaleev" }],
  creator: "Ruslan Mukhamedvaleev",
  publisher: "Ruslan Mukhamedvaleev",
  openGraph: {
    title: "IPA Converter | English to International Phonetic Alphabet",
    description:
      "Convert English text to International Phonetic Alphabet (IPA) notation",
    type: "website",
    locale: "en_US",
    siteName: "IPA Converter",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPA Converter | English to International Phonetic Alphabet",
    description:
      "Convert English text to International Phonetic Alphabet (IPA) notation",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
