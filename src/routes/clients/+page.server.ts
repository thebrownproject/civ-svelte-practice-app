import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL, PUBLIC_API_KEY } from "$env/static/public";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const loginStatus = cookies.get('loginStatus');

	if (loginStatus !== 'true') {
		throw redirect(302, '/login');
	}

  let response;
  try {
    response = await fetch(`${PUBLIC_API_URL}/Clients`, {
      method: "GET",
      headers: {
        apikey: PUBLIC_API_KEY,
        Authorization: `Bearer ${PUBLIC_API_KEY}`,
      },
    });

    if (!response.ok) {
      // If client not found (404) or other HTTP error, consider item as null
      console.error(
        `API Error for clients: ${response.status} ${response.statusText}`
      );
      return { clients: [] };
    }

    const data: any = await response.json();
    return {
      clients: data,
    };
  } catch (error) {
    console.error("Error fetching clients:", error);
    return { clients: [] };
  }
};
