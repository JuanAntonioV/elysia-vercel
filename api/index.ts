/**
 * This file is the entrypoint for all Vercel Functions.
 */

// import '../src/env.ts';

import { app } from '../src/app/index';

// export const config = { runtime: 'edge' };
export const runtime = 'edge';

export default async function handler(request: Request) {
  return app.fetch(request);
}
