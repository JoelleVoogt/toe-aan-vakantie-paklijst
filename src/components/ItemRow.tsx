import type { PackingItem } from "../data/packingData";

interface ItemRowProps {
  item: PackingItem;
  itemKey: string;
  checked: boolean;
  onToggle: (key: string, checked: boolean) => void;
}

export function ItemRow({ item, itemKey, checked, onToggle }: ItemRowProps) {
  return (
    <div
      className="flex cursor-pointer items-center gap-(--spacing-xs) border-b border-(--border-neutral-1) px-(--spacing-sm) py-(--spacing-xs) transition-colors last:border-b-0 hover:bg-(--surface-neutral-1)"
      onClick={() => onToggle(itemKey, !checked)}
    >
      <label
        className="relative h-5.5 w-5.5 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="checkbox"
          className="peer absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
          checked={checked}
          onChange={(e) => onToggle(itemKey, e.target.checked)}
        />
        <span className="flex h-5.5 w-5.5 items-center justify-center rounded-sm border-(length:--border-width-md) border-(--border-component-neutral-default) bg-(--surface-neutral-base) transition-all peer-checked:border-(--surface-primary-default) peer-checked:bg-(--surface-primary-default) peer-checked:[&>svg]:scale-100 peer-checked:[&>svg]:opacity-100 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-(--border-brand-primary)">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="scale-50 opacity-0 transition-all"
          >
            <path
              d="M11.5 3.5L5.5 10L2.5 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </label>
      <span
        className={`flex-1 text-(length:--body-size-md) transition-colors ${
          checked
            ? "text-(--content-2) line-through decoration-(--border-neutral-3)"
            : ""
        }`}
      >
        {item.name}
      </span>
      {item.note && (
        <span className="hidden text-(length:--body-size-xs) whitespace-nowrap text-(--content-2) italic md:inline-block">
          {item.note}
        </span>
      )}
    </div>
  );
}
