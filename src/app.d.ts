// app.d.ts
declare global {
  // User type matching your ERD
  interface User {
    id: number;
    email: string;
    active: boolean;
    first_name: string;
    last_name: string;
  }

  // Project type matching your ERD
  interface Project {
    id: number;
    name: string;
    start_date: Date;
    status: number;
    client_id: number;
    Statuses?: {
      name: string;
    };
  }

  // Client type matching your ERD
  interface Client {
    id: number;
    name: string;
    contact_person: string;
    contact_email: string;
    Projects?: Array<{ id: number }>;
  }

  // Status type
  interface Status {
    id: number;
    name: string;
  }

  // Declare global types for SvelteKit
  namespace App {
    interface PageData {
      rawUsers: User[];
      rawProjects: Project[];
      rawClients: Client[];
    }
  }
}

export {};
