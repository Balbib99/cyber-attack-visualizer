"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? `Cambiar a tema ${isDark ? "claro" : "oscuro"}`
          : "Cambiar tema"
      }
      className="inline-flex items-center gap-2 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] px-3 py-2 text-xs font-bold text-[var(--app-text-secondary)] shadow-sm shadow-[var(--app-shadow)] transition hover:border-[color:var(--app-primary)]/40 hover:bg-[var(--app-primary-soft)] hover:text-[var(--app-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[color:var(--app-primary)]/50"
      suppressHydrationWarning
    >
      {mounted && isDark ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span>{mounted ? (isDark ? "Oscuro" : "Claro") : "Tema"}</span>
    </button>
  );
}
