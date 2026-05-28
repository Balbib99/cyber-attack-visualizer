"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ShieldCheck } from "lucide-react";
import { FeaturedTipSection } from "@/components/home/FeaturedTipSection";
import { SafetyTipCard } from "@/components/safety/SafetyTipCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { safetyTips } from "@/data/safetyTips";

const filters = [
  "Todos",
  "Identidad",
  "Enlaces",
  "Cuentas",
  "Archivos",
  "Privacidad",
  "Herramientas",
];

export default function DailySafetyPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredTips = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const normalizedFilter = activeFilter.toLowerCase();

    return safetyTips.filter((tip) => {
      const haystack = [
        tip.title,
        tip.summary,
        tip.category,
        tip.recommendedTool?.name ?? "",
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = normalizedQuery
        ? haystack.includes(normalizedQuery)
        : true;
      const matchesFilter =
        activeFilter === "Todos" ||
        haystack.includes(normalizedFilter) ||
        (activeFilter === "Herramientas" && Boolean(tip.recommendedTool));

      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, query]);

  return (
    <div className="space-y-12">
      <section className="mx-auto max-w-4xl text-center">
        <Badge tone="green">Seguridad diaria</Badge>
        <h1 className="mt-5 text-4xl font-black text-[var(--app-text-primary)] sm:text-6xl">
          Consejos prácticos de seguridad
        </h1>
        <p className="mt-5 text-xl font-semibold leading-8 text-[#1d4ed8] dark:text-[#adc6ff]">
          Pequeños hábitos que te ayudan a proteger tus datos, tus cuentas y tus
          decisiones online.
        </p>
        <p className="mx-auto mt-4 max-w-3xl leading-7 text-[var(--app-text-secondary)]">
          Aprende a revisar enlaces, compartir documentos sensibles, reconocer
          páginas falsas y usar herramientas útiles con más tranquilidad.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/seguridad-diaria/dni-marca-agua"
            className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
          >
            Ver consejo destacado
          </Link>
          <Link
            href="/escenarios"
            className="rounded border border-[#4d8eff]/40 px-5 py-3 text-center text-sm font-bold text-[#1d4ed8] transition hover:bg-[#4d8eff]/10 dark:text-[#adc6ff]"
          >
            Resolver escenario
          </Link>
        </div>
      </section>

      <FeaturedTipSection />

      <Card className="p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Buscar consejos</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--app-text-muted)]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar consejos, herramientas o situaciones..."
              className="w-full rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] py-3 pl-12 pr-4 text-sm font-semibold text-[var(--app-text-primary)] outline-none transition placeholder:text-[var(--app-text-muted)] focus:border-[#4d8eff]"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                  activeFilter === filter
                    ? "border-[#4d8eff]/40 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]"
                    : "border-[var(--app-border)] text-[var(--app-text-secondary)] hover:bg-[var(--app-surface-elevated)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <section className="space-y-5">
        <div className="max-w-3xl">
          <Badge tone="blue">Biblioteca</Badge>
          <h2 className="mt-4 text-3xl font-black text-[var(--app-text-primary)]">
            Hábitos para el día a día
          </h2>
          <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
            Consejos visuales, responsables y aplicables sin prometer seguridad
            absoluta.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredTips.map((tip) => (
            <SafetyTipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </section>

      <Card className="p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[color:var(--app-success)]/30 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <Badge tone="green">Practica una decisión real</Badge>
              <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
                Lleva un consejo a una situación concreta
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
                Después de leer un consejo, puedes entrenar una situación
                cotidiana en los escenarios interactivos.
              </p>
            </div>
          </div>
          <Link
            href="/escenarios"
            className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
          >
            Ver escenarios
          </Link>
        </div>
      </Card>
    </div>
  );
}
