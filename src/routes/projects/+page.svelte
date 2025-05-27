<script lang="ts">
    import type { PageProps } from "./$types";
    import { Project, Client } from "$lib/classes";

    let { data }: PageProps = $props();

    // Map the data to the Project class
    let projects: Project[] = [];
    
    for (let i = 0; i < data.projects.length; i++) {
        // Add the project to the projects array
        projects.push(new Project(
            data.projects[i].id,
            data.projects[i].name,
            new Date(data.projects[i].start_date),
            data.projects[i].status.name,
            new Client(data.projects[i].client_id.id, data.projects[i].client_id.name, data.projects[i].client_id.person_contact, data.projects[i].client_id.person_email)
        ));
    }
</script>

<main class="text-center mt-6">
    <h1 class="text-3xl mb-3">Projects</h1>
    <hr class="mb-6 border-surface-500/50" />
    {#if projects && projects.length > 0}
        <ul>
            {#each projects as project}
                <li id={project.id.toString()}>
                    <a class="text-blue-500" href='/projects/{project.id}'>{project.name}</a>
                </li>
            {/each}
        </ul>

        <p class="mt-6 text-gray-500">{projects.length} projects</p>
    {:else}
        <p>No projects found</p>
    {/if}
</main>