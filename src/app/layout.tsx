import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/LenisProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { MouseGlow } from "@/components/MouseGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akash Soni — Backend Engineer · AI Infrastructure",
  description:
    "Backend Engineer with 3.4+ years of experience building scalable backend architectures, high-performance API integrations, and event-driven distributed systems. AWS Certified Solutions Architect. Java · Spring Boot · Kafka · Redis · FastAPI.",
  keywords: [
    "Backend Engineer",
    "AI Infrastructure",
    "Distributed Systems",
    "Java Developer",
    "Spring Boot",
    "AWS Certified Solutions Architect",
    "Kafka",
    "Redis",
    "Microservices",
    "Cloud Native",
    "FastAPI",
  ],
  authors: [{ name: "Akash Soni" }],
  openGraph: {
    title: "Akash Soni — Backend Engineer · AI Infrastructure",
    description: "Building scalable distributed systems and AI-ready backend infrastructures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          inter.variable,
          jetbrainsMono.variable,
          geist.variable,
        )}
      >
        <LenisProvider>
          <CustomCursor />
          <MouseGlow />
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
