import Image from "next/image";
import { profile, stats } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="hero-glow relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          {profile.openToWork && (
            <span className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-3.5 py-1.5 text-xs font-medium text-ink-dim">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to junior AI/ML roles
            </span>
          )}

          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            {profile.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
              {profile.name.split(" ").slice(-1)}
            </span>
          </h1>

          <p className="mt-3 font-mono text-lg text-accent-bright">{profile.tagline}</p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-dim">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-bright hover:text-base transition-colors"
            >
              View my work
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-edge-bright px-6 py-3 text-sm font-semibold text-ink hover:border-accent hover:text-accent-bright transition-colors"
            >
              Download resume ↓
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold text-accent-bright">{stat.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-ink-faint">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-64 sm:w-80 lg:w-full lg:max-w-sm">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent-deep via-accent/40 to-accent-bright/30 blur-xl opacity-60" />
          <div className="relative overflow-hidden rounded-3xl border border-edge-bright">
            <Image
              src="/profile.jpg"
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={800}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
