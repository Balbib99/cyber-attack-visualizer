import { Badge } from "@/components/ui/Badge";

type HomeSectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function HomeSectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: HomeSectionHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      <Badge tone="blue">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--app-text-primary)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-[var(--app-text-secondary)]">
        {description}
      </p>
    </div>
  );
}
