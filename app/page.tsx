import AboutMe from "@/components/home/about-me";
import Hero from "@/components/home/Hero";
import SelectedProjects from "@/components/home/selected-projects";

export default function Home() {
  return (
    <div>
      <Hero />

      <AboutMe />

      <SelectedProjects />
    </div>
  );
}
