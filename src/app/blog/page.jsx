export const metadata = {
  title: 'Blog | Alpine Routes',
  description:
    'Notes from the mountain road: the transport challenges shaping alpine transfers and how Alpine Routes keeps you moving.',
};

const posts = [
  {
    slug: 'winter-is-getting-weirder',
    date: 'June 2026',
    reading: '4 min read',
    title: 'Winter is getting weirder, and timing is everything',
    body: [
      'Alpine weather has never been predictable, but the last few seasons have raised the bar. Warm spells followed by sudden heavy snow mean roads that were clear at breakfast can need chains by lunch. Passes close with little notice, and avalanche control work can pause traffic for hours.',
      'Our answer is to stop treating the schedule as fixed and start treating it as live. We watch road status, pass closures, and local forecasts continuously, and we build slack into every winter pickup so a delay on one leg does not cascade into a missed flight.',
      'It also comes down to people. Every chauffeur who drives a winter route is trained for it, carries chains, and knows the alternate roads when a pass shuts. When the mountain changes its mind, the plan changes with it, and you still arrive on time.',
    ],
  },
  {
    slug: 'going-electric-on-gradients',
    date: 'May 2026',
    reading: '5 min read',
    title: 'Going electric on alpine gradients',
    body: [
      'Electric vehicles are an easy win in the city and a harder problem in the mountains. Cold air, long climbs, and thin charging networks all eat into range exactly where you have the least margin for error. A transfer that strands a guest at 1,800 metres helps nobody.',
      'So we are going electric on purpose, not on principle. We add EVs to routes where the charging and the climb actually add up, we plan charging stops before the trip rather than during it, and we keep efficient hybrids and all-wheel-drive vehicles on the routes that are not ready yet.',
      'The goal is lower emissions without a single compromise on reliability. A greener fleet only counts if it still gets you there warm, dry, and on schedule.',
    ],
  },
  {
    slug: 'airports-busier-than-ever',
    date: 'April 2026',
    reading: '3 min read',
    title: 'Airports are busier and tighter than ever',
    body: [
      'Demand is back above pre-2020 levels while staffing and capacity are still catching up. That means longer security lines, tighter connections, and flights that shift by the minute. The transfer that was perfectly timed yesterday can be early or late today.',
      'We track your flight in real time and adjust the pickup automatically for delays, early arrivals, and customs. You will not stand at the kerb waiting, and you will not pay more because the airport had a bad day. Prices are fixed when you book, with no surge for weather or peak weeks.',
    ],
  },
  {
    slug: 'driver-shortage-local-knowledge',
    date: 'March 2026',
    reading: '4 min read',
    title: 'The driver shortage, and why local knowledge still wins',
    body: [
      'The whole transport industry is short of professional drivers, and the alpine market feels it twice over. Mountain routes need experience that takes years to build, and that experience is getting harder to hire.',
      'Our response is unglamorous but it works: keep the drivers we have. We pay fairly, train continuously, and treat local knowledge as the asset it is. A chauffeur who has driven the Furka in a whiteout, knows which café still has a clear car park, and remembers your child seat from last winter is not something an app can replace.',
      'Technology helps us route and schedule, but the last mile up a snowed-in valley is still won by a person who knows the road.',
    ],
  },
];

export default function Blog() {
  return (
    <div className="page">
      <div className="container page__inner">
        <header className="page__head">
          <p className="page__eyebrow">From the road</p>
          <h1 className="page__title">Notes from the mountain road</h1>
          <p className="page__lead">
            The challenges reshaping alpine transport right now, and how we keep you moving through them.
          </p>
        </header>

        {posts.map((post) => (
          <article className="post" key={post.slug}>
            <p className="post__meta">{post.date} · {post.reading}</p>
            <h2 className="post__title">{post.title}</h2>
            {post.body.map((paragraph, i) => (
              <p className="post__p" key={i}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}
