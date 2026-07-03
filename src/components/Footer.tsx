import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-edge py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-ink-faint sm:flex-row">
        <p>© 2026 {profile.name}</p>
        <p className="font-mono text-xs">Built with Next.js & Tailwind CSS</p>
        <div className="flex gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
