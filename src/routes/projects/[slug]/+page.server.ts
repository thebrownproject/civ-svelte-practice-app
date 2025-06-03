import type { PageServerLoad } from "./$types";
import { PUBLIC_API_KEY, PUBLIC_API_URL } from "$env/static/public";

// Fetch the projects from the API
export const load: PageServerLoad = async ({ params }) => {
  let projectData: any = await fetch(
    `${PUBLIC_API_URL}/Projects?select=id,name,start_date,status(name),client_id(id,name,contact_person,contact_email)&id=eq.${params.slug}`,
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

  let projectUsers: any = await fetch(
    `${PUBLIC_API_URL}/ProjectsUsers?select=user_id(id,first_name,last_name,email)&project_id=eq.${params.slug}`,
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
    project: projectData,
    projectUsers: projectUsers,
  };
};
