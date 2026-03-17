# Portfolio Redesign Proposal
## From Static Site → Editorial PM Portfolio (kentokawazoe.com Reference Style)
### For: Oluwafemi Akinseye — Product Manager, Payments & Fintech

---

## 0. Executive Summary

Your current portfolio is **structurally solid** — you have case studies, writing, a contact form, dark mode, and mobile responsiveness. But it reads like a template, not a person. The kentokawazoe.com reference sets a bar for portfolios that feel *crafted*: editorial typography, purposeful whitespace, smooth micro-interactions, and writing that shows how you think, not just what you've shipped.

This proposal covers everything end to end:
- Audit of your current portfolio (what to keep, cut, upgrade)
- Exact design language to replicate the reference aesthetic
- Full tech stack decision with rationale
- Content strategy built around your PM + payments depth
- Hosting, domain, and deployment pipeline
- Implementation phases with deliverables
- Cost breakdown (zero-budget path + professional path)

---

## 1. Audit: Your Current Portfolio

### What You Have

| Page | Status | Verdict |
|------|--------|---------|
| `index.html` — Homepage | Complete | Keep, redesign layout |
| `about.html` — About | Complete | Keep, rewrite copy |
| `work/fcmb-cib.html` — FCMB Case Study | Complete | Keep, expand depth |
| `work/payments-platform.html` — Payments Case Study | Complete | Keep, expand depth |
| `writing/` — 2 articles | Complete | Keep, add 2-3 more |
| `speaking.html` | Placeholder | Keep, fill with real data |
| `projects.html` | Placeholder links | Deprioritize or cut |
| `now.html` | Complete | Keep (differentiator) |
| `contact.html` | Complete | Keep |

### What's Broken / Hollow

1. **Social links all point to `#`** — LinkedIn, GitHub, Twitter need real URLs
2. **Projects page has no live links or real descriptions** — either fill or remove
3. **Hero section feels generic** — "Product Manager" + CTA buttons is every PM portfolio
4. **Case studies need richer structure** — currently missing artifact screenshots, process diagrams, decision rationale
5. **Typography is functional, not editorial** — Inter everywhere reads as "bootstrapped"
6. **No motion, no personality** — static pages feel like a resume, not a portfolio
7. **Images are stock/placeholder-looking** — no real work artifacts shown

### What's Good (Protect These)

- Clean semantic HTML structure — reusable as content layer
- Design tokens system (CSS variables) — carry this forward
- Dark mode implementation — keep
- `/now` page — this is rare and signals taste
- FCMB case study narrative — the results (3x revenue, 10→3 days onboarding) are strong
- Contact form with honeypot — keep

---

## 2. Reference Style Analysis (kentokawazoe.com Aesthetic)

Based on the site profile ("Exploring the intersection of web development and design") and the class of portfolio it represents, here is the design language to replicate:

### Visual Signature

| Element | Reference Aesthetic |
|---------|---------------------|
| **Layout** | Max-width centered column (~680-800px), generous vertical rhythm |
| **Typography** | Large editorial headings (serif or geometric sans), small precise body text |
| **Color** | Near-black background or white; one or two accent tones, not a full palette |
| **Spacing** | Extreme whitespace — sections breathe, nothing feels crowded |
| **Images** | Full-bleed project thumbnails, precise aspect ratios, no borders |
| **Motion** | Subtle entrance animations (fade + translate Y), smooth page transitions |
| **Navigation** | Minimal — name/logo left, 3-4 links right, no hamburger clutter on desktop |
| **Footer** | Sparse — email, social, copyright |

### Section Structure to Replicate

```
/ (Home)
├── Minimal hero: Name, one-line positioning statement, optional tagline
├── Selected work: 2-3 projects, large thumbnail, title, one-line description
├── About teaser: 2-3 sentences with a "More →" link
└── Writing teaser: Latest 2 articles with date + title

/work (Work index)
└── Full list of case studies with thumbnail, title, tags, year

/work/[slug] (Case study)
├── Project header: Title, role, year, company
├── Context / Problem
├── Process narrative with inline artifacts
├── Outcome / Results
└── Learnings / What I'd do differently

/about
├── Personal narrative (not a job history list)
├── What I care about
└── How to work with me

/writing
└── Reverse-chronological article list

/writing/[slug]
└── Long-form article (MDX or HTML)

/now
└── Current focus snapshot
```

