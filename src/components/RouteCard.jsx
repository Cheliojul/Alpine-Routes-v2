// Altitude range across all routes, used to scale every elevation profile
// on the same vertical axis (so steeper climbs read as steeper lines).
const GLOBAL_MIN = 234;
const GLOBAL_MAX = 1816;

// Padded chart box so dots and labels never touch the card edges.
const W = 240;
const H = 96;
const OX = 34;
const DX = 206;
const PLOT_TOP = 36;
const PLOT_BOTTOM = 72;
const BASELINE = 80;

function altToY(alt) {
  const frac = (alt - GLOBAL_MIN) / (GLOBAL_MAX - GLOBAL_MIN);
  return Math.round((PLOT_BOTTOM - frac * (PLOT_BOTTOM - PLOT_TOP)) * 10) / 10;
}

export default function RouteCard({ route }) {
  const {
    name,
    from,
    to,
    reserve,
    gradId,
    originLabel,
    destLabel,
    duration,
    distance,
    price,
  } = route;

  const oy = altToY(parseInt(originLabel, 10));
  const dy = altToY(parseInt(destLabel, 10));
  const linePath = `M${OX},${oy} C${OX + 62},${oy} ${DX - 62},${dy} ${DX},${dy}`;
  const areaPath = `${linePath} L${DX},${BASELINE} L${OX},${BASELINE} Z`;

  return (
    <article className="route-card">
      <h3 className="route-card__name">{name}</h3>
      <svg
        className="elev"
        viewBox={`0 0 ${W} ${H}`}
        aria-label={`Elevation profile from ${originLabel} to ${destLabel}`}
        role="img"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path className="elev-fill" d={areaPath} fill={`url(#${gradId})`} />
        <path className="elev-line" d={linePath} fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
        <circle cx={OX} cy={oy} r="3.5" fill="var(--color-accent)" />
        <circle cx={DX} cy={dy} r="3.5" fill="var(--color-accent)" />
        <text x={OX} y={oy + 16} textAnchor="middle" className="elev-label">{originLabel}</text>
        <text x={DX} y={dy - 10} textAnchor="middle" className="elev-label">{destLabel}</text>
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
