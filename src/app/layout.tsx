import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ClientBody from "./ClientBody";

// Load Inter font which is similar to Apple's San Francisco font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apple-portfolio.vercel.app"),
  title: "Apple-Grade Portfolio",
  description: "A personal portfolio inspired by Apple's design principles and Supabase's layout",
  keywords: ["portfolio", "apple design", "developer", "web development"],
  authors: [
    {
      name: "Your Name",
      url: "https://yourportfolio.com",
    },
  ],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Apple-Grade Portfolio",
    description: "A personal portfolio inspired by Apple's design principles and Supabase's layout",
    siteName: "Apple-Grade Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apple-Grade Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apple-Grade Portfolio",
    description: "A personal portfolio inspired by Apple's design principles and Supabase's layout",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
