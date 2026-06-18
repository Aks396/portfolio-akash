import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { TechStack } from "@/components/TechStack";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { SystemArchitecture } from "@/components/SystemArchitecture";
import { StreamingSecuritySection } from "@/components/StreamingSecuritySection";
import { AICapability } from "@/components/AICapability";
import { Experience } from "@/components/Experience";
import { GithubSection } from "@/components/GithubSection";
import { CertificationsSkills } from "@/components/CertificationsSkills";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <AboutSection />
            <TechStack />
            <ArchitectureSection />
            <SystemArchitecture />
            <StreamingSecuritySection />
            <AICapability />
            <Experience />
            <GithubSection />
            <CertificationsSkills />
            <ContactSection />
            <Footer />
        </main>
    );
}
