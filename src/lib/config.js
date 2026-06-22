// Matches next.config.mjs: the app is served under this base path in production
// (GitHub Pages), and at the root in development.
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Alpine-Routes-v2' : '';
