import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Balancing User Needs & Business Goals Without Losing Either",
  description:
    "The framing of 'user needs vs. business goals' is usually a symptom of a deeper problem. Here's how I think about resolving it.",
};

export default function BalancingUserNeedsArticle() {
  return (
    <ArticleLayout
      title="Balancing User Needs & Business Goals Without Losing Either"
      date="2025-02-10"
      readTime="5 min read"
    >
      <p>
        The phrase &ldquo;balancing user needs and business goals&rdquo; comes up in a lot of PM
        interviews and product reviews. It&apos;s framed as a tension — two competing forces
        that need to be managed, traded off, or balanced. I&apos;ve come to think this framing
        is usually wrong, and that when it shows up, it&apos;s a symptom of a more specific
        problem worth diagnosing.
      </p>

      <h2>When the tension is real</h2>
      <p>
        There are genuine cases where user preference and business sustainability point
        in different directions. Dark patterns are the obvious example: users might prefer
        to cancel a subscription in one click, and the business knows that adding friction
        reduces churn. The interests are actually opposed. Building the frictionless
        cancellation flow is both the right thing to do and, in most cases, the better
        long-term business decision — but the short-term tension is real.
      </p>
      <p>
        Pricing is another real case. Users want free. Businesses need revenue. There&apos;s
        no synthesis that makes this go away; you have to make a choice about where on
        the free/paid spectrum to position.
      </p>
      <p>
        But these genuine cases are less common than the way the phrase gets used. More
        often, &ldquo;we need to balance user needs and business goals&rdquo; turns out to mean
        something else.
      </p>

      <h2>What it usually actually means</h2>
      <p>
        <strong>We haven&apos;t agreed on which users we&apos;re building for.</strong> &ldquo;Users&rdquo;
        is not a monolith. A payment platform serves developers integrating the API,
        finance directors approving transactions, and CFOs reviewing monthly reports.
        What looks like a conflict between user needs and business goals is often a
        conflict between the needs of different user types. Naming which segment you&apos;re
        prioritizing usually resolves it.
      </p>
      <p>
        <strong>We haven&apos;t understood the user need at the right level of abstraction.</strong>
        Users often ask for specific things (&ldquo;I want a faster approval button&rdquo;) when the
        underlying need is more general (&ldquo;I want approvals to feel low-stakes for small
        transactions&rdquo;). The specific request might conflict with business constraints.
        The underlying need usually doesn&apos;t.
      </p>
      <p>
        <strong>We&apos;re conflating short-term and long-term business goals.</strong> Short-term,
        adding friction to the free tier might increase conversions to paid. Long-term,
        a reputation for treating free users badly makes acquisition harder and referrals
        rarer. When &ldquo;business goals&rdquo; means &ldquo;this quarter&apos;s metric,&rdquo; conflicts appear
        that wouldn&apos;t survive a longer time horizon.
      </p>

      <h2>The reframe I find more useful</h2>
      <p>
        Instead of &ldquo;balance user needs and business goals,&rdquo; I find it more productive to
        ask: what&apos;s the smallest change to the user experience that achieves the business
        outcome, and is that change one that users would accept if they understood why it
        exists?
      </p>
      <p>
        This reframe does a few things. It keeps you from building unnecessary friction —
        if you can achieve the business outcome without degrading the experience, why
        wouldn&apos;t you? It also surfaces the cases where the answer is genuinely &ldquo;users
        wouldn&apos;t accept this if they understood it&rdquo; — which is a useful signal that
        you&apos;re in dark pattern territory.
      </p>
      <p>
        And it points toward communication as a lever. A lot of business constraints
        that feel like they damage user experience don&apos;t have to — if you explain them.
        Settlement windows are a good example: merchants don&apos;t like waiting for funds,
        but most understand why it takes time when it&apos;s explained clearly. Opacity is
        often the source of the frustration, not the constraint itself.
      </p>

      <h2>In practice</h2>
      <p>
        When I see user experience and business goals in apparent conflict in a review,
        I now default to asking three questions before accepting the framing:
      </p>
      <ol>
        <li>Which users specifically? Are we sure we&apos;re talking about the same segment?</li>
        <li>What is the user actually trying to accomplish, one level up from the feature request?</li>
        <li>What time horizon is the &ldquo;business goal&rdquo; operating on?</li>
      </ol>
      <p>
        These questions dissolve the apparent conflict more often than not. When they
        don&apos;t, you have a real tradeoff — and at least now you&apos;re making it consciously,
        with the right level of specificity, rather than managing a vague tension that
        nobody can clearly define.
      </p>
    </ArticleLayout>
  );
}
