import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="03 · Experience"
            title="Where I've worked"
            description="Internships, a team-lead role and a competitive fellowship — all hands-on ML delivery."
          />
        </Reveal>

        <ol className="relative space-y-10 border-l border-edge pl-8">
          {experience.map((job, i) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-base ${
                  i === 0 ? "bg-accent-bright" : "bg-edge-bright"
                }`}
              />
              <Reveal delay={i * 80}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">
                    {job.role}
                    <span className="text-ink-dim font-normal"> · {job.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-accent-bright">{job.period}</p>
                </div>
                <ul className="mt-3 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 40)}
                      className="flex gap-3 text-sm leading-relaxed text-ink-dim"
                    >
                      <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-edge bg-surface px-2.5 py-1 font-mono text-xs text-ink-faint"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
