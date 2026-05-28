import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const mobileNavItems = [
  { href: "/", label: "Inicio" },
  { href: "/panel", label: "Panel" },
  { href: "/amenazas", label: "Amenazas" },
  { href: "/simulaciones", label: "Simulaciones" },
  { href: "/seguridad-diaria", label: "Seguridad" },
  { href: "/retos", label: "Retos" },
];

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--app-border)] bg-[var(--app-surface)]/85 backdrop-blur-xl lg:ml-72">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 lg:hidden">
          <span className="grid h-9 w-9 place-items-center rounded border border-[color:var(--app-primary)]/35 bg-[var(--app-primary-soft)] text-xs font-black text-[var(--app-primary-dark)]">
            AF
          </span>
          <span className="font-bold text-[var(--app-text-primary)]">
            AttackFlow Lab
          </span>
        </Link>
        <div className="hidden lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--app-text-muted)]">
            Consola educativa
          </p>
          <p className="text-sm text-[var(--app-text-secondary)]">
            Modo laboratorio activo
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="hidden rounded border border-[color:var(--app-success)]/30 bg-[var(--app-success-soft)] px-3 py-1 text-xs font-bold text-[#047857] sm:inline-flex dark:text-[var(--app-success)]">
            Seguro para aprender
          </span>
          <div className="grid h-9 w-9 place-items-center rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] text-sm font-bold text-[var(--app-text-primary)]">
            A
          </div>
        </div>
      </div>
      <nav className="flex gap-2 overflow-x-auto border-t border-[var(--app-border)] px-4 py-2 sm:px-6 lg:hidden">
        {mobileNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] px-3 py-2 text-xs font-bold text-[var(--app-text-secondary)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
