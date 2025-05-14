<script lang="ts">
  import type { PageProps } from "./$types";
  import { PUBLIC_API_KEY, PUBLIC_API_URL } from "$env/static/public";
  import type { User } from "$lib/classes";

  let { data }: PageProps = $props();
  let user: User | undefined = $state();

  $effect(() => {
    (() => {
      fetch(
        `${PUBLIC_API_URL}/Users?select=*,ProjectsUsers(), Projects(*)&id=eq.${data.id}`,
        {
          method: "GET",
          headers: {
            apikey: PUBLIC_API_KEY,
          },
        },
      )
        .then((json_text) => json_text.text())
        .then((j) => j.replace('"Projects":', '"projects":'))
        .then((d) => JSON.parse(d))
        .then((u) => (user = u[0]));
      //.then((res) => res.json())
      //.then((d) => {
      //  user = d[0];
      //  console.log(user);
      // });
    })();
  });
</script>

<div class="grid">
  <h1>User:</h1>
  {#if user}
    <div class="flex justify-center">
      {user.id}
      {user.email}
    </div>
    <br />
    <hr />

    <h1>Projects:</h1>
    {#if user.projects.length > 0}
      {#each user.projects as project}
        <div class="flex justify-center">
          <a class="anchor" href="/projects/{project.id}">
            {project.name}
          </a>
        </div>
      {/each}
    {/if}
    <br />
  {/if}
</div>
