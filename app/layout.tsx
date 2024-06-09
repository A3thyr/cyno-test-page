import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "CYNO",
  description: "Created by Aetherys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="!scroll-smooth border-black">
      <body className={`${montserrat.className} bg-graybg relative `}>
        {children}
      </body>
    </html>
  );
}
