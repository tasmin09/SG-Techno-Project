import NavigationBar from "@/components/NavigationBar/NavigationBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import logo from "@/app/opengraph-image.png";
import SmoothScrolling from "@/components/SmoothScrolling";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SG Technofab",
  description:
    "Welcome to SG Technofab, we are dedicated to providing top-notch heating, ventilation, and air conditioning solutions. Our experienced team of professionals delivers tailored HVAC systems for residential, commercial, and industrial settings. We prioritize quality, customer satisfaction, and cutting-edge technology to ensure maximum comfort and efficiency.",
  metadataBase: new URL("https://sgtechnofab.com"),
  openGraph: {
    title: "SG Technofab",
    description:
      "Welcome to SG Technofab, we are dedicated to providing top-notch heating, ventilation, and air conditioning solutions. Our experienced team of professionals delivers tailored HVAC systems for residential, commercial, and industrial settings. We prioritize quality, customer satisfaction, and cutting-edge technology to ensure maximum comfort and efficiency.",
    url: "https://sgtechnofab.com",
    siteName: "SG Technofab",
    images: [
      {
        url: logo.src,
        width: 800,
        height: 600,
      },
      {
        url: logo.src,
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavigationBar />
      <body>
      <SmoothScrolling>{children}</SmoothScrolling>
        </body>
      <Footer />
    </html>
  );
}
