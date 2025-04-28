// src/routes/+layout.ts

import { recipes } from '$lib/data';

export function load() {
  return { recipes };
}
