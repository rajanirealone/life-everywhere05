import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Life Everywhere",
  description: "Connect with the world. Experience life everywhere.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-inter min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-[72px] lg:pt-[88px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
