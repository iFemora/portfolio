"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const articles = [
  {
    slug: "payment-onboarding",
    title: "Why Payment Onboarding Is a Product Problem, Not a Compliance Problem",
    date: "2025-04-15",
    description:
      "Most fintech companies treat KYB and KYC onboarding as a regulatory checkbox. That's why their activation rates are terrible.",
    readTime: "7 min read",
  },
  {
    slug: "balancing-user-needs",
    title: "Balancing User Needs & Business Goals Without Losing Either",
    date: "2025-02-10",
    description:
      "The framing of 'user needs vs. business goals' is usually a symptom of a deeper problem. Here's how I think about resolving it.",
    readTime: "5 min read",
  },
  {
    slug: "product-discovery",
    title: "How I Approach Product Discovery in Regulated Environments",
    date: "2024-11-20",
    description:
      "Discovery looks different when you're building in financial services. Compliance constraints, legacy systems, and institutional stakeholders change what's possible — and how you find out what matters.",
    readTime: "8 min read",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WritingPage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">
          Writing
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--text)] leading-tight max-w-[560px]">
          Thinking out loud about product and payments.
        </h1>
      </motion.div>

      <motion.div
        className="divide-y divide-[var(--border)]"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {articles.map((article) => (
          <motion.div
            key={article.slug}
            variants={fadeUp}
            transition={{ duration: 0.4 }}
          >
            <Link
              href={`/writing/${article.slug}`}
              className="group block py-10 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-[var(--muted)]">
                  {formatDate(article.date)}
                </span>
                <span className="text-xs text-[var(--border)]">·</span>
                <span className="text-xs text-[var(--muted)]">{article.readTime}</span>
              </div>
              <h2 className="font-serif text-xl md:text-2xl font-medium text-[var(--text)] mb-3 leading-snug max-w-[600px]">
                {article.title}
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed max-w-[560px]">
                {article.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
