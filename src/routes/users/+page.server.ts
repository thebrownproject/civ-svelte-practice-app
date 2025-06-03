import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL, PUBLIC_API_KEY } from "$env/static/public";
import { redirect } from "@sveltejs/kit";

console.log("hello world!")

export const load: PageServerLoad = async ({ fetch, cookies }) => {
  
    const loginStatus = cookies.get("loginStatus");
  
    if (loginStatus !== 'true') {
      throw redirect(302, '/login');
    }

  let response;
  try {
    console.log('API request made....')
    response = await fetch(`${PUBLIC_API_URL}/Users?active=eq.true`, {
      method: "GET",
      headers: {
        apikey: PUBLIC_API_KEY,
        Authorization: `Bearer ${PUBLIC_API_KEY}`,
      },
    });

    if (!response.ok) {
      console.log('API request failed')
      console.error(
        `API Error for active users: ${response.status} ${response.statusText}`
      );
      return {
        users: [],
      };
    }

    const data: any = await response.json();
    console.log('📊 API data received:', data);
    console.log('📊 Number of users:', data?.length || 0);
    return {
      users: data,
    };
  } catch (error) {
    console.error("Error fetching active users:", error);
    return {
      users: [],
    };
  }
};
