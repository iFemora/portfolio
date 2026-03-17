import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Payments & Onboarding Platform",
  description:
    "Building a developer-friendly payment collection API for African SMEs — from problem validation through launch, multi-currency support, and operational tooling.",
};

export default function PaymentsPlatformCaseStudy() {
  return (
    <CaseStudyLayout
      title="Payments & Onboarding Platform"
      role="Product Manager"
      year="2023"
      company="Startup (NDA)"
      tags={["Payments", "API", "SME", "Fintech"]}
      outcomes={[
        { label: "Uptime", value: "99.95%" },
        { label: "Markets", value: "6" },
        { label: "Merchant Activation", value: "< 24 hours" },
        { label: "API Latency (p95)", value: "< 800ms" },
      ]}
    >
      <h2>Context</h2>
      <p>
        African SMEs collecting payments online face a fragmented landscape: local
        payment methods that don&apos;t interoperate, bank APIs that are undocumented or
        unreliable, and onboarding processes that can take weeks. A developer building
        a checkout flow for a Kenyan e-commerce site and a Nigerian B2B SaaS product
        face entirely different infrastructure challenges — but they both need the same
        thing: a payment layer that just works.
      </p>
      <p>
        This startup set out to build that layer. I joined at the point where the
        founding team had validated the market need but hadn&apos;t yet committed to a
        product architecture or go-to-market strategy.
      </p>

      <h2>The Problem</h2>
      <p>
        Most payment infrastructure built for African markets falls into one of two
        failure modes: it&apos;s either a local acquirer that handles one or two payment
        methods in one country (deep, but narrow), or it&apos;s a global provider that
        technically supports African markets but with settlement windows that make
        working capital planning impossible and support that doesn&apos;t understand local
        failure modes.
      </p>
      <p>
        Developers specifically were underserved. The feedback we heard repeatedly
        in early user research: &ldquo;I can integrate Stripe in an afternoon. It takes me
        two weeks and three phone calls with a bank to get a local payment method working.&rdquo;
      </p>

      <h3>Who we were building for</h3>
      <p>
        After initial discovery interviews with 22 developers and 11 business owners
        across Nigeria, Kenya, Ghana, and South Africa, we defined two primary segments:
      </p>
      <ul>
        <li>
          <strong>Developer-first SMEs:</strong> startups with technical founders who
          want self-serve onboarding, clean REST/webhook APIs, and good documentation.
          Speed of activation and API reliability are table stakes.
        </li>
        <li>
          <strong>Operational SMEs:</strong> established businesses with finance teams
          (not developers) managing payments. They needed a dashboard, reconciliation
          exports, and multi-user access with role-based permissions.
        </li>
      </ul>
      <p>
        We decided to build developer-first, with operational tooling following. The
        API would be the foundation; the dashboard would be a client on top of the
        same API.
      </p>

      <h2>My Approach</h2>

      <h3>Defining the API surface</h3>
      <p>
        The first major product decision was what to abstract and what to expose.
        Payment APIs that try to hide too much break in ways that are hard to debug.
        APIs that expose too much create integration complexity. I worked with the
        engineering lead to define a principle: abstract the payment method differences,
        expose the money movement semantics.
      </p>
      <p>
        This meant: one API call to initiate a payment regardless of whether the
        underlying method was card, mobile money, or bank transfer. But the webhook
        payload would include the full method-specific context so developers could
        build logic on top of it.
      </p>

      <h3>Onboarding: the real product</h3>
      <p>
        For a payment platform, onboarding is not a side problem — it is the product.
        KYB (Know Your Business) requirements vary by country and by transaction type.
        What documents a sole proprietor needs to activate a Ghanaian mobile money
        collection is different from what a registered company needs to collect cards
        in Nigeria.
      </p>
      <p>
        I mapped every market&apos;s KYB requirements against our banking partner requirements
        and built a requirement matrix. This became the source of truth for the onboarding
        flow: the form a merchant saw depended on their business type and market. We
        stripped out every field that wasn&apos;t needed for a given profile.
      </p>
      <p>
        The result was an adaptive onboarding form that presented between 8 and 14
        fields depending on context — versus the standard industry approach of a single
        30-field form that left most fields blank.
      </p>

      <h3>Settlement and reconciliation</h3>
      <p>
        The operational tools that finance teams need — settlement reports, reconciliation
        exports, dispute management — are where most payment products deprioritize
        investment. This was a conscious choice for us too initially. But early merchants
        told us quickly that unreliable settlement timing and opaque reconciliation data
        were the primary reasons they considered switching away.
      </p>
      <p>
        We built settlement timelines into the merchant dashboard as a first-class feature:
        every transaction showed an expected settlement date, and the system sent proactive
        notifications when settlements were delayed. This was operationally cheap to build
        but had a disproportionate effect on merchant trust.
      </p>

      <h2>What We Built</h2>
      <p>
        A payment collection API supporting card, mobile money, and bank transfer across
        Nigeria, Kenya, Ghana, South Africa, Rwanda, and Tanzania. Core capabilities:
      </p>
      <ul>
        <li>Single API endpoint for payment initiation, abstracting 14 underlying payment method integrations</li>
        <li>Adaptive KYB onboarding reducing median activation time to under 24 hours</li>
        <li>Webhook system with automatic retry and delivery receipts</li>
        <li>Merchant dashboard with real-time transaction monitoring, settlement timelines, and CSV/PDF reconciliation exports</li>
        <li>Multi-user access with Admin, Finance, and Developer role permissions</li>
        <li>Test environment that faithfully simulates failure modes (network timeouts, insufficient balance, scheme reversals)</li>
      </ul>

      <h2>Results</h2>
      <ul>
        <li>99.95% API uptime across 12 months post-launch</li>
        <li>Median merchant activation time: 22 hours (down from industry baseline of 5-7 business days)</li>
        <li>p95 API response latency: 780ms (target was &lt;800ms)</li>
        <li>6 active markets at end of year 1</li>
        <li>Merchant NPS: 58 (measured at 90 days post-activation)</li>
        <li>Churn at 6 months: 8% (significantly below initial assumption of 20%)</li>
      </ul>

      <h2>What I&apos;d Do Differently</h2>
      <p>
        We launched in 6 markets simultaneously. In retrospect, we should have gone
        deep in 2 markets first. The spread of banking partner relationships, compliance
        requirements, and local payment method integrations meant we were operating at
        a breadth that our team size couldn&apos;t support well. The quality of the developer
        experience was uneven — documentation for some markets was thin, and the test
        environment didn&apos;t cover all failure modes in all markets.
      </p>
      <p>
        I also underweighted the importance of the dispute management flow early on.
        We shipped it as an MVP (merchants emailed support to initiate disputes) and
        didn&apos;t build the self-serve dispute interface until month 8. Finance teams
        hated the email process, and it generated support volume we hadn&apos;t planned for.
      </p>
    </CaseStudyLayout>
  );
}
