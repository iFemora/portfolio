"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const caseStudies = [
  {
    slug: "fcmb-cib",
    title: "FCMB Corporate Internet Banking",
    description:
      "Redesigned the onboarding and approval flows for a corporate banking platform serving hundreds of businesses. Cut onboarding from 10 days to 3 and drove a 3× increase in platform revenue.",
    tags: ["Banking", "B2B", "Operations", "Nigeria"],
    year: "2024",
    role: "Lead Product Manager",
    outcomes: ["3× revenue growth", "10 → 3 day onboarding", "7 → 2 manual approval steps"],
  },
  {
    slug: "payments-platform",
    title: "Payments & Onboarding Platform",
    description:
      "Built a developer-friendly payment collection API for African SMEs. Designed the onboarding funnel, API architecture decisions, multi-currency flow, and the operational dashboard for settlement management.",
    tags: ["Payments", "API", "SME", "Fintech"],
    year: "2023",
    role: "Product Manager",
    outcomes: ["99.95% uptime", "6-market multi-currency", "Sub-24hr merchant activation"],
  },
];

export default function WorkPage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">
          Case Studies
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--text)] leading-tight max-w-[560px]">
          Work I&apos;ve done that actually mattered.
        </h1>
      </motion.div>

      <motion.div
        className="space-y-16"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {caseStudies.map((item, i) => (
          <motion.div
            key={item.slug}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/work/${item.slug}`} className="group block">
              <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">
                {/* Main content */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[var(--muted)] uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium text-[var(--text)] mb-3 group-hover:opacity-70 transition-opacity leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-base text-[var(--muted)] leading-relaxed mb-5 max-w-[520px]">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] group-hover:gap-3 transition-all duration-200">
                    Read case study <ArrowRight size={14} />
                  </span>
                </div>

                {/* Outcomes */}
                <div className="border border-[var(--border)] rounded-lg p-5">
                  <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider mb-3">
                    Outcomes
                  </p>
                  <ul className="space-y-2">
                    {item.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="text-sm text-[var(--text)] font-medium"
                      >
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--muted)]">{item.role}</p>
                    <p className="text-xs text-[var(--muted)]">{item.year}</p>
                  </div>
                </div>
              </div>
            </Link>

            {i < caseStudies.length - 1 && (
              <div className="mt-16 h-px bg-[var(--border)]" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
