/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { auth } from "@clerk/nextjs/server";
import Footer from "@/components/Footer";
import ToastProvider from "@/providers/ToastProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blue World Vapes",
  description: "Smoke and Live",
};

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ToastProvider />
          {/* <img
            src="/img/hero.svg"
            className="absolute -z-10 top-0 right-0 w-full md:w-[60%]"
            alt=""
          /> */}
          <Header userId={userId} />

          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
export default RootLayout;
