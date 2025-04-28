<!-- src/routes/recipe/[id]/+page.svelte -->
<script lang="ts">
  export let data;
  const { recipe } = data;

  // Cook Mode
  let cookMode = false;
  let wakeLock: WakeLockSentinel | null = null;

  async function toggleCookMode() {
    cookMode = !cookMode;
    if (cookMode) {
      try {
        wakeLock = await navigator.wakeLock?.request("screen");
        console.log("Cook Mode: Screen Wake Lock activated");
      } catch (err) {
        console.error("Cook Mode Error:", err);
      }
    } else {
      try {
        await wakeLock?.release();
        wakeLock = null;
        console.log("Cook Mode: Screen Wake Lock released");
      } catch (err) {
        console.error("Cook Mode Release Error:", err);
      }
    }
  }

  // Placeholder: pretend favorites in memory
  let favoriteRecipeIds = new Set<string>();

  function toggleFavorite(id: string) {
    if (favoriteRecipeIds.has(id)) {
      favoriteRecipeIds.delete(id);
    } else {
      favoriteRecipeIds.add(id);
    }
  }
</script>

<svelte:head>
  <title>{recipe.title} | Only Recipes</title>
  <meta name="description" content={recipe.description} />
</svelte:head>

<div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
  <!-- <h1 class="text-3xl mb-2">{recipe.title}</h1> -->
  <div class="flex justify-between items-start mb-4">
    <h1 class="text-3xl font-bold">{recipe.title}</h1>
    <button on:click={() => toggleFavorite(recipe.id)} class="text-3xl">
      {#if favoriteRecipeIds.has(recipe.id)}
        ⭐
      {:else}
        ☆
      {/if}
    </button>
  </div>
  <p class="mb-4">{recipe.description}</p>

  <h2 class="text-2xl mb-2">Ingredients</h2>
  <ul class="list-disc list-inside mb-4">
    {#each recipe.ingredients as ing}
      <li>{ing}</li>
    {/each}
  </ul>

  <h2 class="text-2xl mb-2">Instructions</h2>
  <ol class="list-decimal list-inside mb-4">
    {#each recipe.instructions as step}
      <li>{step}</li>
    {/each}
  </ol>

  <div class="mt-6 mb-10">
    <button
      on:click={toggleCookMode}
      class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition w-full cursor-pointer"
    >
      {cookMode ? "Cook Mode: ON 👨‍🍳" : "Start Cook Mode 🍳"}
    </button>
  </div>

  <div class="mt-8">
    <a
      href="/"
      class="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
    >
      ← Back to All Recipes
    </a>
  </div>
</div>
