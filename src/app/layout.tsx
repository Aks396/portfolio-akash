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
  title: "Akash Soni | Backend Engineer · AI Infrastructure · Distributed Systems",
  description:
    "Senior Backend Engineer with 3+ years building scalable cloud-native systems, AI-powered platforms, and event-driven microservices. AWS Certified Solutions Architect. Java · Spring Boot · Kafka · Redis · FastAPI.",
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
    "FHIR R4",
  ],
  authors: [{ name: "Akash Soni" }],
  openGraph: {
    title: "Akash Soni — Backend Engineer · AI Infrastructure",
    description: "Building scalable cloud-native systems and AI-powered platforms.",
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
