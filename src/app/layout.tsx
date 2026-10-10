import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import ScrollToTop from "@/components/ScrollToTop";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Investor Space",
    template: "%s | Investor Space",
  },
  description:
    "Buy title-clear, government-approved plots in Dholera SIR. We handle verification, documentation and resale support for a safer investment.",
  keywords: "Dholera SIR plots, government approved plots, Dholera investment, real estate Gujarat, DSIRDA approved",
  authors: [{ name: "Investor Space" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/images/logo1.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo1.png",
  },
  openGraph: {
    type: "website",
    siteName: "Investor Space",
    title: "Investor Space | Government-Approved Plots in Dholera SIR",
    description: "Title-clear, DSIRDA-compliant plots with transparent pricing and full investor support.",
    url: "https://investor-space.vercel.app",
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
      className={`${dmSans.variable} ${playfair.variable}`}
    >
      <body className="min-h-full font-sans antialiased text-foreground">
        <SmoothScroll>
          <Preloader />
          <Navbar />
          <ScrollToTop />
          {children}
          <FloatingContactWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}