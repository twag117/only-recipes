<script lang="ts">
  import { recipes } from "$lib/data";
  import type { Recipe } from "$lib/data"; // 🆕 import type
  import { onMount } from "svelte";

  let favoriteRecipeIds = new Set<string>();
  let favoriteRecipes: Recipe[] = []; // 🆕 correct typing

  onMount(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favoriteRecipeIds") || "[]"
    );
    favoriteRecipeIds = new Set(storedFavorites);

    favoriteRecipes = recipes.filter((recipe) =>
      favoriteRecipeIds.has(recipe.id)
    );
  });
</script>

<svelte:head>
  <title>My Favorites | OnlyRecipes</title>
  <meta name="description" content="Your saved favorite recipes." />
</svelte:head>

<div class="max-w-5xl mx-auto p-6">
  <h1 class="text-3xl font-bold mb-6 text-center">🧡 My Favorites</h1>

  {#if favoriteRecipes.length > 0}
    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {#each favoriteRecipes as recipe}
        <div class="relative">
          <a
            href={`/recipes/${recipe.id}`}
            class="block bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition no-underline text-inherit overflow-hidden"
          >
            <img
              src={recipe.image_url || "/placeholder.jpg"}
              alt={recipe.title}
              class="w-full h-48 object-cover mb-4"
            />
            <div class="p-4">
              <h2
                class="text-xl font-bold mb-2 text-gray-900 hover:text-gray-700"
              >
                {recipe.title}
              </h2>
              <p class="text-gray-600 text-sm hover:text-gray-500">
                {recipe.description}
              </p>
            </div>
          </a>
        </div>
      {/each}
    </div>
  {:else}
    <div class="text-center text-gray-500 mt-20 text-lg">
      You have no favorites yet.<br />
      ⭐ Click the star on a recipe to save it!
    </div>
  {/if}
</div>
