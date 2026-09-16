"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/proyecto", label: "Proyecto" },
  { href: "/panel", label: "Panel" },
  { href: "/rutas", label: "Rutas" },
  {
    href: "/simulaciones",
    label: "Simulaciones",
    matchPrefixes: ["/simulaciones", "/simulador"],
  },
  { href: "/seguridad-diaria", label: "Tips" },
  { href: "/escenarios", label: "Escenarios" },
  { href: "/retos", label: "Retos" },
];

export function PublicNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--app-border)] bg-[var(--app-bg)]/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded border-2 border-double border-[var(--app-primary)] font-mono text-sm font-bold text-[var(--app-primary)]">
            AF
          </span>
          <div>
            <p className="text-base text-[var(--app-text-primary)] [font-family:var(--font-display)]">
              AttackFlow Lab
            </p>
            <p className="hidden font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--app-text-muted)] sm:block">
              Expediente abierto
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 border-l border-[var(--app-border)] pl-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : (item.matchPrefixes ?? [item.href]).some((prefix) =>
                    pathname.startsWith(prefix),
                  );

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-[0.03em] transition",
                  active
                    ? "border border-[var(--app-border-strong)] bg-[var(--app-bg)] font-bold text-[var(--app-text-primary)]"
                    : "border border-transparent text-[var(--app-text-secondary)] hover:text-[var(--app-primary)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/rutas"
            className="rounded-sm border border-[var(--app-primary)] bg-[var(--app-primary)] px-4 py-2 font-mono text-xs uppercase tracking-[0.04em] text-[var(--app-surface)] transition hover:bg-transparent hover:text-[var(--app-primary)]"
          >
            Empezar →
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded border border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text-primary)]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-[var(--app-border)] bg-[var(--app-bg)] px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-3 text-sm font-bold text-[var(--app-text-secondary)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/rutas"
              onClick={() => setOpen(false)}
              className="rounded bg-[var(--app-primary)] px-4 py-3 text-center text-sm font-bold text-[var(--app-surface)]"
            >
              Empezar
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
