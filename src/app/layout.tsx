import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "./components/organisms/header";
import Footer from "./components/organisms/footer";
import { getDbData } from "@/lib/data-fetcher";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  title: "Pangasinan Heritage",
  description:
    "Pangasinan Heritage is a website dedicated to showcasing the rich cultural heritage of the Pangasinan region in the Philippines.",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getDbData();
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer articles={data.articles} />
      </body>
    </html>
  );
}
