"use client";

import { motion } from "framer-motion";

export default function NowPage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[680px]"
      >
        <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">
          Now
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-[var(--text)] leading-tight mb-4">
          What I&apos;m doing right now.
        </h1>
        <p className="text-sm text-[var(--muted)] mb-16">
          Last updated: March 2026. Inspired by{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[var(--text)] transition-colors"
          >
            Derek Sivers&apos; /now movement.
          </a>
        </p>

        <div className="space-y-12">
          {/* Work */}
          <section>
            <h2 className="font-serif text-2xl font-medium text-[var(--text)] mb-4">
              Work
            </h2>
            <div className="prose-content">
              <p>
                Leading product for FCMB&apos;s Corporate Internet Banking platform. We&apos;re
                currently in a phase of driving adoption of the features we shipped
                last year — which means a lot of work with the relationship management
                team to understand where clients are still falling back on manual processes
                and why.
              </p>
              <p>
                Separately, I&apos;m spending time on the longer-horizon question of what AI
                tooling means for operational fintech products. The obvious answer is
                &ldquo;automate the manual steps,&rdquo; but I think the more interesting question
                is what new categories of operational visibility become possible when
                you can query a year of transaction data in natural language.
              </p>
            </div>
          </section>

          {/* Learning */}
          <section>
            <h2 className="font-serif text-2xl font-medium text-[var(--text)] mb-4">
              Learning
            </h2>
            <div className="prose-content">
              <p>
                Working through the mechanics of open banking and account-to-account
                payments — specifically how A2A payment flows in the UK (via Open Banking)
                compare to what&apos;s been built (and what hasn&apos;t yet) in West Africa.
              </p>
              <p>
                Reading:{" "}
                <em>The Payments Industry: A Primer</em> by Nuvei, and rereading{" "}
                <em>High Output Management</em> by Andy Grove — which I find more
                relevant to product work every time I read it.
              </p>
            </div>
          </section>

          {/* Outside work */}
          <section>
            <h2 className="font-serif text-2xl font-medium text-[var(--text)] mb-4">
              Outside work
            </h2>
            <div className="prose-content">
              <p>
                Playing tennis seriously again after a two-year gap. Working with a
                coach on serve mechanics and court movement. The goal is competitive
                amateur tournaments by end of year.
              </p>
              <p>
                Trying to write more consistently — this portfolio is part of that.
                Writing is how I figure out what I actually think about something.
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
