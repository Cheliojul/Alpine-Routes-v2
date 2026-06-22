// The full catalogue of transfers the backend serves. The first four match the
// homepage's featured cards so the "Reserve" prefill always finds its options.
export const allRoutes = [
  { id: "zrh-zermatt", from: "Zürich Airport", to: "Zermatt", duration: "2h 10m", distance: "244 km", price: "EUR 299" },
  { id: "gva-verbier", from: "Geneva Airport", to: "Verbier", duration: "1h 45m", distance: "160 km", price: "EUR 249" },
  { id: "inn-kitzbuhel", from: "Innsbruck", to: "Kitzbühel", duration: "1h 05m", distance: "95 km", price: "EUR 189" },
  { id: "mxp-livigno", from: "Milan Malpensa", to: "Livigno", duration: "3h 30m", distance: "215 km", price: "EUR 339" },
  { id: "zrh-stmoritz", from: "Zürich Airport", to: "St. Moritz", duration: "2h 50m", distance: "200 km", price: "EUR 329" },
  { id: "zrh-davos", from: "Zürich Airport", to: "Davos", duration: "2h 00m", distance: "150 km", price: "EUR 279" },
  { id: "zrh-engelberg", from: "Zürich Airport", to: "Engelberg", duration: "1h 30m", distance: "95 km", price: "EUR 219" },
  { id: "zrh-grindelwald", from: "Zürich Airport", to: "Grindelwald", duration: "2h 10m", distance: "150 km", price: "EUR 269" },
  { id: "gva-chamonix", from: "Geneva Airport", to: "Chamonix", duration: "1h 15m", distance: "88 km", price: "EUR 169" },
  { id: "gva-courchevel", from: "Geneva Airport", to: "Courchevel", duration: "2h 30m", distance: "150 km", price: "EUR 309" },
  { id: "gva-valdisere", from: "Geneva Airport", to: "Val d'Isère", duration: "2h 45m", distance: "220 km", price: "EUR 339" },
  { id: "gva-saasfee", from: "Geneva Airport", to: "Saas-Fee", duration: "2h 20m", distance: "175 km", price: "EUR 299" },
  { id: "lys-deuxalpes", from: "Lyon Airport", to: "Les Deux Alpes", duration: "2h 00m", distance: "160 km", price: "EUR 259" },
  { id: "grenoble-meribel", from: "Grenoble Airport", to: "Méribel", duration: "2h 00m", distance: "130 km", price: "EUR 249" },
  { id: "muc-ischgl", from: "Munich Airport", to: "Ischgl", duration: "2h 15m", distance: "215 km", price: "EUR 289" },
  { id: "muc-stanton", from: "Munich Airport", to: "St. Anton", duration: "2h 00m", distance: "195 km", price: "EUR 279" },
  { id: "inn-solden", from: "Innsbruck", to: "Sölden", duration: "1h 20m", distance: "85 km", price: "EUR 199" },
  { id: "inn-lech", from: "Innsbruck", to: "Lech", duration: "1h 30m", distance: "120 km", price: "EUR 229" },
  { id: "salzburg-kitzbuhel", from: "Salzburg", to: "Kitzbühel", duration: "1h 25m", distance: "100 km", price: "EUR 209" },
  { id: "turin-courchevel", from: "Turin Airport", to: "Courchevel", duration: "2h 30m", distance: "140 km", price: "EUR 309" },
  { id: "mxp-stmoritz", from: "Milan Malpensa", to: "St. Moritz", duration: "2h 40m", distance: "180 km", price: "EUR 319" },
  { id: "mxp-campiglio", from: "Milan Malpensa", to: "Madonna di Campiglio", duration: "3h 00m", distance: "230 km", price: "EUR 329" },
];

export const originList = [...new Set(allRoutes.map((r) => r.from))];
export const destinationList = [...new Set(allRoutes.map((r) => r.to))];
