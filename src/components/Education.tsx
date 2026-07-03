import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { certifications, education } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="05 · Education" title="Education & certifications" />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <ol className="space-y-6">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={i * 80}>
                <div className="rounded-2xl border border-edge bg-surface p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-semibold">{item.degree}</h3>
                    <p className="font-mono text-sm text-accent-bright">{item.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-ink-dim">{item.institution}</p>
                  {item.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-faint">
                      {item.detail}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200}>
            <div className="rounded-2xl border border-edge bg-surface p-6">
              <h3 className="font-semibold text-accent-bright">Certifications</h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex gap-3 text-sm leading-relaxed text-ink-dim"
                  >
                    <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
