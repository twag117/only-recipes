<script lang="ts">
  import { writable, derived } from "svelte/store";
  import { recipes } from "$lib/data"; // ✅ use local data again!

  export let data;
  const search = writable("");
  const selectedTag = writable("");

  // Get all unique tags
  const allTags = Array.from(
    new Set(recipes.flatMap((recipe) => recipe.tags ?? []))
  );

  // Filter recipes based on search and selected tag
  const filteredRecipes = derived(
    [search, selectedTag],
    ([$search, $selectedTag]) => {
      return recipes.filter((recipe) => {
        const matchesSearch = recipe.title
          .toLowerCase()
          .includes($search.toLowerCase());
        const matchesTag = $selectedTag
          ? (recipe.tags ?? []).includes($selectedTag)
          : true;
        return matchesSearch && matchesTag;
      });
    }
  );

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

<!-- Search bar -->
<input
  type="text"
  bind:value={$search}
  placeholder="Search for a recipe..."
  class="border p-2 w-full mb-4"
/>

{#if allTags.length}
  <div class="flex flex-wrap gap-2 mb-6">
    {#each allTags as tag}
      <button
        class="px-3 py-1 rounded-full border text-sm hover:bg-blue-100 transition
        {$selectedTag === tag
          ? 'bg-blue-600 text-white'
          : 'bg-white text-gray-700'}"
        on:click={() => selectedTag.set(tag)}
      >
        #{tag}
      </button>
    {/each}
    {#if $selectedTag}
      <button
        class="px-3 py-1 rounded-full border text-sm bg-red-500 text-white hover:bg-red-600 transition"
        on:click={() => selectedTag.set("")}
      >
        Clear Tag Filter
      </button>
    {/if}
  </div>
{/if}

{#if $filteredRecipes.length}
  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {#each $filteredRecipes as recipe}
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
{:else}
  <p>No recipes found yet!</p>
{/if}

<div class="text-center mt-10">
  <a
    href="/submit"
    class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
  >
    Submit a New Recipe
  </a>
</div>
