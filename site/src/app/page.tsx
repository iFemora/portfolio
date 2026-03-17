"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const workItems = [
  {
    slug: "fcmb-cib",
    title: "FCMB Corporate Internet Banking",
    description:
      "Redesigned the onboarding and approval flows for a corporate banking platform serving hundreds of businesses across Nigeria.",
    tags: ["Banking", "B2B", "Operations"],
    year: "2024",
    outcome: "3× revenue · Onboarding 10 → 3 days",
  },
  {
    slug: "payments-platform",
    title: "Payments & Onboarding Platform",
    description:
      "Built the core product for a startup enabling African SMEs to collect payments via a developer-friendly API with multi-currency support.",
    tags: ["Payments", "API", "SME"],
    year: "2023",
    outcome: "99.95% uptime · Multi-currency across 6 markets",
  },
];

const writingItems = [
  {
    slug: "payment-onboarding",
    title: "Why Payment Onboarding Is a Product Problem, Not a Compliance Problem",
    date: "2025-04-15",
  },
  {
    slug: "balancing-user-needs",
    title: "Balancing User Needs & Business Goals Without Losing Either",
    date: "2025-02-10",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Home() {
  return (
    <div className="max-w-[960px] mx-auto px-6">
      {/* Hero */}
      <motion.section
        className="pt-24 pb-24 md:pt-32 md:pb-32"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.p
          className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-6"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          Product Manager
        </motion.p>
        <motion.h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-[var(--text)] leading-[1.1] mb-8 max-w-[680px]"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          I ship payment products that move money reliably.
        </motion.h1>
        <motion.p
          className="text-lg text-[var(--muted)] max-w-[560px] leading-relaxed mb-10"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          I&apos;m Femi Siji-Kenneth — a product manager with deep experience building
          payment infrastructure, merchant onboarding systems, and financial tools
          for businesses operating across emerging markets.
        </motion.p>
        <motion.div
          className="flex items-center gap-6"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] hover:gap-3 transition-all duration-200"
          >
            View my work <ArrowRight size={16} />
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            About me
          </Link>
        </motion.div>
      </motion.section>

      {/* Divider */}
      <div className="h-px bg-[var(--border)]" />

      {/* Selected Work */}
      <section className="py-24">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-serif text-3xl font-medium text-[var(--text)]">
            Selected Work
          </h2>
          <Link
            href="/work"
            className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors flex items-center gap-1"
          >
            All work <ArrowRight size={14} />
          </Link>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          {workItems.map((item) => (
            <motion.div
              key={item.slug}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/work/${item.slug}`} className="group block">
                {/* Thumbnail */}
                <div className="aspect-[16/9] bg-[var(--border)] rounded-lg mb-5 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface)] to-[var(--border)] group-hover:scale-[1.02] transition-transform duration-300 ease-out" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-5xl text-[var(--muted)] opacity-20 select-none">
                      {item.title[0]}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[var(--muted)] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-[var(--border)]">·</span>
                  <span className="text-xs text-[var(--muted)]">{item.year}</span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[var(--text)] mb-2 group-hover:opacity-70 transition-opacity leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-xs font-medium text-[var(--text)] opacity-50 tracking-wide">
                  {item.outcome}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-[var(--border)]" />

      {/* About teaser */}
      <motion.section
        className="py-24 max-w-[680px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-3xl font-medium text-[var(--text)] mb-6">
          About
        </h2>
        <p className="text-base text-[var(--text)] leading-relaxed mb-4">
          I&apos;ve spent my career at the intersection of financial services and product
          thinking — building systems that make money move the way people need it to.
          I care about the unsexy parts: onboarding flows, reconciliation, failure states,
          and the edge cases that only matter when real money is on the line.
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
          I&apos;ve worked with corporate banking clients, developer-focused payment APIs,
          and the operational teams who keep the rails running. I understand what
          compliance actually means at the product layer — and how to translate
          regulatory constraints into features users can live with.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] hover:gap-3 transition-all duration-200"
        >
          More about me <ArrowRight size={16} />
        </Link>
      </motion.section>

      {/* Divider */}
      <div className="h-px bg-[var(--border)]" />

      {/* Writing teaser */}
      <section className="py-24">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-serif text-3xl font-medium text-[var(--text)]">
            Writing
          </h2>
          <Link
            href="/writing"
            className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors flex items-center gap-1"
          >
            All writing <ArrowRight size={14} />
          </Link>
        </div>

        <motion.div
          className="divide-y divide-[var(--border)]"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {writingItems.map((item) => (
            <motion.div
              key={item.slug}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
            >
              <Link
                href={`/writing/${item.slug}`}
                className="group flex items-baseline justify-between gap-6 py-5 hover:opacity-70 transition-opacity"
              >
                <h3 className="font-medium text-[var(--text)] text-base leading-snug">
                  {item.title}
                </h3>
                <span className="text-xs text-[var(--muted)] whitespace-nowrap flex-shrink-0">
                  {formatDate(item.date)}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
