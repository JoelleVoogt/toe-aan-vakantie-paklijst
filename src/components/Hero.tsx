interface HeroProps {
  checkedCount: number;
  progressPct: number;
}

export function Hero({ checkedCount, progressPct }: HeroProps) {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-badge">Paklijst 2026</div>
        <h1>Toe aan Vakantie</h1>
        <p>
          Niet toe aan nog een dag werk, wel toe aan de koffer. Lekker weertje, 20
          graden, vooral chillen in het huisje en af en toe erop uit. Vink af wat je
          hebt ingepakt.
        </p>
        <div className="progress-bar-container">
          <div className="progress-stats">
            <span>
              <span className="count">{checkedCount}</span> ingepakt
            </span>
            <span>{progressPct}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </div>
    </header>
  );
}
