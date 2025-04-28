<!-- src/routes/+layout.svelte -->
<script lang="ts">
  export let data;
</script>

<!-- Simple navigation bar -->
<nav class="bg-blue-600 p-4 shadow-md">
  <a
    href="/"
    class="text-white text-xl font-bold hover:text-gray-300 transition"
  >
    Only Recipes
  </a>
</nav>

<main class="p-6 bg-gray-50 min-h-screen">
  <slot />
</main>

<!-- Import the Tailwind CSS file we created earlier -->
<style global>
  @import "../app.css";
</style>