---

## 3. Who You Are (Positioning Strategy)

Before touching code, your positioning statement must be airtight. Based on your existing content:

### Current (Weak)
> "Product Manager" — generic, zero signal

### Proposed (Strong)
> "Product Manager building payment infrastructure and financial tools that work for real people in emerging markets."

Or tighter:
> "I ship payments products. I've cut merchant onboarding from 10 days to 3, scaled corporate banking platforms, and made financial rails invisible to the people who depend on them."

### Content Pillars Your Portfolio Must Demonstrate

1. **Payments domain depth** — you understand rails, settlement, reconciliation, KYC/KYB, not just "fintech UX"
2. **B2B + B2C dual fluency** — FCMB (corporate banking, B2B) + payment platform (developer-facing API, SME)
3. **Emerging markets context** — African financial infrastructure has real constraints; your work navigates them
4. **Operational rigor** — you build things that need to work at scale with real money moving

---

## 4. Tech Stack Decision

### Option A: Next.js + Tailwind CSS + Framer Motion (Recommended)

**Why this matches the reference aesthetic:**
- Next.js enables smooth page transitions and optimized image loading (both critical to the kentokawazoe feel)
- Framer Motion handles entrance animations declaratively — no hand-rolling CSS keyframes
- Tailwind makes design constraints enforced at the code level
- Static export means it's as fast as your current plain HTML

**Stack breakdown:**

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Next.js 14+ (App Router) | File-based routing, image optimization, static export |
| Styling | Tailwind CSS v3 | Design tokens as utilities, dark mode trivial |
| Animation | Framer Motion | Page transitions, scroll-reveal, hover effects |
| Typography | next/font (Google Fonts or local) | No layout shift on font load |
| Content | MDX files (Markdown + JSX) | Write articles/case studies in Markdown, embed React components |
| Icons | Lucide React | Clean, consistent icon set |
| Hosting | Vercel | 1-click Next.js deploy, free tier, auto-previews on PR |
| Domain | Namecheap or Google Domains | ~$12-15/year for `.com` |
| Analytics | Vercel Analytics or Plausible | Privacy-respecting page view tracking |
| Contact form | Resend.com + React Email | Free tier handles contact form emails without a backend |

**Local dev requirement:** Node.js 18+ (standard, free)

### Option B: Astro + Tailwind (Lighter Alternative)

If you want simpler tooling with near-identical output:
- Astro handles `.astro` component files (HTML-first, zero JS by default)
- Add Tailwind and Framer Motion via integrations
- Slightly less ecosystem but faster build times
- Also deployable to Vercel or Netlify for free

**Verdict: Go with Next.js.** It has more community resources, the job market recognizes it, and you can use the same deploy pipeline for life.

### Option C: Upgrade Current HTML/CSS (Zero-install path)

If you want to ship something immediately without learning Next.js:
- Keep current vanilla HTML structure
- Add AOS.js (Animate On Scroll) for entrance effects
- Swap to a more editorial typeface via Google Fonts CDN (e.g., Playfair Display for headings, Plus Jakarta Sans for body)
- Redesign CSS for tighter whitespace and editorial layout
- Host on GitHub Pages (free, already compatible)

**Verdict: Use Option C for an immediate v1 while building Option A as v2.**

---

## 5. Domain & Hosting Setup

### Domain

**Register your name as a domain.** This is the single most important investment.

- Format: `oluwafemiakinseye.com` (full name) or `femiakinseye.com` (shortened)
- Registrar: **Namecheap** (~$12/year) or **Porkbun** (~$9/year, often cheaper)
- Avoid GoDaddy (aggressive upsells, higher renewal costs)
- If `.com` is taken, consider `.dev` or `.io` — both professional for tech/PM roles

