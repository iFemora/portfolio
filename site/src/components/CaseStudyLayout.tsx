"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface Outcome {
  label: string;
  value: string;
}

interface Props {
  title: string;
  role: string;
  year: string;
  company: string;
  tags: string[];
  outcomes: Outcome[];
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  title,
  role,
  year,
  company,
  tags,
  outcomes,
  children,
}: Props) {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-16">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          <ArrowLeft size={14} /> All work
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[var(--muted)] uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--text)] leading-tight max-w-[680px] mb-6">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--muted)]">
          <span>{company}</span>
          <span className="text-[var(--border)]">·</span>
          <span>{role}</span>
          <span className="text-[var(--border)]">·</span>
          <span>{year}</span>
        </div>
      </motion.div>

      {/* Outcomes strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] rounded-lg overflow-hidden mb-20"
      >
        {outcomes.map((outcome) => (
          <div
            key={outcome.label}
            className="bg-[var(--bg)] p-5"
          >
            <p className="font-serif text-3xl font-medium text-[var(--text)] mb-1">
              {outcome.value}
            </p>
            <p className="text-xs text-[var(--muted)] uppercase tracking-wider">
              {outcome.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="h-px bg-[var(--border)] mb-16" />

      {/* Body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-[680px] prose-content"
      >
        {children}
      </motion.div>

      {/* Footer nav */}
      <div className="mt-24 pt-12 border-t border-[var(--border)]">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          <ArrowLeft size={14} /> Back to all work
        </Link>
      </div>
    </div>
  );
}
