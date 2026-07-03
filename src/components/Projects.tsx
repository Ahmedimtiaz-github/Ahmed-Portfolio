import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, projects, type Project } from "@/data/profile";

function GitHubLink({ project }: { project: Project }) {
  if (!project.github) {
    return <span className="font-mono text-xs text-ink-faint">Internship / private work</span>;
  }
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-xs text-accent-bright hover:text-accent transition-colors"
    >
      GitHub ↗
    </a>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col rounded-2xl border border-edge bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold leading-snug group-hover:text-accent-bright transition-colors">
            {project.title}
          </h3>
          <GitHubLink project={project} />
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-dim">
          {project.description}
        </p>
        {project.highlights && (
          <ul className="mt-4 space-y-1.5 rounded-lg bg-surface-2 p-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="font-mono text-xs text-accent-bright">
                ▸ {highlight}
              </li>
            ))}
          </ul>
        )}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-ink-faint"
            >
              {tech}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

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

        <h3 className="mt-14 mb-6 font-mono text-sm uppercase tracking-widest text-ink-faint">
          More projects
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 80} />
          ))}
        </div>

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
