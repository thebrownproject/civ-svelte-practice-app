<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

{#if data}
  {#each data.clients as client}
    <div>
      <a href="/clients/{client.id}">{client.name} </a>
    </div>
  {/each}
{:else}
  <p>Loading...</p>
{/if}
