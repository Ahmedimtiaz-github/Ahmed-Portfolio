import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { marqueeSkills, skillGroups } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="02 · Skills"
            title="Tools I work with"
            description="The stack I reach for when taking a model from experiment to deployed service."
          />
        </Reveal>
      </div>

      {/* Scrolling marquee */}
      <Reveal>
        <div className="marquee-mask overflow-hidden border-y border-edge bg-surface/50 py-4">
          <div className="flex w-max animate-marquee gap-4 pr-4">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="whitespace-nowrap rounded-full border border-edge bg-surface px-4 py-1.5 font-mono text-sm text-ink-dim"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 100}>
            <div className="h-full rounded-2xl border border-edge bg-surface p-6 hover:border-edge-bright transition-colors">
              <h3 className="font-semibold text-accent-bright">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-ink-dim"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
