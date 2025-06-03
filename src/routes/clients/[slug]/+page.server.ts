import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL, PUBLIC_API_KEY } from "$env/static/public";

export const load: PageServerLoad = async ({ params }) => {
  let response;
  try {
    response = await fetch(
      `${PUBLIC_API_URL}/Clients?id=eq.${params.slug}&select=*,Projects(*)`,
      {
        method: "GET",
        headers: {
          apikey: PUBLIC_API_KEY,
          Authorization: `Bearer ${PUBLIC_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      // If client not found (404) or other HTTP error, consider item as null
      console.error(
        `API Error for slug ${params.slug}: ${response.status} ${response.statusText}`
      );
      return { clients: null };
    }

    const data: any = await response.json();
    return {
      clients: data,
    };
  } catch (error) {
    console.error("Error fetching client:", error);
    return { clients: [] };
  }
};
