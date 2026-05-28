import Link from "next/link";
import { MessageSquareWarning } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function PanelScenarioCard() {
  return (
    <Card className="p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 place-items-center rounded border border-[color:var(--app-warning)]/30 bg-[var(--app-warning-soft)] text-[#b45309] dark:text-[#ffddb8]">
            <MessageSquareWarning className="h-6 w-6" />
          </span>
          <div>
            <Badge tone="orange">Escenario recomendado</Badge>
            <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
              Email urgente sospechoso
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--app-text-secondary)]">
              Practica una decisión cotidiana: qué hacer cuando un mensaje
              intenta meterte prisa para iniciar sesión.
            </p>
          </div>
        </div>
        <Link
          href="/escenarios/email-urgente"
          className="rounded bg-[#4d8eff] px-4 py-2 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
        >
          Resolver escenario
        </Link>
      </div>
    </Card>
  );
}
