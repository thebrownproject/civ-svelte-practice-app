<script lang="ts">
    import type { PageProps } from "./$types";
    import { Project, Client, User } from "$lib/classes";

    let { data }: PageProps = $props();

    // Map the data to the Project class
    let project = new Project(
            data.project[0].id,
            data.project[0].name,
            new Date(data.project[0].start_date),
            data.project[0].status.name,
            new Client(data.project[0].client_id.id, data.project[0].client_id.name, data.project[0].client_id.person_contact, data.project[0].client_id.person_email)
    );

    // Map the data to the User class
    let projectUsers: User[] = [];
    for (let i = 0; i < data.projectUsers.length; i++) {
        // Add the user to the projectUsers array
        projectUsers.push(new User(
            data.projectUsers[i].user_id.id,
            data.projectUsers[i].user_id.first_name,
            data.projectUsers[i].user_id.last_name,
            data.projectUsers[i].user_id.email,
            []
        ));
    }
</script>

<main class="text-center mt-6">
    {#if project}
        <h1 class="text-3xl mb-3">{project.name}</h1>
        <hr class="mb-6 border-surface-500/50" />
        <p>ID: {project.id}</p>
        <p>Status: {project.status}</p>
        <p>Start Date: {project.start_date.toDateString()}</p>
        <p>Client: <a class="text-blue-500" href="/clients/{project.client.id}">{project.client.name}</a></p>

        {#if projectUsers && projectUsers.length > 0}
            <h2 class="text-xl mt-6">({projectUsers.length  }) Project Users</h2>
            <ul>
                {#each projectUsers as user}
                    <li id={user.id.toString()}>
                        <a class="text-blue-500" href='/users/{user.id}'>{user.first_name} {user.last_name}</a>
                    </li>
                {/each}
            </ul>
        {:else}
            <p class="mt-6 text-gray-500">No users associated with this project</p>
        {/if}
    {:else}
        <p>The specified project was not found</p>
    {/if}
</main>