import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  /** Notch de carpeta en la esquina superior — reservado para tarjetas con
   * entidad de documento propio (amenazas, retos). No usar por defecto. */
  notch?: boolean;
};

export function Card({ children, className, notch, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded border border-[var(--app-border)] bg-[var(--app-surface)] shadow-lg shadow-[var(--app-shadow)]",
        notch && "doc-notch",
        className,
      )}
    >
      {children}
    </div>
  );
}
