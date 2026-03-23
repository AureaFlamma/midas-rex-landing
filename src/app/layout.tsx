import { Provider } from "@/components/ui/provider"
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Source_Code_Pro,
  Oxanium,
  Cinzel,
  Cinzel_Decorative,
  Rubik_80s_Fade,
  Rubik_Glitch,
  Press_Start_2P,
  Audiowide,
} from "next/font/google";
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

const rubik80sFade = Rubik_80s_Fade({
  variable: "--font-rubik-80s-fade",
  subsets: ["latin"],
  weight: "400",
});

const rubikGlitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  subsets: ["latin"],
  weight: "400",
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${cinzelDecorative.variable} ${sourceCodePro.variable} ${geistSans.variable} ${geistMono.variable} ${oxanium.variable} ${rubik80sFade.variable} ${rubikGlitch.variable} ${pressStart2P.variable} ${audiowide.variable} dark`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
