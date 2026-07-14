import type { PackingItem } from "../data/packingData";

interface ItemRowProps {
  item: PackingItem;
  itemKey: string;
  checked: boolean;
  onToggle: (key: string, checked: boolean) => void;
}

export function ItemRow({ item, itemKey, checked, onToggle }: ItemRowProps) {
  return (
    <div className={`item ${checked ? "checked" : ""}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onToggle(itemKey, e.target.checked)}
        />
        <span className="checkmark">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
        className="item-label"
        onClick={() => onToggle(itemKey, !checked)}
      >
        {item.name}
      </span>
      {item.note && <span className="item-note">{item.note}</span>}
    </div>
  );
}
