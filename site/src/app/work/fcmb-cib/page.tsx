import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "FCMB Corporate Internet Banking",
  description:
    "How I redesigned the onboarding and approval flows for FCMB's corporate banking platform, cutting onboarding from 10 days to 3 and driving 3× revenue growth.",
};

export default function FCMBCaseStudy() {
  return (
    <CaseStudyLayout
      title="FCMB Corporate Internet Banking"
      role="Lead Product Manager"
      year="2024"
      company="First City Monument Bank"
      tags={["Banking", "B2B", "Operations", "Nigeria"]}
      outcomes={[
        { label: "Revenue Growth", value: "3×" },
        { label: "Onboarding Time", value: "10 → 3 days" },
        { label: "Manual Approvals", value: "7 → 2 steps" },
        { label: "Active Corporates", value: "+40% YoY" },
      ]}
    >
      <h2>Context</h2>
      <p>
        FCMB&apos;s Corporate Internet Banking (CIB) platform served hundreds of Nigerian
        businesses — from SMEs to large corporates — managing payroll runs, bulk transfers,
        and treasury operations. By the time I joined, the platform had become a source of
        friction rather than value. Finance directors were calling account managers just to
        approve a single transaction.
      </p>
      <p>
        The core problem wasn&apos;t the technology. It was that the product had been built
        around compliance checklists rather than how corporate treasurers and their teams
        actually worked.
      </p>

      <h2>The Problem</h2>
      <p>
        New corporate clients faced a 10-day onboarding process that required physical
        document submissions, multiple branch visits, and manual approvals at every step.
        Once onboarded, the platform&apos;s transaction approval workflow required 7 sequential
        manual approval steps for standard bulk payments — regardless of transaction size
        or risk profile.
      </p>
      <p>
        The result: high drop-off during onboarding (roughly 35% of applications stalled),
        and active clients spending more time managing the platform than using it. Several
        corporates were reverting to phone-based approvals, which created a compliance
        nightmare for the bank.
      </p>

      <h3>What I learned from users</h3>
      <p>
        I ran structured interviews with 14 finance directors, 8 treasury managers, and
        6 relationship managers over three weeks. A few recurring themes:
      </p>
      <ul>
        <li>
          <strong>Nobody understood why 7 approvals existed.</strong> When I traced the
          workflow back, 4 of the 7 steps were redundant checks added after unrelated
          incidents — never removed.
        </li>
        <li>
          <strong>The onboarding form asked for information the bank already had.</strong>
          Existing clients opening a CIB account for an additional entity had to resubmit
          identity documents already on file for their other accounts.
        </li>
        <li>
          <strong>Risk and convenience were conflated.</strong> A ₦50,000 payroll transfer
          went through the same approval chain as a ₦500 million treasury operation.
        </li>
      </ul>

      <h2>My Approach</h2>
      <p>
        I started by mapping the full onboarding journey from the applicant&apos;s perspective —
        not the bank&apos;s internal process — against what data we actually needed at each
        step and why. This produced a journey map that made the redundancies visible and
        defensible to stakeholders.
      </p>
      <p>
        For the approval workflow, I worked with Compliance and Risk to define a
        transaction risk matrix: transaction value thresholds, counterparty types, and
        frequency patterns determined the approval path. Low-risk, recurring payments
        to pre-approved counterparties could be authorized by a single approver. High-value
        or first-time transactions triggered a higher-tier review.
      </p>

      <h3>The hardest stakeholder conversation</h3>
      <p>
        The Compliance team initially pushed back hard on reducing approval steps.
        Their concern was legitimate: fewer checks meant more exposure if something
        went wrong. I spent two weeks working with them to show that the existing
        7-step chain didn&apos;t actually reduce risk — it just distributed responsibility
        so broadly that nobody felt accountable. The new 2-step model for standard
        transactions was cleaner, more auditable, and put clear ownership on named
        approvers.
      </p>
      <p>
        The breakthrough was a pilot design: we ran the new workflow on a subset of
        existing clients for 60 days, with the old workflow available as a fallback.
        Zero escalations. Zero compliance incidents. That data ended the debate.
      </p>

      <h2>What We Built</h2>
      <p>
        The redesigned onboarding flow reduced the document list by 40% for returning
        bank customers by pre-populating known information from core banking records.
        New applicants completed a digital-first process with real-time document
        verification via the bank&apos;s existing identity verification partner.
      </p>
      <p>
        The approval workflow became configuration-driven: relationship managers could
        set up approval hierarchies and thresholds per client, and the system automatically
        routed transactions to the right approver. Finance directors got a mobile-first
        approval interface — most approvals now happen from a phone in under 60 seconds.
      </p>

      <h2>Results</h2>
      <p>
        Measured over the 6 months following full rollout:
      </p>
      <ul>
        <li>Platform revenue grew 3× — primarily driven by activation of previously
        stalled applications and increased transaction volume from existing clients</li>
        <li>Onboarding time fell from 10 days to 3 days median (some clients completed
        same-day for returning customers)</li>
        <li>Manual approval steps reduced from 7 to 2 for 80% of transactions</li>
        <li>Active corporate client count grew 40% year-over-year</li>
        <li>Relationship manager escalation calls dropped 65%</li>
      </ul>

      <h2>What I&apos;d Do Differently</h2>
      <p>
        I underestimated how much time the data migration would take. Pre-populating
        existing client records required a mapping exercise across two legacy systems
        with inconsistent field formats. I should have scoped that earlier in discovery
        rather than treating it as an engineering detail.
      </p>
      <p>
        I also wish I&apos;d instrumented the old workflow more thoroughly before we replaced
        it. We have pre/post metrics for headline outcomes, but I can&apos;t tell you exactly
        where in the 7-step chain most approvals were getting stuck. That data would
        have made the case study stronger and the post-launch monitoring more precise.
      </p>
    </CaseStudyLayout>
  );
}
