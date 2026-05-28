import { ThreatCard } from "@/components/threats/ThreatCard";
import { Badge } from "@/components/ui/Badge";
import { threats } from "@/data/threats";

export default function ThreatExplorerPage() {
  return (
    <section>
      <div className="max-w-3xl">
        <Badge tone="blue">Explorador de amenazas</Badge>
        <h1 className="mt-5 text-4xl font-black text-white sm:text-5xl">
          Biblioteca de ataques de ciberseguridad
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Analiza amenazas comunes con contexto, dificultad, nivel de riesgo y
          acceso directo a detalles o simulaciones disponibles.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {threats.map((threat) => (
          <ThreatCard key={threat.id} threat={threat} />
        ))}
      </div>
    </section>
  );
}
