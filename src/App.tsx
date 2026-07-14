import { useEffect, useMemo, useState } from "react";
import { packingData } from "./data/packingData";
import { usePackingState } from "./hooks/usePackingState";
import { Hero } from "./components/Hero";
import { Actions } from "./components/Actions";
import { Category } from "./components/Category";
import { Confetti } from "./components/Confetti";

export default function App() {
  const { state, toggleItem, toggleAll, totalItems, checkedItems } =
    usePackingState();
  const [openMap, setOpenMap] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(packingData.map((_, i) => [i, true])),
  );
  const [confettiTrigger, setConfettiTrigger] = useState(0);

  const progressPct = totalItems ? Math.round((checkedItems / totalItems) * 100) : 0;

  useEffect(() => {
    if (progressPct === 100) {
      setConfettiTrigger((t) => t + 1);
    }
  }, [progressPct]);

  const setAllOpen = (open: boolean) => {
    setOpenMap(Object.fromEntries(packingData.map((_, i) => [i, open])));
  };

  const categories = useMemo(
    () =>
      packingData.map((cat, catIdx) => (
        <Category
          key={cat.title}
          category={cat}
          catIdx={catIdx}
          state={state}
          onToggle={toggleItem}
          open={openMap[catIdx] ?? true}
          onToggleOpen={() =>
            setOpenMap((prev) => ({ ...prev, [catIdx]: !prev[catIdx] }))
          }
        />
      )),
    [state, toggleItem, openMap],
  );

  return (
    <>
      <Hero checkedCount={checkedItems} progressPct={progressPct} />
      <main className="container">
        <Actions
          onCheckAll={() => toggleAll(true)}
          onExpandAll={() => setAllOpen(true)}
          onCollapseAll={() => setAllOpen(false)}
          onResetAll={() => toggleAll(false)}
        />
        <div>{categories}</div>
      </main>
      <footer>Fijn weekend weg! Vergeet je knuffel niet.</footer>
      <Confetti trigger={confettiTrigger} />
    </>
  );
}
