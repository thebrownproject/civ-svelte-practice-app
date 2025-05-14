<script lang="ts">
  import "../app.css";
  import { AppBar } from "@skeletonlabs/skeleton-svelte";
  import ArrowLeft from "@lucide/svelte/icons/arrow-left";
  import Paperclip from "@lucide/svelte/icons/paperclip";
  import Calendar from "@lucide/svelte/icons/calendar";
  import CircleUser from "@lucide/svelte/icons/circle-user";
  import Menu from "@lucide/svelte/icons/menu";
  import { Switch } from "@skeletonlabs/skeleton-svelte";

  let { children } = $props();
  let data_theme: string | null = $state("");
  let darkmode: boolean = $state(false);

  $effect(() => {
    data_theme = document.documentElement.getAttribute("data-theme");
  });

  $effect(() => {
    darkmode
      ? document.documentElement.setAttribute("data-mode", "dark")
      : document.documentElement.setAttribute("data-mode", "");

    document.documentElement.setAttribute("data-theme", data_theme!);
  });
</script>

<AppBar headlineClasses="sm:hidden" centerClasses="hidden sm:block">
  {#snippet lead()}
    <ArrowLeft size={24} onclick={() => window.history.back()} />
    <select class="select" bind:value={data_theme}>
      <option value="nosh">Nosh</option>
      <option value="cerberus">Cerberus</option>
      <option value="fennec">Fennec</option>
    </select>
    <Switch
      name="darkmode"
      checked={darkmode}
      onCheckedChange={(e) => (darkmode = e.checked)}
    ></Switch>
  {/snippet}
  {#snippet trail()}
    <div class="hidden space-x-4 sm:flex">
      <Paperclip size={20} />
      <Calendar size={20} />
      <CircleUser size={20} />
    </div>
    <div class="block sm:hidden">
      <Menu size={20} />
    </div>
  {/snippet}
  {#snippet headline()}
    <h2 class="h2">Title</h2>
  {/snippet}
  <span>Project Tracker</span>
</AppBar>

{@render children()}
