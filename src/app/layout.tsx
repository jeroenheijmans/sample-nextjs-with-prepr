import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import getClient from "@/services/apollo-client";
import { GetGlobalUI } from "@/queries/get-global-ui";
import GlobalNotificationBar from "@/components/GlobalNotificationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS with Prepr Sample",
  description: "Example application for NextJS with Prepr",
  authors: { name: "Jeroen Heijmans" },
  openGraph: {
    type: "website",
  },
};

async function GetGlobalUIData() {
  const { data } = await getClient().query({
    query: GetGlobalUI,
  });

  return data.GlobalUI;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalUI = await GetGlobalUIData();

  // TODO: Create a demo with globalUI.highlighted_article

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col items-center">
          <Header />
          <GlobalNotificationBar {...globalUI} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