**Steps to register:**
1. Go to namecheap.com or porkbun.com
2. Search your name + .com
3. Add to cart, create account, pay (~$10-15 for first year)
4. Enable WhoisGuard privacy (free on Namecheap)

### Hosting (Zero Cost Path)

**Vercel Free Tier** — the right answer for this stack.

| Feature | Vercel Free |
|---------|-------------|
| Bandwidth | 100 GB/month |
| Builds | Unlimited |
| Custom Domain | Yes (connect your Namecheap domain) |
| SSL/HTTPS | Automatic |
| Preview URLs per branch | Yes |
| Analytics | Basic (Vercel Analytics addon free) |

**Connecting domain to Vercel:**
1. Deploy your portfolio repo to Vercel
2. In Vercel dashboard → Settings → Domains → Add `yourname.com`
3. Vercel gives you two DNS records (A record + CNAME)
4. Log into Namecheap → Domain DNS → Add those records
5. Propagation takes 5-30 minutes — done

**Alternative: GitHub Pages (Even simpler for static HTML)**
- Already built into GitHub — just push to a repo named `yourusername.github.io`
- Connect custom domain via a `CNAME` file in the repo root
- Free, no account needed beyond GitHub
- Limitation: only truly static files (no server-side Next.js features)
- Works perfectly with Option C above

### Pre-Domain Workaround (Ship Before Buying Domain)

Every Vercel deploy gets a free subdomain:
`your-portfolio.vercel.app`

This is shareable immediately, HTTPS by default, and looks acceptable for recruiters and hiring managers. Ship to this URL first, buy your domain when you're ready.

---

## 6. Site Architecture & Content Plan

### Pages

```
/                     Homepage
/work                 Work index (case studies)
/work/fcmb-cib        FCMB Corporate Internet Banking
/work/payments        Payments & Onboarding Platform
/work/[future]        Slot for future case study
/about                About
/writing              Writing index
/writing/[slug]       Individual articles
/now                  Now page
```

### Homepage Structure (Matching Reference Aesthetic)

```
[NAV]  Name (left)          Work  About  Writing  Now  (right)

[HERO]
  Large heading: "Product Manager."
  Subheading: "I build payment infrastructure that moves money
               reliably across emerging markets."
  Loose body: 2-3 sentences. No buttons. Let the work speak.

[SELECTED WORK]  ← 2-3 cards, large thumbnails
  FCMB Corporate Internet Banking
  Payments & Onboarding Platform

[ABOUT TEASER]
  3-sentence personal paragraph.
  "More about me →"

[WRITING]  ← 2 most recent articles
  Title + date (no excerpts needed)

[FOOTER]
  Email  ·  LinkedIn  ·  GitHub  ·  © 2025
```

### Case Study Template

Each case study must follow this pattern — it's what separates "I shipped a feature" from "I solved a problem that mattered":

```
[HEADER]
  Company / Product
  My Role · Year · Duration

[CONTEXT]
  What was the business situation?
  What was broken or missing?

[PROBLEM STATEMENT]
  1-2 sentences. Sharp. Specific.

[MY APPROACH]
  How did I diagnose the problem?
  What did I learn from users, data, stakeholders?
  What constraints shaped my decisions?

[ARTIFACTS]  ← This is what most PM portfolios skip
  Journey maps, user interview themes, PRD excerpts
  Wireframes (even rough ones)
  Metrics dashboards or before/after screenshots

[WHAT WE BUILT]
  The solution — describe it, don't just name it

[RESULTS]
  Numbers. Always numbers.
  "3x revenue increase" → be specific if you can: from what to what?
  "Onboarding: 10 days → 3 days" → how measured, over what period?

[WHAT I LEARNED]
  1-2 honest reflections. This shows maturity.
```

---

## 7. Design Specifications

### Typography

