"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";

const learnItems = [
  { href: "/", label: "Inicio", icon: "I" },
  { href: "/panel", label: "Panel", icon: "P" },
  { href: "/amenazas", label: "Amenazas", icon: "A" },
  { href: "/simulaciones", label: "Simulaciones", icon: "S" },
  { href: "/seguridad-diaria", label: "Seguridad diaria", icon: "V" },
];

const practiceItems = [
  { href: "/retos", label: "Centro de retos", icon: "R" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r border-[var(--app-border)] bg-[var(--app-surface)]/92 backdrop-blur-xl lg:fixed lg:inset-y-0 lg:flex lg:flex-col">
      <div className="border-b border-[var(--app-border)] px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded border border-[color:var(--app-primary)]/35 bg-[var(--app-primary-soft)] text-sm font-black text-[var(--app-primary-dark)]">
            AF
          </span>
          <div>
            <p className="text-lg font-black text-[var(--app-text-primary)]">
              AttackFlow Lab
            </p>
            <p className="text-xs text-[var(--app-text-muted)]">
              Visual Security Lab
            </p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-6 px-3 py-5">
        <NavGroup title="Aprende" items={learnItems} pathname={pathname} />
        <NavGroup title="Practica" items={practiceItems} pathname={pathname} />
      </nav>

      <div className="mx-4 mb-3">
        <ThemeToggle />
      </div>

      <div className="m-4 rounded-lg border border-[color:var(--app-success)]/25 bg-[var(--app-success-soft)] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#047857] dark:text-[var(--app-success)]">
          Estado
        </p>
        <p className="mt-2 text-sm text-[var(--app-text-secondary)]">
          Entorno educativo sin backend ni datos reales.
        </p>
      </div>
    </aside>
  );
}

type NavItem = {
  href: string;
  label: string;
  icon: string;
};

function NavGroup({
  title,
  items,
  pathname,
}: {
  title: string;
  items: NavItem[];
  pathname: string;
}) {
  return (
    <div>
      <p className="px-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--app-text-muted)]">
        {title}
      </p>
      <div className="mt-2 space-y-1">
        {items.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded px-4 py-3 text-sm font-semibold transition",
                isActive
                  ? "border-r-2 border-[var(--app-primary)] bg-[var(--app-primary-soft)] text-[var(--app-primary-dark)]"
                  : "text-[var(--app-text-secondary)] hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)]",
              )}
            >
              <span className="grid h-6 w-6 place-items-center rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] font-mono text-xs">
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
