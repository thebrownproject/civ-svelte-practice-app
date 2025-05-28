<script lang="ts">
	import type { PageProps } from './$types';
	import { enhance } from '$app/forms';

	let { data }: PageProps = $props();
</script>

<form method="post" action="?/LoginOn" use:enhance>
	<button type="submit">Cookie On</button>
</form>

<form method="post" action="?/LoginOff" use:enhance>
	<button type="submit">Cookie Off</button>
</form>

{#if data?.currentLoginStatus}
	<p>Current Login Status: {data.currentLoginStatus}</p>
{:else}
	<p>No login cookie found</p>
{/if}

<style>
	form {
		display: inline-block;
		margin: 10px;
	}
	button {
		padding: 10px 20px;
		font-size: 16px;
		cursor: pointer;
	}
</style>
