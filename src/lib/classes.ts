export class User {
  id: Number;
  email: String;
  projects: Project[];

  constructor(id: Number, email: String, projects: Project[]) {
    this.id = id;
    this.email = email;
    this.projects = projects;
  }
}

export class Project {
  id: Number;
  name: String;
  start_date: Date;
  status: Number;

  constructor(id: Number, name: String, start_date: Date, status: Number) {
    this.id = id;
    this.name = name;
    this.start_date = start_date;
    this.status = status;
  }
}
