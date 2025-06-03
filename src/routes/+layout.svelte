<script lang="ts">
  import "../app.css";
  import { AppBar } from "@skeletonlabs/skeleton-svelte";
  import ArrowLeft from "@lucide/svelte/icons/arrow-left";
  import Paperclip from "@lucide/svelte/icons/paperclip";
  import Calendar from "@lucide/svelte/icons/calendar";
  import CircleUser from "@lucide/svelte/icons/circle-user";
  import Menu from "@lucide/svelte/icons/menu";
  import { Switch } from "@skeletonlabs/skeleton-svelte";

  import { Navigation } from "@skeletonlabs/skeleton-svelte";

  // Icons
  import IconMenu from "@lucide/svelte/icons/menu";
  import IconSettings from "@lucide/svelte/icons/settings";
  import { BookUser, Folders, Home, UsersRound } from "@lucide/svelte";

  let { children } = $props();
  let data_theme: string | null = $state("");
  let darkmode: boolean = $state(false);
  let isExpansed = $state(false);

  function toggleExpanded() {
    isExpansed = !isExpansed;
  }

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
    <ArrowLeft size={50} onclick={() => window.history.back()} />

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

  <div class="block self-center sm:hidden">
    <Menu
      size={35}
      onclick={() => toggleExpanded()}
      class="hover:text-primary-400 focus:outline-none"
    />
  </div>

  <!-- Menu -->
  <div
    class="fixed inset-0 z-50 bg-surface-50-950 bg-opacity-90 flex flex-col items-center justify-center sm:hidden transition-all duration-300"
    class:translate-x-full={!isExpansed}
  >
    <button
      class="absolute top-6 right-6 text-surface-100 hover:text-primary-400 focus:outline-none"
      onclick={toggleExpanded}
      aria-label="Close menu"
    >
      <IconMenu size={32} />
    </button>
    <nav class="flex flex-col gap-8 items-center">
      <a
        href="/"
        onclick={() => toggleExpanded()}
        class="text-2xl font-semibold text-primary-200 hover:text-primary-400 transition"
        >Homepage</a
      >
      <a
        href="/clients"
        onclick={() => toggleExpanded()}
        class="text-2xl font-semibold text-primary-200 hover:text-primary-400 transition"
        >Clients</a
      >
      <a
        href="/projects"
        onclick={() => toggleExpanded()}
        class="text-2xl font-semibold text-primary-200 hover:text-primary-400 transition"
        >Projects</a
      >
      <a
        href="/users"
        onclick={() => toggleExpanded()}
        class="text-2xl font-semibold text-primary-200 hover:text-primary-400 transition"
        >Users</a
      >
    </nav>
  </div>
  <div class="flex flex-col">
    <span class="text-xl">Project Tracker</span>
    <div class="flex self-center">
      <a href="/" class="text-sm text-primary-500 mr-4 hover:underline"
        >Homepage</a
      >
      <a href="/clients" class="text-sm text-primary-500 mr-4 hover:underline"
        >Clients</a
      >
      <a href="/projects" class="text-sm text-primary-500 mr-4 hover:underline"
        >Projects</a
      >
      <a href="/users" class="text-sm text-primary-500 hover:underline">Users</a
      >
    </div>
  </div>
</AppBar>

{@render children()}
