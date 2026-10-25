import { SITE_URL } from "@/lib/site";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Embroswil | Studio de produits numériques",
    template: "%s",
  },
  description:
    "Embroswil conçoit, développe et met sur le marché ses propres produits numériques : plateformes web, applications et outils d'IA.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Embroswil",
    images: [{ url: "/images/og-embroswil.jpg", width: 1200, height: 630, alt: "Embroswil, studio de produits numériques" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-embroswil.jpg"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="fr">

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