| Use | Font | Weight | Size (desktop) |
|-----|------|--------|----------------|
| H1 / Hero | Playfair Display or Fraunces (serif) | 400 | 56-72px |
| H2 / Section headings | Inter or Plus Jakarta Sans | 600 | 32-40px |
| Body / Paragraph | Inter | 400 | 16-18px |
| Labels / Captions | Inter | 500 | 12-14px, uppercase tracked |
| Code / Mono | JetBrains Mono | 400 | 14px |

**Rationale:** A serif heading against a sans-serif body creates the editorial contrast that makes the reference portfolio feel designed, not just built.

### Color Palette

**Light Mode (Primary):**
```
Background:  #FAFAF9    (warm off-white, not cold white)
Surface:     #FFFFFF
Text:        #1A1A1A    (near-black, not pure #000)
Muted text:  #6B7280    (gray for dates, captions)
Accent:      #1A1A1A    (monochromatic — let content be the color)
Border:      #E5E7EB
```

**Dark Mode:**
```
Background:  #0F0F0F
Surface:     #1A1A1A
Text:        #F5F5F4
Muted text:  #9CA3AF
Border:      #2E2E2E
```

**Accent strategy:** Use a single muted accent sparingly — olive green (`#6B7C43`), burnt orange (`#C4622D`), or cobalt (`#2563EB`). Pick one that feels like you. Don't use multiple brand colors.

### Spacing

- Base unit: 8px
- Section padding: 96-128px vertical (this is where the "breathes" feeling comes from)
- Max content width: 680px for text, 960px for full layout
- Card gap: 32px

### Animation (Framer Motion Variants)

```javascript
// Page entrance — every page uses this
const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 }
}
const pageTransition = { duration: 0.35, ease: [0.22, 1, 0.36, 1] }

// Stagger children — for work cards, writing list
const containerVariants = {
  animate: { transition: { staggerChildren: 0.08 } }
}
const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

// Hover on project cards
const cardHover = {
  scale: 1.01,
  transition: { duration: 0.2, ease: "easeOut" }
}
```

### Component Patterns

**Project Card:**
```
┌─────────────────────────────┐
│  [Full-width thumbnail img]  │
│  16:9 ratio, object-cover    │
└─────────────────────────────┘
  Tag · Year
  Project Title (large)
  One-line description
  → View case study
```

**Writing List Item:**
```
2025-04-15    How I Approach Product Discovery    →
2025-02-10    Balancing User Needs & Business     →
```

**Nav:**
```
Femi Akinseye      Work   About   Writing   Now
```

---

## 8. Content to Write Before Building

The portfolio will be hollow without strong content. Here's your writing backlog:

### Priority 1: Deepen Existing Case Studies

**FCMB Corporate Internet Banking** — add:
- What broke before you got there (specific user pain quotes if possible)
- How you prioritized the 10→3 day onboarding reduction — what did you cut?
- What the approval flow looked like before and after (even a text diagram)
- Whether 3x revenue was direct result or correlated — be honest

**Payments & Onboarding Platform** — add:
- Who were the developers you built for? What was their worst complaint?
- What did the API design process look like?
- Why 99.95% uptime was the target — what's the cost of downtime in this context?
- Multi-currency: which currencies, what was the hardest edge case?

### Priority 2: New Articles to Write (2-3)

These show thinking, not just execution:

| Article | Why It Works For You |
|---------|----------------------|
| "Why Payment Onboarding Is a Product Problem, Not a Compliance Problem" | Shows domain + product thinking |
| "What I Learned Building for Developers Who Don't Trust Your API" | Shows B2B empathy |
| "The Hidden Cost of a Failed Transaction" | Shows operational + business thinking |
| "How to Write a PRD That Engineers Actually Use" | Shows craft + collaboration |

### Priority 3: /now Page Update

Current /now content is from "August 2025" — update to 2026 with current state.

---

## 9. Implementation Phases

### Phase 0: Do This Today (No Code Required)
**Time: 2-4 hours**

1. Register domain at Namecheap or Porkbun
2. Fix social links in current portfolio (LinkedIn, GitHub real URLs)
3. Push current portfolio to GitHub Pages as `yourusername.github.io`
4. Share that URL immediately — it's live now, costs nothing

