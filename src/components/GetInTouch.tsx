"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

/**
 * "Get in touch" button that toggles a message form.
 * Submitting opens the visitor's mail client with the message pre-filled,
 * so the site needs no form backend.
 */
export default function GetInTouch() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio contact from ${name || "a visitor"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="text-center">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-bright hover:text-base transition-colors"
      >
        {open ? "Close form ×" : "Get in touch"}
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "mt-8 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl rounded-2xl border border-edge bg-surface p-6 text-left sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-ink-faint">
                  Name
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-edge bg-surface-2 px-3.5 py-2.5 text-sm placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-ink-faint">
                  Email
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-edge bg-surface-2 px-3.5 py-2.5 text-sm placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-ink-faint">
                Message
              </span>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, role or idea…"
                className="w-full resize-y rounded-lg border border-edge bg-surface-2 px-3.5 py-2.5 text-sm placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors"
              />
            </label>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-ink-faint">
                Opens your mail app with the message ready to send.
              </p>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-bright hover:text-base transition-colors"
              >
                Send message →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
