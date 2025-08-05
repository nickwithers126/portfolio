import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-[#E9FCFF] mb-6">projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {allProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </main>
  );
}
