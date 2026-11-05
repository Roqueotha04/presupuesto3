import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";

const headingFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-heading-face",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body-face",
  display: "swap",
});

const { site, client, seo } = siteConfig;
const locale = site.defaultLocale;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.title[locale],
  description: seo.description[locale],
  robots: { index: false, follow: false },
  openGraph: {
    title: seo.title[locale],
    description: seo.description[locale],
    url: site.url,
    siteName: client.name,
    locale,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#202326",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="tone-light min-h-full font-body">
        <MotionProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
