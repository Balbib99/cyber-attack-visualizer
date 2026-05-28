import { SafetyTipCard } from "@/components/safety/SafetyTipCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { safetyTips } from "@/data/safetyTips";

export default function DailySafetyPage() {
  return (
    <section>
      <div className="grid gap-6 xl:grid-cols-[1fr_22rem]">
        <div className="max-w-3xl">
          <Badge tone="green">Seguridad diaria</Badge>
          <h1 className="mt-5 text-4xl font-black text-white sm:text-5xl">
            Consejos prácticos para situaciones reales
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Buenas prácticas generales para proteger cuentas, documentos y
            decisiones cotidianas en internet. No sustituyen asesoramiento legal
            ni instrucciones oficiales de una entidad.
          </p>
        </div>
        <Card className="border-[#4edea3]/20 p-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#6ffbbe]">
            Enfoque responsable
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            La prioridad es reducir exposición y tomar mejores decisiones antes
            de compartir información sensible.
          </p>
        </Card>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {safetyTips.map((tip) => (
          <SafetyTipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </section>
  );
}
