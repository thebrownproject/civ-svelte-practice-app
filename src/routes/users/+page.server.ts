import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL, PUBLIC_API_KEY } from "$env/static/public";

export const load: PageServerLoad = async ({ fetch }) => {
  let response;
  try {
    response = await fetch(`${PUBLIC_API_URL}/Users?active=eq.true`, {
      method: "GET",
      headers: {
        apikey: PUBLIC_API_KEY,
        Authorization: `Bearer ${PUBLIC_API_KEY}`,
      },
    });

    if (!response.ok) {
      console.error(
        `API Error for active users: ${response.status} ${response.statusText}`
      );
    }

    const data: any = await response.json();
    return {
      rawUsers: data,
      rawProjects: [],
      rawClients: [],
    };
  } catch (error) {
    console.error("Error fetching active users:", error);
    return {
      rawUsers: [],
      rawProjects: [],
      rawClients: [],
    };
  }
};
