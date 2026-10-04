import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ title, description, className, children }: SectionProps) {
  return (
    <section className={cn("mb-14 md:mb-18", className)}>
      <div className="mb-5 space-y-1">
        <h2 className="text-lg md:text-xl font-bold tracking-tight text-foreground">{title}</h2>
        {description && (
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
      <div className="rounded-2xl border border-border/50 bg-card/30 p-6 md:p-8 transition-colors hover:border-border/80">
        {children}
      </div>
    </section>
  );
}

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-10 md:mb-14 border-b border-border/40 pb-6 space-y-2">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">{title}</h1>
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">{description}</p>
      )}
    </div>
  );
}
