import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Femi Siji-Kenneth — Product Manager",
    template: "%s | Femi Siji-Kenneth",
  },
  description:
    "Product Manager with deep experience in payment infrastructure, merchant onboarding, and financial tools for emerging markets.",
  openGraph: {
    title: "Femi Siji-Kenneth — Product Manager",
    description:
      "Product Manager with deep experience in payment infrastructure and fintech for emerging markets.",
    url: "https://femisiji-kenneth.com",
    siteName: "Femi Siji-Kenneth",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Femi Siji-Kenneth — Product Manager",
    description:
      "PM building payment infrastructure for emerging markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
