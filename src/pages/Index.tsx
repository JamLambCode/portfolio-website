import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { skills, projects, experience } from "@/data/portfolioData";
import nyuImage from "/images/grad.jpeg";

const Index = () => {
  const { scrollY } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navigation />
      <HeroSection scrollY={scrollY} />
      <AboutSection scrollY={scrollY} skills={skills} />
      <ExperienceSection scrollY={scrollY} experience={experience} />
      <ProjectsSection scrollY={scrollY} projects={projects} />
      <EducationSection scrollY={scrollY} nyuImage={nyuImage} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
