import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "James Frysinger",
  description: "Front-End Web & Software Development",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`antialiased md:text-[20px]`}>{children}</body>
    </html>
  );
};

export default RootLayout;
