<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { onMount } from "svelte";

  export let data;

  let user: { name: string; email: string; picture: string } | null = null;
  let idToken: string | null = null;

  function login() {
    const client = google.accounts.oauth2.initTokenClient({
      client_id: "YOUR_GOOGLE_CLIENT_ID_HERE",
      scope: "openid email profile",
      callback: (response) => {
        idToken = response.access_token;
        fetchUserInfo();
      },
    });

    client.requestAccessToken();
  }

  function logout() {
    user = null;
    idToken = null;
  }

  async function fetchUserInfo() {
    if (!idToken) return;

    const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    user = await res.json();
  }

  onMount(() => {
    // Future: load saved token if we want
  });
</script>

<!-- Navigation bar -->
<nav class="bg-blue-600 p-4 shadow-md flex justify-between items-center">
  <a
    href="/"
    class="text-white text-xl font-bold hover:text-gray-300 transition"
  >
    Only Recipes
  </a>

  <div>
    {#if user}
      <div class="flex items-center gap-3 text-white">
        <img src={user.picture} alt="Profile" class="w-8 h-8 rounded-full" />
        <span>{user.name}</span>
        <button
          on:click={logout}
          class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 ml-4"
        >
          Logout
        </button>
      </div>
    {:else}
      <button
        on:click={login}
        class="flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
      >
        <span>👤</span>
        <span>Login</span>
      </button>
    {/if}
  </div>
</nav>

<!-- Page content -->
<main class="p-6 bg-gray-50 min-h-screen">
  <slot />
</main>

<!-- Import Tailwind CSS -->
<style global>
  @import "../app.css";
</style>
