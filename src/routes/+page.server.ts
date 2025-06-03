import type { PageServerLoad } from './$types';
import { PUBLIC_API_KEY, PUBLIC_API_URL } from '$env/static/public';
import { redirect } from "@sveltejs/kit";

/**
 * This function loads the projects and clients data from the API.
 * It fetches the projects with their associated client information.
 * It also fetches the clients separately to be used in the UI.
 *
 * @param {Object} params - The parameters passed to the load function.
 * @returns {Promise<Object>} - An object containing projects and clients data.
 */
export const load: PageServerLoad = async ({ params, cookies }) => {

		const loginStatus = cookies.get('loginStatus');
	
		if (loginStatus !== 'true') {
			throw redirect(302, '/login');
		}
	


	// Fetch the projects from the API
	let usersData: any = await fetch(`${PUBLIC_API_URL}/Users?select=id`, {
		method: 'GET',
		headers: {
			apikey: PUBLIC_API_KEY
		}
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error while fetching projects: ' + response.statusText);
			}

			return response.json();
		})
		.catch((error) => {
			console.error('There has been a problem with your fetch operation:', error);
		});

	let projectsData: any = await fetch(`${PUBLIC_API_URL}/Projects?select=id`, {
		method: 'GET',
		headers: {
			apikey: PUBLIC_API_KEY
		}
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error while fetching projects: ' + response.statusText);
			}

			return response.json();
		})
		.catch((error) => {
			console.error('There has been a problem with your fetch operation:', error);
		});

	// Fetch the clients from the API
	let clientsData: any = await fetch(`${PUBLIC_API_URL}/Clients?select=id`, {
		method: 'GET',
		headers: {
			apikey: PUBLIC_API_KEY
		}
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error while fetching projects: ' + response.statusText);
			}

			return response.json();
		})
		.catch((error) => {
			console.error('There has been a problem with your fetch operation:', error);
		});

	// Retrurn the projects
	return {
		users: usersData,
		projects: projectsData,
		clients: clientsData
	};
};
