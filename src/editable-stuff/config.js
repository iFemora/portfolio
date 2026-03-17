// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#1a1a2e, #16213e, #0f3460, #533483, #1a1a2e",
  firstName: "Femi",
  middleName: "",
  lastName: "Siji-Kenneth",
  message: "Lead Product Manager · Payments & B2B Platforms · Fintech",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ifemora",
    },
    {
      image: "fa-envelope",
      url: "mailto:oluwafemiakinseye@gmail.com",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: "",
  imageSize: 375,
  message:
    "I'm a strategic Product Lead with 9+ years of experience scaling B2B and consumer fintech platforms across Africa and North America. I specialise in payment processing, recurring billing, and merchant operational tools — having driven products from concept to $30M+ USD in annualised transaction volume at Paystack (acquired by Stripe) within 12 months of launch. I'm passionate about bridging complex backend financial systems with intuitive user experiences for enterprise clients.",
  resume: "",
};

// EXPERIENCE SECTION
const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "Lead Product Manager",
      company: "Marqeta",
      location: "Toronto, ON",
      date: "September 2025 – Present",
      points: [
        "Spearheading the re-imagination of the Marqeta Dashboard to enhance visibility for enterprise programme managers.",
        "Architecting a purpose-built Cardholder Support Portal and integrated AI/IVR tooling to centralise support workflows.",
        "Driving alignment across Engineering, GTM, and Customer Operations for seamless adoption of new operational tools.",
      ],
    },
    {
      role: "Product Lead, Corporate Banking",
      company: "First City Monument Bank (FCMB)",
      location: "London, UK & Lagos, Nigeria",
      date: "October 2024 – September 2025",
      points: [
        "Directed the vision, execution and successful launch of a corporate internet banking platform serving 50,000+ SME and enterprise clients.",
        "Redesigned corporate client onboarding, achieving a 40% reduction in time-to-value via embedded self-service tools.",
        "Introduced real-time analytics dashboards for corporate treasurers, improving client retention and platform stickiness.",
      ],
    },
    {
      role: "Product Manager, Key & Strategic Accounts",
      company: "Paystack (A Stripe Company & YC Alum)",
      location: "Lagos, Nigeria",
      date: "June 2021 – January 2025",
      points: [
        "Drove 'Pay with Airtime' from concept to ₦14B (~$30M USD) in transaction volume within its first year, improving conversion by 17%.",
        "Led end-to-end launch of Direct Debit infrastructure for recurring payments, fully compliant with Central Bank regulations.",
        "Executed a strategic expansion into the Airline vertical, delivering a $7M revenue-driving campaign.",
        "Reduced support tickets by 13% through proactive product improvements and better documentation.",
      ],
    },
    {
      role: "Product Manager",
      company: "Farmcrowdy (Techstars Toronto Alum)",
      location: "Lagos, Nigeria",
      date: "February 2019 – June 2021",
      points: [
        "Managed development of three mobile products (Farmers App, Farmcrowdy Foods, Meathub), scaling the Farmers App to 200,000+ users.",
        "Built financial models and vendor management workflows to ensure platform sustainability.",
        "Conducted extensive user research across 29 states to inform product roadmap and UI design.",
      ],
    },
  ],
};

// PROJECTS SECTION — disabled, using case studies instead
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "ifemora",
  reposLength: 0,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Payment Infrastructure", value: 95 },
    { name: "Product Strategy & Roadmapping", value: 92 },
    { name: "B2B / Enterprise SaaS", value: 90 },
    { name: "API Documentation (Postman/Swagger)", value: 80 },
    { name: "SQL & Data Analysis", value: 75 },
    { name: "Figma & UX", value: 75 },
    { name: "Mixpanel / Amplitude / Tableau", value: 80 },
    { name: "Jira / Confluence / Linear", value: 90 },
  ],
  softSkills: [
    { name: "Cross-functional Leadership", value: 95 },
    { name: "Stakeholder Management", value: 92 },
    { name: "GTM Execution", value: 88 },
    { name: "User Research", value: 85 },
    { name: "Problem Solving", value: 90 },
    { name: "Regulatory & Compliance Thinking", value: 85 },
    { name: "Communication", value: 90 },
    { name: "Adaptability", value: 88 },
  ],
};

// LEADERSHIP SECTION — disabled
const leadership = {
  show: false,
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always open to interesting conversations about product, payments, and fintech. Whether you have an opportunity or just want to connect, feel free to reach me at",
  email: "oluwafemiakinseye@gmail.com",
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
