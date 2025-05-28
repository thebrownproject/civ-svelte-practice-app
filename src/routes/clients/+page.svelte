<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let total = data.clients.length;
</script>

{#if data}
  <div class="centred-div text-blue-500">
    {#each data.clients as client}
      <a href="/clients/{client.id}">{client.name} </a>
    {/each}
  </div>
{:else}
  <p>Loading...</p>
{/if}

<div class="centred-div clients-total">{total} Clients</div>

<style>
  .centred-div {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .clients-total {
    margin-top: 20px;
  }
</style>
