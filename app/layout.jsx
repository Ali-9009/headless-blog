import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";


import { Montserrat } from "next/font/google";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://saeedahmedashrafi.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Saeed Ahmed Ashrafi",
    template: "%s | Saeed Ahmed Ashrafi",
  },

  description:
    "Official website of Saeed Ahmed Ashrafi featuring articles, writings, reflections and educational content.",

  applicationName: "Saeed Ahmed Ashrafi",

  authors: [
    {
      name: "Saeed Ahmed Ashrafi",
      url: SITE_URL,
    },
  ],

  creator: "Saeed Ahmed Ashrafi",
  publisher: "Saeed Ahmed Ashrafi",

  openGraph: {
    type: "website",
    locale: "ur_PK",
    url: SITE_URL,
    siteName: "Saeed Ahmed Ashrafi",
    title: "Saeed Ahmed Ashrafi",
    description:
      "Articles, writings, reflections and educational content by Saeed Ahmed Ashrafi.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Saeed Ahmed Ashrafi",
    description:
      "Articles, writings, reflections and educational content by Saeed Ahmed Ashrafi.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ur"
      data-scroll-behavior="smooth"
    >
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />

        <WhatsAppWidget />
      </body>
    </html>
  );
}