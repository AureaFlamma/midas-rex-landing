import { Provider } from "@/components/ui/provider"
import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Code_Pro, Oxanium, Cinzel, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Midas Rex",
  description: "Aurum imprimi non potest",
};

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


const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${cinzelDecorative.variable} ${sourceCodePro.variable} ${geistSans.variable} ${geistMono.variable} ${oxanium.variable} dark`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
