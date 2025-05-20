<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  console.log(data.clients);
</script>

{#if data && data.clients}
  <div class="padding-top">
    <div class="centred-div">Id: {data.clients[0].id}</div>
    <div class="centred-div">
      Contact Person: {data.clients[0].contact_person}
    </div>
  </div>

  <div class="padding-top centred-div red-text">
    ## Project Details required
  </div>
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
