interface ActionsProps {
  onCheckAll: () => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  onResetAll: () => void;
}

export function Actions({
  onCheckAll,
  onExpandAll,
  onCollapseAll,
  onResetAll,
}: ActionsProps) {
  return (
    <div className="actions">
      <button className="btn btn-primary" onClick={onCheckAll}>
        Alles aanvinken
      </button>
      <button className="btn" onClick={onExpandAll}>
        Alles uitklappen
      </button>
      <button className="btn" onClick={onCollapseAll}>
        Alles inklappen
      </button>
      <button className="btn btn-danger" onClick={onResetAll}>
        Alles resetten
      </button>
    </div>
  );
}
