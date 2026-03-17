import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] mt-32">
      <div className="max-w-layout mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          © {year} Femi Siji-Kenneth
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:oluwafemiakinseye@gmail.com"
            className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
