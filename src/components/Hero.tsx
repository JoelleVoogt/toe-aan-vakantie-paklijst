interface HeroProps {
  checkedCount: number;
  progressPct: number;
}

export function Hero({ checkedCount, progressPct }: HeroProps) {
  return (
    <header className="relative overflow-hidden bg-(--color-neutral-950) px-(--layout-container-padding) pt-(--spacing-3xl) pb-(--spacing-xl) text-center text-(--color-neutral-0) md:pt-(--spacing-4xl) md:pb-(--spacing-3xl)">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, var(--color-blue-800) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, var(--color-brand-800) 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[720px]">
        <div className="mb-(--spacing-md) inline-flex items-center gap-(--spacing-2xs) text-(length:--body-size-xs) font-medium tracking-[0.08em] text-(--color-brand-300) uppercase">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--color-brand-400)" />
          Paklijst 2026
        </div>
        <h1 className="mb-(--spacing-sm) font-serif text-(length:--heading-size-lg) leading-(--font-heading-lg-line-height) font-normal md:text-(length:--heading-size-xl) md:leading-(--font-heading-xl-line-height)">
          Toe aan Vakantie
        </h1>
        <p className="mx-auto mb-(--spacing-lg) max-w-130 text-(length:--body-size-lg) leading-(--font-body-lg-line-height) text-(--color-neutral-300)">
          Kan iemand aub alvast een ijskouwe pilsie koud leggen voor mij?!?!! En
          de jacuzzi opwarmen??!?! AAHHHH
        </p>
        <div className="mx-auto max-w-[400px]">
          <div className="mb-(--spacing-2xs) flex justify-between text-(length:--body-size-sm) text-(--color-neutral-400)">
            <span>
              <span className="font-semibold text-(--color-neutral-0)">
                {checkedCount}
              </span>{" "}
              ingepakt
            </span>
            <span>{progressPct}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-(--color-neutral-800)">
            <div
              className="h-full rounded-full bg-gradient-to-r from-(--color-brand-500) to-(--color-brand-300) transition-[width] duration-500 ease-in-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
