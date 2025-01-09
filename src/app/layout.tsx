import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Frysinger Senior Front-End Web & Software Developer",
  description: "Front-End Web & Software Development in New York City",
  keywords: [
    "Web Development",
    "Software Development",
    "Front-End",
    "Portfolio",
    "JavaScript",
    "React",
    "Next.js",
    "New York City Web Developer",
    "New Jersey Web Developer",
  ],
  authors: [{ name: "James Frysinger", url: "https://www.jamesfrysinger.com" }],
  openGraph: {
    title: "James Frysinger - Front-End Web & Software Development",
    description:
      "Portfolio showcasing expertise in front-end web and software development.",
    url: "https://www.jamesfrysinger.com",
    siteName: "James Frysinger Portfolio",
    images: [
      {
        url: "https://www.jamesfrysinger.com/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "James Frysinger Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  colorScheme: "light dark",
  robots: "index, follow",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-[570px] text-[1rem] md:text-[1.125rem]`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-EBQC018TBM" />
    </html>
  );
};

export default RootLayout;
