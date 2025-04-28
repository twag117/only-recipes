<script lang="ts">
  let title = "";
  let description = "";
  let ingredients = "";
  let instructions = "";

  function handleSubmit() {
    console.log("Submit clicked!");
    console.log({
      title,
      description,
      ingredients: ingredients.split("\n").filter((i) => i.trim() !== ""),
      instructions: instructions.split("\n").filter((i) => i.trim() !== ""),
    });
    // Later we'll connect to your PythonAnywhere backend here!
  }
</script>

<div class="max-w-2xl mx-auto p-6">
  <h1 class="text-3xl font-bold mb-6 text-center">Submit a New Recipe</h1>

  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div>
      <label class="block mb-2 font-semibold">Title</label>
      <input
        bind:value={title}
        type="text"
        required
        class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>

    <div>
      <label class="block mb-2 font-semibold">Description</label>
      <textarea
        bind:value={description}
        rows="3"
        required
        class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      ></textarea>
    </div>

    <div>
      <label class="block mb-2 font-semibold">Ingredients (one per line)</label>
      <textarea
        bind:value={ingredients}
        rows="6"
        required
        class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      ></textarea>
    </div>

    <div>
      <label class="block mb-2 font-semibold">Instructions (one per line)</label
      >
      <textarea
        bind:value={instructions}
        rows="6"
        required
        class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      ></textarea>
    </div>

    <button
      type="submit"
      class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
    >
      Submit Recipe
    </button>
  </form>
</div>
