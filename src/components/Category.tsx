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
    <div className={`category ${open ? "open" : ""}`}>
      <div className="category-header" onClick={onToggleOpen}>
        <div className="category-header-left">
          <span className="category-icon">{category.icon}</span>
          <span className="category-title">{category.title}</span>
          <span className="category-count">
            {checkedInCat}/{category.items.length}
          </span>
        </div>
        <svg className="category-chevron" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="category-items">
        <div className="category-items-inner">
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
