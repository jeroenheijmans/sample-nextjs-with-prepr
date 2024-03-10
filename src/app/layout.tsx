import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS with Prepr Sample",
  description: "Example application for NextJS with Prepr",
  authors: { name: "Jeroen Heijmans" },
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col items-center">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
