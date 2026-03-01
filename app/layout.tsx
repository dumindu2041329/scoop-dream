import type { Metadata } from "next";
import { Playfair_Display, DM_Serif_Display, Lora, DM_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ThemeTimeSync } from "@/components/ui/ThemeTimeSync";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  weight: "400",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "ScoopDream — Artisan Ice Cream, Crafted With Love",
  description:
    "Handcrafted with local cream, seasonal fruit, and an unreasonable amount of love. 47 flavors, zero shortcuts. Discover your next favorite scoop.",
  keywords: [
    "ice cream",
    "artisan",
    "handcrafted",
    "premium",
    "gelato",
    "sorbet",
    "ScoopDream",
  ],
  openGraph: {
    title: "ScoopDream — Artisan Ice Cream",
    description: "47 flavors. Zero shortcuts. Pure indulgence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${dmSerifDisplay.variable} ${lora.variable} ${dmMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ThemeTimeSync />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
