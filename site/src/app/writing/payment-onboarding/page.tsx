import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Why Payment Onboarding Is a Product Problem, Not a Compliance Problem",
  description:
    "Most fintech companies treat KYB and KYC onboarding as a regulatory checkbox. That's why their activation rates are terrible.",
};

export default function PaymentOnboardingArticle() {
  return (
    <ArticleLayout
      title="Why Payment Onboarding Is a Product Problem, Not a Compliance Problem"
      date="2025-04-15"
      readTime="7 min read"
    >
      <p>
        Every payment company I know has a version of the same conversation: the compliance
        team comes to the product team with a list of required fields, and the product team
        puts those fields in a form. The form goes live. Activation rates are terrible.
        The compliance team says the product team implemented it wrong. The product team says
        they followed the spec.
      </p>
      <p>
        They&apos;re both right, and they&apos;re both missing the point.
      </p>

      <h2>The compliance team is not your enemy</h2>
      <p>
        KYB (Know Your Business) and KYC (Know Your Customer) requirements exist for
        real reasons. Financial crime, money laundering, and fraud are problems that
        regulators have learned, the hard way, that you can&apos;t prevent without verified
        identity. The requirements aren&apos;t arbitrary bureaucracy — they&apos;re the output
        of decades of case law and incident analysis.
      </p>
      <p>
        The mistake is treating compliance requirements as a complete product spec.
        &ldquo;We need to collect these 14 fields&rdquo; tells you what data you need. It doesn&apos;t
        tell you when in the user journey to collect it, how to explain why you need it,
        what to do when a user can&apos;t provide it, or how to make the collection feel
        proportionate to what the user is trying to accomplish.
      </p>
      <p>
        Those are product questions. And the answers to them are what determine whether
        your activation rate is 30% or 80%.
      </p>

      <h2>The onboarding form is not the onboarding flow</h2>
      <p>
        Most payment onboarding is designed as a form: a list of required fields, a
        submit button, a review period, and an approval or rejection email. This is
        understandable — it&apos;s how compliance teams think about verification — but it
        produces terrible user experiences for several reasons.
      </p>
      <p>
        <strong>Context collapse.</strong> A form treats all users the same. A sole trader
        registering a food delivery side-business and a Series B SaaS company expanding
        into a new market see the same 30-field form. Neither experience feels appropriate
        to what they&apos;re actually trying to do.
      </p>
      <p>
        <strong>Front-loading friction.</strong> Asking for everything upfront — before
        the user has experienced any value — is asking for maximum trust at minimum
        familiarity. The user doesn&apos;t know yet whether your product is worth the effort.
      </p>
      <p>
        <strong>Opaque failure modes.</strong> &ldquo;Your application is under review&rdquo; is
        not a status update. It&apos;s an anxiety machine. Users who don&apos;t know what&apos;s
        happening, or what they need to do next, abandon. And because they often don&apos;t
        re-engage, you never know you lost them.
      </p>

      <h2>What a product-led onboarding looks like</h2>
      <p>
        When I rebuilt the onboarding flow for a payment platform serving African SMEs,
        the starting point wasn&apos;t the compliance requirements list — it was the question:
        what is the user trying to accomplish, and what&apos;s the minimum we need to know
        at each stage for them to safely make progress?
      </p>
      <p>
        This produced a few principles that shaped the design:
      </p>
      <ul>
        <li>
          <strong>Collect information at the point of relevance.</strong> Business registration
          documents matter when you&apos;re setting up settlement — not when you&apos;re setting up
          a test environment. Let developers test first. Ask for business docs when they
          want to go live.
        </li>
        <li>
          <strong>Profile the user before presenting a form.</strong> Two questions — business
          type and country — reduced the required field count by 40% for the most common
          user type. A sole trader in Ghana and a registered company in Nigeria have different
          verification requirements. Treating them identically is a product failure.
        </li>
        <li>
          <strong>Surface progress, not just status.</strong> Replace &ldquo;under review&rdquo; with
          a checklist that shows which documents have been verified, which are pending,
          and what the user can do while they wait. Most merchants can start in test mode
          immediately. Showing them that makes the wait feel productive.
        </li>
        <li>
          <strong>Rejection is not the end of the flow.</strong> When verification fails,
          the user needs to know exactly why and exactly what to do. &ldquo;Unable to verify
          your business registration&rdquo; is the start of a conversation, not a closed door.
        </li>
      </ul>

      <h2>The metric that reveals everything</h2>
      <p>
        Most onboarding funnels track form completion rate. That&apos;s a useful number, but
        it hides the most important information. The metric I find most revealing is
        time-to-first-transaction: from the moment a merchant starts registration, how
        long until they process their first real payment?
      </p>
      <p>
        This metric captures the full onboarding experience — including the wait time,
        the communication quality, and the post-approval activation experience. It&apos;s
        also the number most directly correlated with long-term retention: merchants who
        process a first transaction within 48 hours of approval are significantly more
        likely to be active 90 days later.
      </p>
      <p>
        When we redesigned the onboarding flow with these principles, we reduced median
        time-to-first-transaction from 7 business days to under 24 hours. That number
        didn&apos;t change because we relaxed compliance requirements — it changed because we
        treated compliance as an ingredient, not a product.
      </p>

      <h2>Conclusion</h2>
      <p>
        Compliance and user experience are not in tension. The tension is between treating
        compliance as someone else&apos;s problem and owning it as a product challenge.
        The companies that figure this out — that learn to see KYB/KYC requirements as
        design constraints rather than obstacles — are the ones that win on activation
        without compromising on safety.
      </p>
      <p>
        The compliance team will tell you what you need to collect. Your job is to figure
        out how to collect it in a way that doesn&apos;t lose half your users before they
        get started.
      </p>
    </ArticleLayout>
  );
}
