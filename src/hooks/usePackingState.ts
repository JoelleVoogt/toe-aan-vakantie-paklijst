import { useCallback, useState } from "react";
import { packingData } from "../data/packingData";

const STORAGE_KEY = "weekend-weg-paklijst-2026";

export type PackingState = Record<string, boolean>;

export function itemKey(catIdx: number, itemIdx: number): string {
  return `${catIdx}-${itemIdx}`;
}

function loadState(): PackingState {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as PackingState;
  } catch {
    return {};
  }
}

export function usePackingState() {
  const [state, setState] = useState<PackingState>(loadState);

  const persist = useCallback((next: PackingState) => {
    setState(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const toggleItem = useCallback(
    (key: string, checked: boolean) => {
      persist({ ...state, [key]: checked });
    },
    [state, persist],
  );

  const toggleAll = useCallback(
    (checked: boolean) => {
      const next: PackingState = {};
      packingData.forEach((cat, catIdx) => {
        cat.items.forEach((_, itemIdx) => {
          next[itemKey(catIdx, itemIdx)] = checked;
        });
      });
      persist(next);
    },
    [persist],
  );

  const totalItems = packingData.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedItems = Object.values(state).filter(Boolean).length;

  return { state, toggleItem, toggleAll, totalItems, checkedItems };
}
