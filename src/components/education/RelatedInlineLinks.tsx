import Link from "next/link";

export type RelatedInlineLink = {
  label: string;
  href: string;
};

type RelatedInlineLinksProps = {
  label?: string;
  links: RelatedInlineLink[];
};

export function RelatedInlineLinks({
  label = "Relacionado",
  links,
}: RelatedInlineLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <p className="text-sm leading-6 text-[var(--app-text-muted)]">
      <span className="font-bold text-[var(--app-text-secondary)]">
        {label}:{" "}
      </span>
      {links.map((link, index) => (
        <span key={link.href}>
          <Link
            href={link.href}
            className="font-bold text-[#1d4ed8] transition hover:text-[#4d8eff] dark:text-[#adc6ff]"
          >
            {link.label}
          </Link>
          {index < links.length - 1 ? " / " : null}
        </span>
      ))}
    </p>
  );
}
