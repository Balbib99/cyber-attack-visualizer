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
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--app-primary)]/30 bg-[var(--app-primary-soft)] text-sm font-black text-[var(--app-primary-dark)]">
            AF
          </span>
          <div>
            <p className="font-black text-[var(--app-text-primary)]">
              AttackFlow Lab
            </p>
            <p className="hidden text-xs text-[var(--app-text-muted)] sm:block">
              Ciberseguridad paso a paso
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
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
                  "rounded-full px-4 py-2 text-sm font-bold transition",
                  active
                    ? "bg-[var(--app-primary-soft)] text-[var(--app-primary-dark)]"
                    : "text-[var(--app-text-secondary)] hover:bg-[var(--app-surface)] hover:text-[var(--app-text-primary)]",
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
            className="rounded-full bg-[#4d8eff] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
          >
            Empezar
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
              className="rounded bg-[#4d8eff] px-4 py-3 text-center text-sm font-bold text-white"
            >
              Empezar
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
