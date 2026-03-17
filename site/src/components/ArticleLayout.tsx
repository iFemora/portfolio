"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticleLayout({ title, date, readTime, children }: Props) {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-16">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          <ArrowLeft size={14} /> All writing
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[680px] mb-16"
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs text-[var(--muted)]">{formatDate(date)}</span>
          <span className="text-xs text-[var(--border)]">·</span>
          <span className="text-xs text-[var(--muted)]">{readTime}</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-medium text-[var(--text)] leading-tight">
          {title}
        </h1>
      </motion.div>

      {/* Divider */}
      <div className="h-px bg-[var(--border)] mb-16" />

      {/* Body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-[680px] prose-content"
      >
        {children}
      </motion.div>

      {/* Footer */}
      <div className="mt-24 pt-12 border-t border-[var(--border)]">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          <ArrowLeft size={14} /> Back to writing
        </Link>
      </div>
    </div>
  );
}
