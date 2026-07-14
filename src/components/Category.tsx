import type { PackingCategory } from "../data/packingData";
import { itemKey, type PackingState } from "../hooks/usePackingState";
import { ItemRow } from "./ItemRow";

interface CategoryProps {
  category: PackingCategory;
  catIdx: number;
  state: PackingState;
  onToggle: (key: string, checked: boolean) => void;
  open: boolean;
  onToggleOpen: () => void;
}

export function Category({
  category,
  catIdx,
  state,
  onToggle,
  open,
  onToggleOpen,
}: CategoryProps) {
  const checkedInCat = category.items.filter(
    (_, i) => state[itemKey(catIdx, i)],
  ).length;

  return (
    <div className="mb-(--spacing-lg)">
      <div
        className="flex cursor-pointer items-center justify-between border-b border-(--border-neutral-2) py-(--spacing-sm) transition-colors select-none hover:border-(--border-neutral-3)"
        onClick={onToggleOpen}
      >
        <div className="flex items-center gap-(--spacing-xs)">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-(--surface-neutral-1) text-2xl">
            {category.icon}
          </span>
          <span className="font-serif text-(length:--heading-size-xs) font-medium">
            {category.title}
          </span>
          <span className="ml-(--spacing-2xs) text-(length:--body-size-sm) text-(--content-2)">
            {checkedInCat}/{category.items.length}
          </span>
        </div>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-5 w-5 shrink-0 text-(--content-2) transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-350 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          {category.items.map((item, itemIdx) => {
            const key = itemKey(catIdx, itemIdx);
            return (
              <ItemRow
                key={key}
                item={item}
                itemKey={key}
                checked={Boolean(state[key])}
                onToggle={onToggle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
