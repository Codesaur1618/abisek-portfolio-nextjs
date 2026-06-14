import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/effects/page-transition";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { Particles } from "@/components/effects/particles";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { ResearchSection } from "@/components/sections/research";
import { PublicationsSection } from "@/components/sections/publications";
import { CertificationsSection } from "@/components/sections/certifications";
import { AchievementsSection } from "@/components/sections/achievements";
import { TechStackSection } from "@/components/sections/tech-stack";
import { GitHubSection } from "@/components/sections/github";
import { EducationSection } from "@/components/sections/education";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Particles />
      <Navbar />
      <main>
        <PageTransition>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ResearchSection />
          <PublicationsSection />
          <CertificationsSection />
          <AchievementsSection />
          <TechStackSection />
          <GitHubSection />
          <EducationSection />
          <TestimonialsSection />
          <ContactSection />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
