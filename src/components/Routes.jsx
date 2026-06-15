import { routes } from '../data/routes';
import RouteCard from './RouteCard';

export default function Routes() {
  return (
    <section className="routes section" id="routes">
      <div className="container">
        <p className="routes__eyebrow">FEATURED TRANSFERS</p>
        <h2 className="routes__heading">Four climbs we know by heart.</h2>
        <p className="routes__intro">Door-to-door mountain transfers, timed to the minute and driven by people who live here.</p>

        <div className="routes__grid">
          {routes.map((route) => (
            <RouteCard key={route.gradId} route={route} />
          ))}
        </div>
      </div>
    </section>
  );
}
