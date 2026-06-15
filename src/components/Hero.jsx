export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__layer" data-depth="14"></div>
        <svg className="hero__mountains" viewBox="0 0 1440 460" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
          {/* Farthest range — lightest, recedes into haze */}
          <g className="hero__layer" data-depth="14">
            <path className="hero__range hero__range--1" d="M0,460 L0,210 L180,180 L380,215 L560,165 L760,205 L960,160 L1180,200 L1330,170 L1440,195 L1440,460 Z" />
          </g>

          <g className="hero__layer" data-depth="24">
            <path className="hero__range hero__range--2" d="M0,460 L0,260 L160,235 L340,270 L520,210 L700,265 L900,215 L1080,260 L1280,220 L1440,255 L1440,460 Z" />
          </g>

          <g className="hero__layer" data-depth="38">
            <path className="hero__range hero__range--3" d="M0,460 L0,320 L150,300 L320,250 L470,310 L650,260 L840,320 L1020,265 L1220,315 L1380,275 L1440,300 L1440,460 Z" />
          </g>

          {/* Nearest massif — two snow-capped summits */}
          <g className="hero__layer" data-depth="56">
            <path className="hero__range hero__range--4" d="M0,460 L0,382 L150,362 L320,332 L470,190 L600,330 L740,300 L860,332 L1000,210 L1140,318 L1280,330 L1400,300 L1440,318 L1440,460 Z" />
            <path className="hero__snowcap" d="M470,190 L537,262 L516,252 L497,264 L478,250 L458,264 L438,252 L394,262 Z" />
            <path className="hero__snowcap" d="M1000,210 L1091,280 L1070,271 L1050,283 L1030,269 L1009,283 L988,271 L920,280 Z" />
          </g>
        </svg>
        <canvas className="hero__snow"></canvas>
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow">ALPINE TRANSFERS · SINCE 2009</p>
        <h1 className="hero__headline">Valley to summit,<br />on the minute.</h1>
        <p className="hero__sub">Private airport shuttles and ski-resort transfers across the Alps — chauffeured, weather-ready, and timed to your flight, not ours.</p>
        <div className="hero__cta">
          <a href="#book" className="btn btn-primary">Book a Transfer</a>
          <a href="#routes" className="btn btn-secondary">View Routes</a>
        </div>
      </div>

      <div className="hero__contour" aria-hidden="true">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path className="hero__contour-line hero__contour-line--1" d="M0,52 C120,44 240,58 360,50 C480,42 600,56 720,48 C840,40 960,54 1080,46 C1200,38 1320,52 1440,44" />
          <path className="hero__contour-line hero__contour-line--2" d="M0,40 C100,32 220,46 360,36 C500,26 620,42 720,34 C820,26 940,40 1080,32 C1220,24 1340,38 1440,30" />
          <path className="hero__contour-line hero__contour-line--3" d="M0,28 C140,20 260,34 400,24 C540,14 640,30 720,22 C800,14 920,26 1080,18 C1240,10 1360,24 1440,16" />
        </svg>
      </div>
    </section>
  );
}
