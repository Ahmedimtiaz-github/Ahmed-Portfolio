"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/profile";

/** Collapsed-by-default grid of non-featured projects with an expand toggle. */
export default function MoreProjects() {
  const [expanded, setExpanded] = useState(false);
  const more = projects.filter((p) => !p.featured);

  return (
    <div className="mt-14">
      <div className="text-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="rounded-full border border-edge-bright px-6 py-2.5 text-sm font-medium text-ink hover:border-accent hover:text-accent-bright transition-colors"
        >
          {expanded ? "Hide more projects ↑" : `Show ${more.length} more projects ↓`}
        </button>
      </div>

      <div
        className={`grid transition-all duration-500 ease-out ${
          expanded ? "mt-8 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
