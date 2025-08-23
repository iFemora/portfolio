# Product Manager Portfolio

This repository contains a modern, responsive portfolio website for **Oluwafemi Siji‑Kenneth**, a technology product manager and recreational tennis player. The site is built as a **static HTML/CSS/JS** project that you can deploy directly to GitHub Pages. It showcases case studies, writing, speaking engagements, projects, and a contact form.

> **Note:** The original specification called for an Astro + Tailwind implementation. Due to limitations in this environment (no access to npm registries), the project has been implemented with vanilla HTML, CSS (leveraging custom tokens inspired by Tailwind), and JavaScript. The structure, content model, and design closely follow the brief, and you can extend or migrate to Astro in the future.

## Features

- **Multi‑page site** covering Home, About, Work (case studies), Writing, Speaking, Projects, Contact, Now, and a custom 404 page.
- **Accessible and responsive**: mobile‑first layouts, semantic HTML, skip link, focus styles, and color contrast meet WCAG AA guidelines.
- **Dark mode**: toggle between light and dark themes; preference is persisted in `localStorage`.
- **Design tokens**: fonts, colors, spacing, radii, and shadows defined in `css/tokens.css` and consumed across the site. See `theme-preview.html` for a palette and component showcase.
- **Placeholder content**: two detailed case studies and two blog posts are seeded with sample copy and tables. Simply duplicate and edit HTML files to add more.
- **Contact form**: basic email form with a honeypot anti‑spam field; defaults to `mailto:oluwafemiakinseye@gmail.com`.
- **Open Graph & SEO‑friendly** metadata on each page.

## File Structure

```
my-pm-portfolio/
├── assets/
│   └── style.css          # Compiled stylesheet from tokens.css
├── css/
│   ├── tailwind.css       # Input file with @tailwind directives (not used in build)
│   └── tokens.css         # CSS custom properties defining the design system
├── images/
│   ├── hero.png           # Abstract hero/cover image (AI‑generated)
│   └── favicon.png        # Favicon derived from the hero image
├── js/
│   └── main.js            # Handles mobile menu, dark mode toggle, and current year
├── work/
│   ├── index.html         # Case studies index
│   ├── fcmb-cib.html      # Detailed case study 1
│   └── payments-platform.html # Detailed case study 2
├── writing/
│   ├── index.html         # Posts listing
│   ├── how-i-approach-product-discovery.html
│   └── balancing-user-needs.html
├── about.html
├── contact.html
├── index.html             # Home page
├── now.html
├── projects.html
├── speaking.html
├── theme-preview.html
└── 404.html
```

## Running Locally

Because this site is completely static, you can open any of the `.html` files directly in your browser. To view with proper routing (including 404 handling), it's recommended to run a simple HTTP server:

```bash
cd my-pm-portfolio
python3 -m http.server 8000
# then visit http://localhost:8000 in your browser
```

## Deploying to GitHub Pages

1. **Create a new repository** on GitHub named `my-pm-portfolio` (or the name of your choice). If you're using a user site (i.e. `username.github.io`), set `REPO_NAME` accordingly.
2. **Upload/commit** the contents of the `my-pm-portfolio` folder to the repository's `main` branch.
3. **Enable GitHub Pages**:
   - Go to **Settings → Pages**.
   - Select **Deploy from a branch**.
   - Choose the `main` branch and `/` root (or `/docs` if you move files).
   - Save. Your site will be available at `https://YOUR_USERNAME.github.io/REPO_NAME/` (or `https://YOUR_USERNAME.github.io/` for user pages).

Alternatively, you can enable the provided GitHub Actions workflow (not included here due to environment constraints) to automate deployment on every push.

## Customization Guide

### Updating Social Links

Social links in the header and footer currently point to `#`. To add your real profiles:

1. Open `index.html`, `about.html`, and other pages containing the social SVGs.
2. Replace the `href="#"` with your actual URLs, e.g. `https://linkedin.com/in/yourname` or `https://github.com/iFemora`.

### Adding Case Studies

1. Duplicate `work/fcmb-cib.html` and rename it to your new slug, e.g. `new-project.html`.
2. Update the hero section title, subtitle, and dates.
3. Replace the Context, Goals, Approach, Outcomes, Learnings, and What's Next sections with your own content. Feel free to add images by placing them in `images/` and referencing via relative paths.
4. Add a card for your new case study in `work/index.html` by copying one of the existing `<article>` blocks and updating the link and summary.

### Adding Blog Posts

1. Duplicate one of the HTML files in `writing/` and rename it using a descriptive slug.
2. Adjust the `<title>`, `<meta name="description">`, and the header within the article.
3. Write your content inside the `<section class="prose…">` element. Use standard HTML tags like `<h2>`, `<p>`, `<ul>`, etc.
4. Add a card to `writing/index.html` with the post title, summary, and publication date.

### Updating the Now Page

Edit `now.html` to reflect your current priorities. It’s a great way to keep visitors informed about what you're focused on.

### Design Adjustments

All design tokens live in `css/tokens.css`. You can tweak colors, fonts, spacing, and shadows there. The compiled CSS resides in `assets/style.css`; if you modify tokens you must update the compiled file accordingly. In this environment the compiled stylesheet has been pre‑generated – to recompile manually use a tool like [postcss](https://postcss.org/) with a Tailwind build pipeline or hand‑edit `assets/style.css`.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Feel free to fork this repository and tailor it to your own needs. Pull requests are welcome!