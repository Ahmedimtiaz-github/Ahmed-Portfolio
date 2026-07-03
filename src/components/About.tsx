import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about, education } from "@/data/profile";

export default function About() {
  const currentDegree = education[0];

  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="01 · About" title="From notebooks to production" />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="leading-relaxed text-ink-dim">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-edge bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Currently
              </p>
              <p className="mt-3 font-semibold">{currentDegree.degree}</p>
              <p className="mt-1 text-sm text-ink-dim">{currentDegree.institution}</p>
              <p className="mt-1 font-mono text-sm text-accent-bright">
                {currentDegree.period}
              </p>
              <hr className="my-5 border-edge" />
              <p className="text-sm leading-relaxed text-ink-dim">
                Focused on LLM/RAG systems, voice AI and shipping models behind clean,
                documented APIs.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
