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
  title: "Akash Soni | AWS-Certified Healthcare Backend & Streaming Architect",
  description: "Senior Backend Engineer specializing in secure healthcare microservices, FHIR R4 interoperability, and AI-driven document processing systems.",
  keywords: ["AWS Certified", "Healthcare IT", "FHIR R4", "Spring Boot", "Kafka", "Data Streaming", "Backend Architect"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          firaCode.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
