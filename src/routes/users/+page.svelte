<script lang="ts">
  import { PUBLIC_API_KEY, PUBLIC_API_URL } from "$env/static/public";
  import type { User } from "$lib/classes";

  let users: User[] | undefined = $state();

  $effect(() => {
    (async () => {
      await fetch(`${PUBLIC_API_URL}/Users`, {
        method: "GET",
        headers: {
          apikey: PUBLIC_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => (users = data));
    })();
  });
</script>

<h1>Users</h1>
{#if users}
  {#each users as user}
    <a class="anchor" href="/users/{user.id}">
      {user.email}
    </a>
    <br />
  {/each}
{/if}
