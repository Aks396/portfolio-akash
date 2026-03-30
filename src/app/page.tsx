import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { StreamingSecuritySection } from "@/components/StreamingSecuritySection";
import { CertificationsSkills } from "@/components/CertificationsSkills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ArchitectureSection />
      <StreamingSecuritySection />
      <CertificationsSkills />
      <Footer />
    </div>
  );
}
