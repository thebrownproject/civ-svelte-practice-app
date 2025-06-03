<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let total = data.clients[0].Projects.length;
  console.log(data);
</script>

{#if data && data.clients}
  <div class="padding-top">
    <div class="centred-div">Id: {data.clients[0].id}</div>
    <div class="centred-div">
      Contact Person: {data.clients[0].contact_person}
    </div>
  </div>

  {#if data.clients[0].Projects.length > 0}
    <div class="centred-div">
      <h2 class="padding-top">({total}) Projects</h2>
    </div>
    <div class="centred-div text-blue-500">
      {#each data.clients[0].Projects as project}
        <div><a href="/projects/{project.id}">{project.name}</a></div>
      {/each}
    </div>
  {:else}
    <div class="centred-div">
      <h2 class="red-text padding-top">No Projects</h2>
    </div>
  {/if}
{:else}
  <p>Item not found</p>
{/if}

<style>
  .centred-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .padding-top {
    padding-top: 20px;
  }

  .red-text {
    color: red;
  }
</style>
