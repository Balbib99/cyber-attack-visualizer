import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] shadow-2xl shadow-[var(--app-shadow)] dark:bg-[var(--app-surface)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
