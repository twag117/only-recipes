<!-- src/routes/recipe/[id]/+page.svelte -->
<script lang="ts">
  export let data;
  const { recipe } = data;
</script>

<svelte:head>
  <title>{recipe.title} | Only Recipes</title>
  <meta name="description" content={recipe.description} />
</svelte:head>

<div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
  <h1 class="text-3xl mb-2">{recipe.title}</h1>
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

  <a href="/" class="text-blue-600 underline mt-4 block hover:text-blue-800">
    ← Back to all recipes
  </a>
</div>
