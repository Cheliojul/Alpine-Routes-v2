import { allRoutes } from '../../../data/allRoutes';

// GET /api/routes — the transfer catalogue.
// A live endpoint under `next dev`; baked to a static JSON file on export
// (force-static is required so it works with output: 'export').
export const dynamic = 'force-static';

export function GET() {
  return Response.json({ count: allRoutes.length, routes: allRoutes });
}
