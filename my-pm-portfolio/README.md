# Oluwafemi Siji‑Kenneth – Product Manager Portfolio

Welcome to the source code for **Oluwafemi Siji‑Kenneth’s** product manager portfolio. This repository contains a modern, responsive and accessible static website built with **vanilla HTML, CSS and JavaScript** (no build tools required). It follows a modular information architecture inspired by Mindy Nguyen’s portfolio and adapts the colour palette to Femi’s personal brand.

## 🚀 Getting started

Because the site is static there is no build step. You can preview it locally using Python’s simple HTTP server:

```bash
# From the project root
python3 -m http.server 3000 --directory .
# Then visit http://localhost:3000 in your browser
```

### Editing content and adding social links

The content lives in individual HTML files:

- `index.html` – home page with hero, featured work, skills, writing and CTA
- `about.html` – biography, values, process and timeline
- `work/` – case study index (`index.html`) and individual case studies
- `writing/` – posts index and individual posts
- `speaking.html` – talks and media appearances
- `projects.html` – side projects
- `contact.html` – contact form (uses a `mailto:` handler)
- `now.html` – a Now page
- `404.html` – friendly error page

To add a new case study or post:

1. Duplicate an existing file in the appropriate folder (e.g. `work/fcmb-cib.html`).
2. Update the metadata (title, description, headings) and write your content.
3. Add an entry to the index page (`work/index.html` or `writing/index.html`) with a card linking to your new file.

No build or compilation is needed; simply commit your changes and redeploy.

#### Adding social links

This scaffold does not include social icons by default. To add your own LinkedIn, GitHub, Twitter or other profiles:

1. Open `assets/style.css` and find the `.footer` styles.
2. Edit the `footer` markup in each HTML file (or copy one instance into its own include) and insert anchor tags with your profile URLs. For example:

```html
<footer class="footer">
  <p>&copy; 2025 Oluwafemi&nbsp;Siji‑Kenneth.</p>
  <nav class="socials">
    <a href="https://linkedin.com/in/your-profile" aria-label="LinkedIn">LinkedIn</a>
    <a href="https://github.com/your-handle" aria-label="GitHub">GitHub</a>
    <!-- Add more as needed -->
  </nav>
</footer>
```

You can style these links using the existing button or link classes, or create a new class in the CSS.

### Adding images

Place images in the `images/` folder and reference them with a relative path. The hero and case study thumbnails are generated using an AI image generator. You can replace these by dropping in new images and updating the `<img>` `src` attributes.

### Changing the design

The site’s look and feel is driven by **design tokens** defined in [`css/tokens.css`](css/tokens.css). These CSS variables set the colour palette, spacing scale and typography. If you’d like to adjust the brand colours, update the variables there. The global styles live in [`assets/style.css`](assets/style.css) and implement the components (buttons, cards, forms). A [`theme-preview.html`](theme-preview.html) page demonstrates the components and how they adapt to dark mode.

Default palette:

- **Primary**: Indigo tones (`#4F46E5` light, `#818CF8` dark)
- **Accent**: Cyan tones (`#06B6D4` light, `#22D3EE` dark)
- **Neutral surfaces**: light surfaces on dark text and vice versa. Dark mode inverts backgrounds and text colours while maintaining contrast.

Default typography:

- **Headings**: General Sans (fallback Inter, system UI)
- **Body**: Inter
- **Mono**: Geist Mono

Spacing uses an 8‑point base scale (8, 16, 24, 32, etc.) and radii start at 4 px for small buttons up to 16 px for cards.

## 🌗 Dark mode

A dark mode is built in. Click the moon/sun button in the navigation bar to toggle. Your preference is stored in `localStorage` so it persists across visits. You can modify or remove this behaviour in [`js/main.js`](js/main.js).

## 🧪 Accessibility & SEO

- Semantic HTML with proper landmarks and headings.
- Skip link to jump directly to the main content.
- High‑contrast colours that meet WCAG AA standards.
- Forms include labels and a honeypot field to deter spam.
- Meta descriptions and titles are set per page.

## 🛫 Deploying to GitHub Pages

This repository includes a **GitHub Actions** workflow to publish the site to GitHub Pages. To enable automatic deployment:

1. Create a new repository on GitHub named **`my-pm-portfolio`** (or your preferred name). If you want to use a user page (e.g. `iFemora.github.io`) set `IS_USER_PAGE` accordingly.
2. Push the contents of this directory to the repository’s `main` branch.
3. On GitHub, go to **Settings → Pages** and select **GitHub Actions** as the source.
4. The provided workflow in `.github/workflows/deploy.yml` will automatically upload the static files and deploy them. After a minute your site will be live at `https://GITHUB_USERNAME.github.io` (for a user page) or `https://GITHUB_USERNAME.github.io/REPO_NAME/` (for a project page).

If you cannot or prefer not to use GitHub Actions, you can also deploy manually by serving the contents via any static host (Netlify, Vercel, S3, etc.).

## 📝 Brand Brief

The design takes cues from [Mindy Nguyen’s portfolio](https://mindynguyen.me/) – generous white space, clear hierarchy and a restrained palette. Femi’s site swaps in a cool indigo/cyan scheme inspired by technology and tennis. The default typefaces are **Inter** for headings and body copy, and **Geist Mono** for code and monospaced text. Spacing follows a 4/8‑point scale and corners are softly rounded. Shadows provide subtle depth on hover.

## 🧑‍💻 Scripts & Development

While this site doesn’t rely on a build step, a minimal `package.json` is included with convenience scripts:

```bash
npm run dev        # Serve the site on http://localhost:3000
npm run build      # No-op (static site)
npm run preview    # Alias of dev
npm run lint       # Placeholder
npm run check:links# Placeholder
```

Feel free to extend these scripts with tooling of your choice (ESLint, Prettier, link checkers) if you adopt a Node‑based workflow.

## 📂 Repository structure

```
my-pm-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment workflow
├── assets/
│   └── style.css           # Global CSS built on tokens
├── css/
│   ├── tailwind.css        # Unused but kept for reference
│   └── tokens.css          # Design tokens (colours, spacing, fonts)
├── images/                 # Generated and placeholder images
├── js/
│   └── main.js             # Dark mode, filtering and honeypot script
├── work/                   # Case study index and pages
├── writing/                # Blog index and posts
├── about.html
├── contact.html
├── index.html
├── now.html
├── projects.html
├── speaking.html
├── theme-preview.html
├── 404.html
├── package.json
├── LICENSE
└── README.md
```

## 📬 Feedback

I built this portfolio as a living document of my work and growth. If you spot any issues or have suggestions, please feel free to open an issue or get in touch via email. Thanks for visiting!
