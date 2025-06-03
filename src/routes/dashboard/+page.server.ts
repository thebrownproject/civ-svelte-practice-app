import { createClient } from "@supabase/supabase-js";

export async function load() {
  const supabase = createClient(
    import.meta.env.PUBLIC_API_URL,
    import.meta.env.PUBLIC_API_KEY
  );

  // Fetch users with type assertion
  const { data: users } = await supabase
    .from("Users")
    .select("*")
    .returns<App.User[]>();

  // Fetch projects with relationships
  const { data: projects } = await supabase
    .from("Projects")
    .select("id, name, start_date, status, client_id, Statuses(name)")
    .returns<App.Project[]>();

  // Fetch clients with project counts
  const { data: clients } = await supabase
    .from("Clients")
    .select("id, name, contact_person, contact_email, Projects(id)")
    .returns<App.Client[]>();

  return {
    rawUsers: users ?? [],
    rawProjects: projects ?? [],
    rawClients: clients ?? [],
  };
}
