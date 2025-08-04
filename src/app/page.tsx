import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <main className="mb-20">
      <Intro />
      <Experience />
      <FeaturedProjects />
    </main>
  );
}
