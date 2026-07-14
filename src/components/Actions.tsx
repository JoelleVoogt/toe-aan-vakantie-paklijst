interface ActionsProps {
  onCheckAll: () => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  onResetAll: () => void;
}

const btnBase =
  "rounded-full border px-(--spacing-md) py-(--spacing-xs) text-(length:--body-size-sm) font-medium transition-colors";

export function Actions({
  onCheckAll,
  onExpandAll,
  onCollapseAll,
  onResetAll,
}: ActionsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-(--spacing-xs) py-(--spacing-lg) pb-(--spacing-xl)">
      <button
        className={`${btnBase} border-(--surface-secondary-default) bg-(--surface-secondary-default) text-(--content-inverse) hover:border-(--surface-secondary-hover) hover:bg-(--surface-secondary-hover)`}
        onClick={onCheckAll}
      >
        Alles aanvinken
      </button>
      <button
        className={`${btnBase} border-(--border-neutral-2) bg-(--surface-neutral-base) text-(--content-base) hover:border-(--border-neutral-3) hover:bg-(--surface-neutral-1)`}
        onClick={onExpandAll}
      >
        Alles uitklappen
      </button>
      <button
        className={`${btnBase} border-(--border-neutral-2) bg-(--surface-neutral-base) text-(--content-base) hover:border-(--border-neutral-3) hover:bg-(--surface-neutral-1)`}
        onClick={onCollapseAll}
      >
        Alles inklappen
      </button>
      <button
        className={`${btnBase} border-(--border-component-states-danger) bg-(--surface-neutral-base) text-(--content-component-states-danger) hover:bg-(--surface-states-danger)`}
        onClick={onResetAll}
      >
        Alles resetten
      </button>
    </div>
  );
}
