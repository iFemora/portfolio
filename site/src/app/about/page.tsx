"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const values = [
  {
    title: "Substance over signal",
    body: "I build things that work for the people using them — not things that look impressive in a deck. Good product work is invisible to the user.",
  },
  {
    title: "Own the constraints",
    body: "Regulation, legacy systems, and budget limits are real. I don't pretend they don't exist — I find the best possible path through them.",
  },
  {
    title: "Make the tradeoffs visible",
    body: "Every product decision involves tradeoffs. My job is to make sure the right people understand what they are before a decision gets made.",
  },
  {
    title: "Write to think",
    body: "If I can't explain a problem clearly in writing, I don't understand it well enough. I write to sharpen my thinking, not to document decisions already made.",
  },
];

const timeline = [
  {
    period: "2024 – Present",
    role: "Lead Product Manager",
    company: "First City Monument Bank (FCMB)",
    detail: "Leading product for the Corporate Internet Banking platform. Responsible for onboarding, approval workflows, and the transaction management experience for corporate clients.",
  },
  {
    period: "2022 – 2023",
    role: "Product Manager",
    company: "Payments Startup (NDA)",
    detail: "First PM hire. Built the payment collection API and merchant onboarding flow from 0→1. Launched in 6 African markets within 12 months.",
  },
  {
    period: "2020 – 2022",
    role: "Associate Product Manager",
    company: "Financial Services (Lagos)",
    detail: "Started as APM, moved to sole PM within 14 months. Focused on customer-facing tools for retail banking and internal operations products.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[680px] mb-24"
      >
        <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">
          About
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--text)] leading-tight mb-8">
          I make financial infrastructure feel like it was built for humans.
        </h1>
        <p className="text-base text-[var(--text)] leading-relaxed mb-5">
          I&apos;m Femi Siji-Kenneth — a product manager based in Lagos, working at the
          intersection of payments, financial services, and the operational complexity
          that comes with moving real money at scale.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-5">
          My background spans B2B banking platforms, developer-facing payment APIs,
          and the internal operational tools that keep financial products running.
          I&apos;ve worked with corporate treasury teams, SME business owners, and the
          engineers who build on payment infrastructure — and I&apos;ve learned that all
          of them have the same core frustration: systems built for compliance rather
          than use.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
          Before moving into product, I spent time on the operations side of financial
          services — which is why I understand the constraints that make &ldquo;just make it
          simpler&rdquo; harder than it sounds. Settlement windows, KYB requirements,
          multi-bank reconciliation, and scheme rules aren&apos;t bureaucracy for its own
          sake. Understanding why they exist is what lets you build around them
          intelligently.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed">
          Outside of work: I play tennis seriously (working toward competitive amateur
          tournaments), I read more non-fiction than I should, and I&apos;m currently
          thinking through how AI tooling changes the shape of operational product work.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="h-px bg-[var(--border)] mb-24" />

      {/* Values */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-24"
      >
        <h2 className="font-serif text-2xl font-medium text-[var(--text)] mb-10">
          How I think about product work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="font-semibold text-[var(--text)] text-sm mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Divider */}
      <div className="h-px bg-[var(--border)] mb-24" />

      {/* Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-24"
      >
        <h2 className="font-serif text-2xl font-medium text-[var(--text)] mb-10">
          Experience
        </h2>
        <div className="space-y-10">
          {timeline.map((item) => (
            <div key={item.period} className="grid md:grid-cols-[200px_1fr] gap-4">
              <p className="text-sm text-[var(--muted)] pt-0.5">{item.period}</p>
              <div>
                <p className="font-semibold text-[var(--text)] text-sm mb-0.5">
                  {item.role}
                </p>
                <p className="text-sm text-[var(--muted)] mb-2">{item.company}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Divider */}
      <div className="h-px bg-[var(--border)] mb-16" />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <p className="text-base font-medium text-[var(--text)] mb-1">
            Want to work together?
          </p>
          <p className="text-sm text-[var(--muted)]">
            I&apos;m open to senior PM and product leadership roles in payments and fintech.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] whitespace-nowrap hover:gap-3 transition-all duration-200"
        >
          Get in touch <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  );
}
