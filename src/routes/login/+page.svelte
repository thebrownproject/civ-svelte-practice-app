<script lang="ts">
	import type { PageProps } from './$types';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	let { data }: PageProps = $props();

	let email = $state('');
	let password = $state('');
	let errorMessage = $state('');
</script>

<form
	method="post"
	action="?/Login"
	use:enhance={({ formData }) => {
		formData.set('email', email);
		formData.set('password', password);

		return async ({ result }) => {
			if (result.type === 'success') {
				goto('/');
			} else {
				errorMessage = 'Invalid email or password!';
			}
		};
	}}
>
	<div class="form-container">
		<input type="email" class="input-box" placeholder="Email" bind:value={email} />
		<input type="password" class="input-box" placeholder="Password" bind:value={password} />
		<button type="submit" class="input-box">Login</button>
		{#if errorMessage}
			<p style="color: red;">{errorMessage}</p>
		{/if}
	</div>
</form>

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
	.form-container {
		border: 2px solid yellow;
		padding: 1rem;
		border-radius: 8px;
	}

	.form-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
	}

	.input-box {
		margin: 0.5rem 0;
		padding: 0.5rem;
		width: 300px;
		font-size: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
</style>