### Phase 1: Content Depth (Before Any Redesign)
**Time: 4-8 hours of writing**

1. Deepen FCMB case study with the questions above
2. Deepen Payments case study
3. Write one new article
4. Update /now page

**Why content before design:** A beautiful portfolio with thin case studies loses to an ugly portfolio with deep case studies. Fix the content first.

### Phase 2: Design Refresh on Current Stack
**Time: 6-10 hours**

Without changing tech stack, upgrade the visual layer:

1. Swap Inter heading to Playfair Display (Google Fonts, free)
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
   ```
2. Add AOS.js for scroll animations:
   ```html
   <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
   <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
   <script>AOS.init({ duration: 600, once: true, offset: 80 });</script>
   ```
3. Increase section padding (min 80px vertical)
4. Narrow content max-width to 760px
5. Implement warm off-white background (#FAFAF9)
6. Add hover transitions on cards: `transition: transform 0.2s ease;` + `transform: translateY(-4px)` on hover
7. Replace hero section — remove CTA buttons, use large serif heading

### Phase 3: Full Next.js Rebuild (The Real Version)
**Time: 2-4 weeks of evenings, or 5-7 days full-time**

This is the build that matches the reference portfolio's actual quality level.

#### Setup
```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir
cd portfolio
npm install framer-motion lucide-react @next/mdx gray-matter reading-time
```

#### File Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout (nav, footer, fonts)
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── work/page.tsx           # Work index
│   ├── work/[slug]/page.tsx    # Dynamic case study
│   ├── writing/page.tsx        # Writing index
│   ├── writing/[slug]/page.tsx # Dynamic article
│   └── now/page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── WritingItem.tsx
│   ├── PageTransition.tsx      # Framer Motion wrapper
│   └── ThemeToggle.tsx
├── content/
│   ├── work/
│   │   ├── fcmb-cib.mdx
│   │   └── payments-platform.mdx
│   └── writing/
│       ├── payment-onboarding.mdx
│       └── balancing-user-needs.mdx
└── lib/
    ├── mdx.ts                  # MDX parsing helpers
    └── types.ts                # TypeScript interfaces
```

#### Deployment
```bash
# Initial deploy
vercel

# Every push to main auto-deploys
# Every PR gets a preview URL automatically
```

---

## 10. Cost Breakdown

### Zero-Budget Path (Everything Free)

| Item | Cost | Notes |
|------|------|-------|
| GitHub | Free | Source code hosting |
| GitHub Pages | Free | Static hosting, yourusername.github.io |
| Vercel Free Tier | Free | If using Next.js |
| Google Fonts | Free | Typography |
| AOS.js | Free | Animations (Phase 2 option) |
| Framer Motion | Free | Open source |
| Next.js | Free | Open source |
| **Total** | **$0/year** | Ship on vercel.app subdomain |

### Professional Path (Minimal Investment)

| Item | Cost | Notes |
|------|------|-------|
| Domain (femiakinseye.com) | ~$12/year | Namecheap or Porkbun |
| Vercel Pro (optional) | $20/month | Only needed for >100GB bandwidth — you won't need this |
| Plausible Analytics | $9/month | Optional, only if you want privacy-respecting analytics |
| **Recommended Total** | **~$12/year** | Just buy the domain, everything else is free |

---

## 11. SEO & Discoverability

Your portfolio needs to be findable when someone Googles you.

### Critical meta tags (add to every page `<head>`):

```html
<title>Femi Akinseye — Product Manager, Payments & Fintech</title>
<meta name="description" content="Product Manager with deep experience in payment infrastructure, merchant onboarding, and financial tools for emerging markets." />

<!-- Open Graph (for LinkedIn shares) -->
<meta property="og:title" content="Femi Akinseye — PM Portfolio" />
<meta property="og:description" content="Case studies in payments, banking, and fintech product." />
<meta property="og:image" content="https://yourdomain.com/og-image.png" />
<meta property="og:url" content="https://yourdomain.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
```

### Google Search Console

