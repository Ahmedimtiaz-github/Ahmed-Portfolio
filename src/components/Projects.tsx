import MoreProjects from "@/components/MoreProjects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, projects } from "@/data/profile";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="04 · Projects"
            title="Selected work"
            description="Case studies with real metrics where I have them — accuracy, AUC and hit-rate, not just screenshots."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 100} />
          ))}
        </div>

        <MoreProjects />

        <Reveal className="mt-10 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent-bright hover:text-accent transition-colors"
          >
            See everything on GitHub ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
