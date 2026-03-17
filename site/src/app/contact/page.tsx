"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot check
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
    if (honeypot) return;

    setLoading(true);
    // In production this would POST to a form endpoint (Formspree / Resend)
    // For now, simulate submission
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="max-w-[960px] mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[680px]"
      >
        <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">
          Contact
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--text)] leading-tight mb-6">
          Let&apos;s talk.
        </h1>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-16">
          I&apos;m open to conversations about senior PM and product leadership roles in
          payments and fintech, advising early-stage fintech teams, and writing or
          speaking opportunities on payment product topics.
          <br /><br />
          You can also email me directly at{" "}
          <a
            href="mailto:oluwafemiakinseye@gmail.com"
            className="text-[var(--text)] underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            oluwafemiakinseye@gmail.com
          </a>
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-[var(--border)] rounded-lg p-8"
          >
            <p className="font-serif text-xl font-medium text-[var(--text)] mb-2">
              Message sent.
            </p>
            <p className="text-sm text-[var(--muted)]">
              I&apos;ll get back to you within a couple of days.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot */}
            <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-1 focus:ring-[var(--text)] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-1 focus:ring-[var(--text)] transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[var(--text)] mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-1 focus:ring-[var(--text)] transition-colors"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-1 focus:ring-[var(--text)] transition-colors resize-none"
                placeholder="What are you working on? What are you looking for?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] disabled:opacity-50 hover:gap-3 transition-all duration-200"
            >
              {loading ? "Sending..." : "Send message"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
