<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { onMount } from "svelte";

  export let data;

  let user: { name: string; email: string; picture: string } | null = null;
  let idToken: string | null = null;

  // 🆕 Login Modal
  let showLoginModal = false;

  function openLoginModal() {
    showLoginModal = true;
  }

  function closeLoginModal() {
    showLoginModal = false;
  }

  function login() {
    const client = google.accounts.oauth2.initTokenClient({
      client_id: "YOUR_GOOGLE_CLIENT_ID_HERE",
      scope: "openid email profile",
      callback: (response) => {
        idToken = response.access_token;
        fetchUserInfo();
        closeLoginModal(); // Close modal after login
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
    class="flex items-center gap-2 text-white text-xl font-bold hover:text-gray-300 transition"
  >
    <span>🏠</span>
    <span>OnlyRecipes</span>
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
        on:click={openLoginModal}
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

<!-- 🆕 Login Modal -->
{#if showLoginModal}
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50"
  >
    <div
      class="bg-white p-10 rounded-xl shadow-xl w-[30rem] relative flex flex-col items-center text-center"
    >
      <!-- Close Button -->
      <button
        on:click={closeLoginModal}
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer text-2xl"
      >
        ✖
      </button>

      <!-- Modal Title -->
      <h2 class="text-3xl font-bold mb-4">Login to OnlyRecipes</h2>

      <!-- Subtitle / Description -->
      <p class="text-gray-600 mb-8">
        Save your favorite recipes ❤️<br />
        Quickly find them later 🍳<br />
        Share your own delicious creations 📝
      </p>

      <!-- Continue with Google Button -->
      <button
        on:click={login}
        class="flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition cursor-pointer"
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
          class="w-6 h-6 mr-3"
        />
        Continue with Google
      </button>
    </div>
  </div>
{/if}

<!-- Footer -->
<footer
  class="bg-gray-100 text-center py-6 text-gray-600 text-sm flex flex-col items-center gap-2"
>
  <div>OnlyRecipes — No stories, no ads, no BS.</div>

  <a
    href="https://www.buymeacoffee.com/YOUR_PROFILE_HERE"
    target="_blank"
    rel="noopener noreferrer"
    class="text-blue-600 hover:underline flex items-center gap-1"
  >
    ❤️ Buy Me a Coffee
  </a>
</footer>

<!-- Import Tailwind CSS -->
<style global>
  @import "../app.css";
</style>
