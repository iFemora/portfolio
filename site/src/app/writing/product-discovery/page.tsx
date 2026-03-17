import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "How I Approach Product Discovery in Regulated Environments",
  description:
    "Discovery looks different when you're building in financial services. Compliance constraints, legacy systems, and institutional stakeholders change what's possible — and how you find out what matters.",
};

export default function ProductDiscoveryArticle() {
  return (
    <ArticleLayout
      title="How I Approach Product Discovery in Regulated Environments"
      date="2024-11-20"
      readTime="8 min read"
    >
      <p>
        Most product discovery frameworks were designed for consumer software. Talk to
        users. Build a prototype. Test it. Iterate. This loop works well when your users
        can tell you freely what they think, when you can build a prototype without
        touching regulated infrastructure, and when iterating doesn&apos;t require a compliance
        review.
      </p>
      <p>
        Financial services is a different environment. Users often can&apos;t tell you what
        they actually do — either because it would expose process violations or because
        they genuinely don&apos;t know, because the systems they use were built before anyone
        thought to design for transparency. You can&apos;t prototype a payment flow without
        touching real systems. And every material change to a regulated product typically
        needs legal and compliance sign-off before it ships.
      </p>
      <p>
        This doesn&apos;t make discovery impossible. It makes it different.
      </p>

      <h2>Start with the failure states, not the happy path</h2>
      <p>
        In consumer product discovery, you often start by mapping the happy path — what
        does success look like for the user? In financial services, I&apos;ve found it more
        productive to start with failure states: when does this process break, for whom,
        and what happens then?
      </p>
      <p>
        Failures are easier to talk about than workflows because they&apos;re memorable and
        they&apos;re safe to disclose. A finance director can tell me about the time a batch
        payment got stuck for three days because one approval step was misconfigured without
        revealing anything about their internal process that they shouldn&apos;t. That story
        tells me more about what actually matters to them than ten questions about their
        ideal workflow would.
      </p>

      <h2>Treat compliance constraints as discovery inputs, not post-discovery gates</h2>
      <p>
        A common pattern in fintech product teams: discovery happens among product, design,
        and engineering, produces a proposed solution, and then compliance reviews it.
        Compliance finds problems. The solution gets redesigned. This is slow and creates
        resentment between teams.
      </p>
      <p>
        A better pattern: include compliance in early discovery. Not as a veto — as a
        constraint source. The compliance team knows what&apos;s required, what&apos;s prohibited,
        and what&apos;s negotiable. That information should be shaping your solution space from
        the start, not screening solutions after you&apos;ve already designed them.
      </p>
      <p>
        In practice this means: before running user interviews or building prototypes,
        I run a short working session with compliance and legal to map the constraint
        space. What must be present? What can&apos;t be changed? What could be changed with
        the right business justification? This produces a cleaner brief for discovery —
        not &ldquo;how do users want to do this?&rdquo; but &ldquo;within these constraints, how do users
        want to do this?&rdquo;
      </p>

      <h2>Interview the operators, not just the users</h2>
      <p>
        In B2B financial products especially, there is often a meaningful gap between
        the users of a product (finance team members processing transactions) and the
        people who understand the process that product is embedded in (operations managers,
        compliance officers, relationship managers). Both groups are important.
      </p>
      <p>
        User interviews tell you about the experience of using the product as it currently
        exists. Operator interviews tell you about the business process the product is
        supposed to support — and the ways the product falls short of it. The most valuable
        discovery I&apos;ve done in financial services has come from sitting with relationship
        managers and watching them translate between what the system does and what the
        client actually needs.
      </p>

      <h2>Prototype at the right layer</h2>
      <p>
        You usually can&apos;t prototype the actual system. But you can prototype the experience
        of the system — the screens, the communications, the status updates, the error messages.
        In financial services, the information design layer is often where the most pain lives.
        A settlement status page that actually tells merchants what&apos;s happening and when to
        expect their funds is a better product than one with better infrastructure but
        opaque reporting. You can test the information design without touching the infrastructure.
      </p>

      <h2>Measure the right things</h2>
      <p>
        Discovery in regulated environments should be oriented toward metrics that reflect
        the regulatory and operational context, not just user satisfaction. Time-to-activation,
        time-to-first-transaction, escalation rates, and manual intervention rates are
        often more revealing than CSAT scores in financial products — they show you where
        the process is breaking in ways that users might not be able to articulate directly.
      </p>
      <p>
        The combination of these operational metrics with direct user research is what
        produces actionable discovery in regulated environments. Neither source alone is
        sufficient: metrics show you where something is wrong, user research tells you why.
      </p>
    </ArticleLayout>
  );
}
