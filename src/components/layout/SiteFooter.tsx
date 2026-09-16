import { FolderGit2, Link2, Mail } from "lucide-react";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/balbino-martinez-rodriguez-2912bb332",
    icon: Link2,
  },
  {
    label: "GitHub",
    href: "https://github.com/Balbib99",
    icon: FolderGit2,
  },
  {
    label: "Email",
    href: "mailto:balbib99@gmail.com",
    icon: Mail,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--app-border)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded border-2 border-double border-[var(--app-primary)] font-mono text-xs font-bold text-[var(--app-primary)]">
            AF
          </span>
          <div>
            <p className="text-sm text-[var(--app-text-primary)]">
              Balbino Martínez Rodríguez
            </p>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--app-text-muted)]">
              AttackFlow Lab · proyecto de portfolio
            </p>
          </div>
        </div>

        <nav aria-label="Enlaces de contacto" className="flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-sm border border-[var(--app-border)] px-3 py-2 font-mono text-xs uppercase tracking-[0.03em] text-[var(--app-text-secondary)] transition hover:border-[var(--app-primary)]/40 hover:text-[var(--app-text-primary)]"
            >
              <link.icon className="h-4 w-4" aria-hidden="true" />
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
