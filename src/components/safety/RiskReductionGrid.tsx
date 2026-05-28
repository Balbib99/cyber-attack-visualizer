import { FileWarning, IdCard, ShieldAlert, UploadCloud } from "lucide-react";
import { Card } from "@/components/ui/Card";

const risks = [
  {
    title: "Reutilización del documento",
    description: "Hace más evidente que la imagen tenía un uso concreto.",
    icon: FileWarning,
  },
  {
    title: "Suplantación de identidad",
    description: "Añade fricción si alguien intenta usar esa copia en otro contexto.",
    icon: IdCard,
  },
  {
    title: "Uso fuera del contexto autorizado",
    description: "La finalidad queda visible en la propia imagen.",
    icon: ShieldAlert,
  },
  {
    title: "Exposición en caso de filtración",
    description: "No elimina el riesgo, pero reduce el valor de una copia limpia.",
    icon: UploadCloud,
  },
];

export function RiskReductionGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {risks.map((risk) => {
        const Icon = risk.icon;

        return (
          <Card key={risk.title} className="border-[#ffb95f]/20 p-5">
            <span className="grid h-11 w-11 place-items-center rounded border border-[#ffb95f]/35 bg-[#ffb95f]/10 text-[#ffddb8]">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-black text-white">{risk.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {risk.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
