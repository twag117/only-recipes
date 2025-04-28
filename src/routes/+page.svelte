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

  // Placeholder: pretend these are the user's favorites
  let favoriteRecipeIds = new Set<string>();

  function toggleFavorite(id: string) {
    if (favoriteRecipeIds.has(id)) {
      favoriteRecipeIds.delete(id);
    } else {
      favoriteRecipeIds.add(id);
    }
  }
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
    <div class="relative">
      <a
        href={`/recipe/${recipe.id}`}
        class="block bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition p-6 no-underline text-inherit"
      >
        <h2 class="text-xl font-bold mb-2 text-gray-900 hover:text-gray-700">
          {recipe.title}
        </h2>
        <p class="text-gray-600 text-sm hover:text-gray-500">
          {recipe.description}
        </p>
      </a>
      <button
        on:click={() => toggleFavorite(recipe.id)}
        class="absolute top-3 right-3 text-2xl"
      >
        {#if favoriteRecipeIds.has(recipe.id)}
          ⭐
        {:else}
          ☆
        {/if}
      </button>
    </div>
  {/each}
</div>

<div class="text-center mt-10">
  <a
    href="/submit"
    class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
  >
    Submit a New Recipe
  </a>
</div>