1. Verify your domain at search.google.com/search-console
2. Submit sitemap (Next.js generates one automatically)
3. Your name should appear in Google within 1-2 weeks

---

## 12. What Makes This Portfolio Stand Out

Most PM portfolios look the same. Here's what will differentiate yours:

| Differentiator | How to Implement |
|---------------|-----------------|
| **Payments domain specificity** | Use real terminology: settlement windows, chargeback rates, KYB flows, API latency — recruiters who know payments will recognize this |
| **/now page** | Rare. Signals self-awareness and continuous learning |
| **Writing that teaches** | One good article on payment product thinking does more than 10 bullet points on a resume |
| **Honest case studies** | Include what you'd do differently — this signals senior PM maturity |
| **Editorial design** | If you execute the visual redesign well, you'll look like a designer too — which is a compliment in PM hiring |
| **Fast, no-clutter experience** | A portfolio that loads instantly and isn't full of hero animations signals taste |

---

## 13. Recommended Action Order

```
Week 1:  Register domain + fix social links + push to GitHub Pages
         Write deeper case study sections (FCMB + Payments)
         Update /now page

Week 2:  Phase 2 visual upgrade on current stack (fonts, spacing, animations)
         Write one new article
         Share the URL with your network for feedback

Week 3+: Begin Next.js rebuild (Phase 3) if bandwidth allows
         OR hire a frontend developer to implement Phase 3
         (Budget: $500-1500 for a skilled contractor on Toptal/Contra/Workatastartup)

Week 6:  Full portfolio live on custom domain
         Submit to Product Hunt's "Side Projects" (visibility)
         Share on LinkedIn and PM communities (Lenny's Slack, Product School)
```

---

## 14. Tools & Resources

### Design References
- [kentokawazoe.com](https://kentokawazoe.com/) — your reference
- [brittanychiang.com](https://brittanychiang.com/) — clean, engineering-forward
- [leerob.io](https://leerob.io/) — Next.js creator, editorial PM/eng hybrid style

### Fonts (Free, Google Fonts)
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — editorial headings
- [Fraunces](https://fonts.google.com/specimen/Fraunces) — warmer serif alternative
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — modern body

### Useful Libraries
- [Framer Motion](https://www.framer.com/motion/) — animations
- [AOS.js](https://michalsnik.github.io/aos/) — simpler scroll animations
- [gray-matter](https://github.com/jonschlinkert/gray-matter) — MDX frontmatter parsing
- [Lucide React](https://lucide.dev/) — icons

### Hosting
- [Vercel](https://vercel.com) — recommended for Next.js
- [Netlify](https://netlify.com) — good alternative
- [GitHub Pages](https://pages.github.com/) — for static HTML version

### Domain Registration
- [Namecheap](https://www.namecheap.com/) — reliable, fair pricing
- [Porkbun](https://porkbun.com/) — often cheapest, good UX

### Contact Form (No Backend)
- [Resend.com](https://resend.com/) — free tier (3,000 emails/month), React Email templates
- [Formspree](https://formspree.io/) — simplest, works with plain HTML forms

### Analytics
- [Vercel Analytics](https://vercel.com/analytics) — built-in, free basic tier
- [Plausible](https://plausible.io/) — privacy-first, $9/month

---

## 15. Summary Decision Matrix

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Ship immediately | GitHub Pages (current HTML) | Zero setup time |
| Long-term tech | Next.js 14 + Tailwind + Framer Motion | Matches reference quality |
| Domain | femiakinseye.com or oluwafemiakinseye.com | ~$12/year |
| Hosting | Vercel free tier | Best Next.js DX, free |
| Typography | Playfair Display + Inter | Editorial contrast |
| Color | Warm off-white + near-black + single accent | Matches reference minimalism |
| Content priority | Case studies first, then design | Substance before aesthetics |
| Pre-domain URL | yourname.vercel.app | Free, shareable today |

---

*Proposal prepared: March 2026*
*Based on audit of existing portfolio at `/home/user/portfolio`*
*Reference: kentokawazoe.com design aesthetic*
