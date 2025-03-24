import { Provider } from "@/components/ui/provider"
import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Code_Pro, Oxanium } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceCodePro.variable} ${geistSans.variable} ${geistMono.variable} ${oxanium.variable} dark`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
