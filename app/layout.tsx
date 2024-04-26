import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Designo",
    default: "Designo",
  },
  description: "Designs and digital branding solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${jost.className}`}>
        {" "}
        <Header />
        {children}
      </body>
    </html>
  );
}
