// src/routes/+layout.ts
export const prerender = true;

import { recipes } from '$lib/data';

export function load() {
  return { recipes };
}
