import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "GitHub",
    value: "Ahmedimtiaz-github",
    href: profile.github,
  },
  {
    label: "LinkedIn",
    value: "muhammad-ahmed-imtiaz",
    href: profile.linkedin,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="06 · Contact"
            title="Let's build something"
            description={`Based in ${profile.location} · open to junior AI/ML roles, on-site or remote.`}
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 80} className="h-full">
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-edge bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                  {channel.label}
                </p>
                <p className="mt-2 break-all text-sm font-medium group-hover:text-accent-bright transition-colors">
                  {channel.value}
                </p>
                <span className="mt-auto pt-4 font-mono text-xs text-accent-bright opacity-0 group-hover:opacity-100 transition-opacity">
                  Open ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-14 text-center">
          <a
            href={`mailto:${profile.email}?subject=Opportunity%20for%20${encodeURIComponent(
              profile.name
            )}`}
            className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-bright hover:text-base transition-colors"
          >
            Say hello → {profile.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
