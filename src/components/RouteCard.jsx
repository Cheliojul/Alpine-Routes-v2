export default function RouteCard({ route }) {
  const {
    name,
    from,
    to,
    reserve,
    gradId,
    fillPath,
    linePath,
    originY,
    destY,
    originLabel,
    destLabel,
    originLabelY,
    destLabelY,
    duration,
    distance,
    price,
  } = route;

  return (
    <article className="route-card">
      <h3 className="route-card__name">{name}</h3>
      <svg
        className="elev"
        viewBox="0 0 240 70"
        aria-label={`Elevation profile from ${originLabel} to ${destLabel}`}
        role="img"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path className="elev-fill" d={fillPath} fill={`url(#${gradId})`} />
        <path className="elev-line" d={linePath} fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy={originY} r="3.5" fill="var(--color-accent)" />
        <circle cx="212" cy={destY} r="3.5" fill="var(--color-accent)" />
        <text x="28" y={originLabelY} textAnchor="middle" className="elev-label">{originLabel}</text>
        <text x="212" y={destLabelY} textAnchor="middle" className="elev-label">{destLabel}</text>
      </svg>
      <div className="route-card__meta">
        <span className="route-card__stats">
          <span className="route-card__stat">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {duration}
          </span>
          <span className="route-card__stat">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="6" cy="19" r="2" />
              <circle cx="18" cy="5" r="2" />
              <path d="M7.5 17.5 16.5 6.5" />
            </svg>
            {distance}
          </span>
        </span>
        <span className="route-card__price">from <span className="route-card__price-num">{price}</span></span>
      </div>
      <a
        href="#book"
        className="route-card__cta btn-secondary"
        data-route-from={from}
        data-route-to={to}
        aria-label={`Reserve ${reserve} transfer`}
      >
        Reserve →
      </a>
    </article>
  );
}
