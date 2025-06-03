<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let total = data.rawUsers.length;
</script>

<h1>Active Users</h1>

{#if data}
  <div class="centred-div">
    {#each data.rawUsers as user}
      <a class="anchor" href={`/users/${user.id}`}>
        {user.first_name}
        {user.last_name}
      </a>
      <br />
    {/each}
  </div>
{:else}
  <p>Loading...</p>
{/if}

<div class="centred-div users-total">
  {total} Active Users
</div>

<style>
  .centred-div {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .users-total {
    margin-top: 20px;
  }
  .anchor {
    color: #0066cc;
    text-decoration: none;
  }
  .anchor:hover {
    text-decoration: underline;
  }
</style>
