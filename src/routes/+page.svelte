<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { writable, derived } from "svelte/store";

  // Receive preloaded recipes from the layout's load function
  export let data;
  const { recipes } = data;

  const search = writable("");

  // Filter recipes based on search term (case-insensitive)
  const filteredRecipes = derived(search, ($search) =>
    recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes($search.toLowerCase())
    )
  );
</script>

<h1 class="text-2xl mb-4">All Recipes</h1>

<input
  type="text"
  bind:value={$search}
  placeholder="Search for a recipe..."
  class="border p-2 w-full mb-4"
/>

<!-- List out the filtered recipes -->
<div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
  {#each $filteredRecipes as recipe}
    <a
      href={`/recipe/${recipe.id}`}
      class="block bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition p-6"
    >
      <h2 class="text-xl font-bold mb-2">{recipe.title}</h2>
      <p class="text-gray-600 text-sm">{recipe.description}</p>
    </a>
  {/each}
</div>
