import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { TechStack } from "@/components/TechStack";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { SystemArchitecture } from "@/components/SystemArchitecture";
import { GithubSection } from "@/components/GithubSection";
import { Experience } from "@/components/Experience";
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
            <GithubSection />
            <Experience />
            <CertificationsSkills />
            <ContactSection />
            <Footer />
        </main>
    );
}
