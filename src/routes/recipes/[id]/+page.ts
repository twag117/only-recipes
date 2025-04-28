// src/routes/recipes/[id]/+page.ts

import { recipes } from '$lib/data';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const recipe = recipes.find(r => r.id === params.id);
  
  if (!recipe) {
    throw error(404, 'Recipe not found');
  }

  return { recipe };
};
