<!-- src/routes/+error.svelte -->
<script>
  export let error;
</script>

<svelte:head>
  <title>Page Not Found | OnlyRecipes</title>
</svelte:head>

<div
  class="flex flex-col items-center justify-center min-h-screen text-center p-6"
>
  <h1 class="text-5xl font-bold text-red-600 mb-4">404</h1>
  <h2 class="text-2xl mb-2">Page Not Found</h2>
  <p class="mb-6">
    {error.message || "Sorry, we couldn’t find the page you’re looking for."}
  </p>

  <a
    href="/"
    class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
  >
    Go Home
  </a>
</div>
