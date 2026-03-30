import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Akash Soni | Senior Backend Engineer | Java, Spring Boot, AI-Ready Systems",
  description: "Senior Backend Engineer with 3+ years experience. AWS Certified Solutions Architect specializing in scalable microservices, real-time Kafka pipelines, and AI-supportive data infrastructure.",
  keywords: ["Senior Backend Engineer", "Java Developer", "Spring Boot Engineer", "AWS Certified Solutions Architect Associate", "SAA-C03", "AI Infrastructure", "Semantic Retrieval", "Data Pipelines", "Microservices Architect", "System Design"],
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          firaCode.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
