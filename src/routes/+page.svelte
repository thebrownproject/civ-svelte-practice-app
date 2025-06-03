<script lang="ts">
	import type { PageProps } from './$types';
	import { User, Project, Client } from '$lib/classes';

	let { data }: PageProps = $props();
</script>

<main class="text-center mt-6 h-screen">
	<h1 class="text-3xl mb-3">Dashboard</h1>
	<hr class="mb-6 border-surface-500/50" />

	<div class="flex flex-col items-center gap-15">
		<!-- Users -->
		<a class="homepage button" href="/users">
			<h2 class="text-2xl mb-3">Users</h2>

			<span class="mt-6 text-surface-900">{data.users.length} users</span>
		</a>

		<!-- Projects -->
		<a class="homepage button" href="/projects">
			<h2 class="text-2xl mb-3">Projects</h2>

			<span class="mt-6 text-surface-900">{data.projects.length} projects</span>
		</a>

		<!-- Clients -->
		<a class="homepage button" href="/clients">
			<h2 class="text-2xl mb-3">Clients</h2>

			<span class="mt-6 text-surface-900">{data.clients.length} clients</span>
		</a>
	</div>
</main>
