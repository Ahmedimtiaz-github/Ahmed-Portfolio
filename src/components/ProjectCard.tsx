import Reveal from "@/components/Reveal";
import { type Project } from "@/data/profile";

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

export default function ProjectCard({ project, delay }: { project: Project; delay: number }) {
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
