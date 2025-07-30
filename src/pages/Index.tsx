import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProjectGrid />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
