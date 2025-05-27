import type { PageServerLoad } from "./$types";
import { PUBLIC_API_KEY, PUBLIC_API_URL } from "$env/static/public";

// Fetch the projects from the API
export const load: PageServerLoad = async ({ params }) => {
  let projectsData: any = await fetch(
    `${PUBLIC_API_URL}/Projects?select=id,name,start_date,status(name),client_id(id,name,contact_person,contact_email)&order=name.asc`,
    {
      method: "GET",
      headers: {
        apikey: PUBLIC_API_KEY,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Error while fetching projects: " + response.statusText
        );
      }

      return response.json();
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });

  // Retrurn the projects
  return {
    projects: projectsData,
  };
};
