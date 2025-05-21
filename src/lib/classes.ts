export class User {
  id: Number;
  first_name: String;
  last_name: String;
  email: String;
  projects: Project[];

  constructor(
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    projects: Project[]
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.projects = projects;
  }
}

export class Project {
  id: Number;
  name: String;
  start_date: Date;
  status: String;
  client: Client;

  constructor(
    id: Number,
    name: String,
    start_date: Date,
    status: String,
    client: Client
  ) {
    this.id = id;
    this.name = name;
    this.start_date = start_date;
    this.status = status;
    this.client = client;
  }
}

export class Client {
  id: Number;
  name: String;
  contact_person: String;
  contact_email: String;

  constructor(
    id: Number,
    name: String,
    contact_person: String,
    contact_email: String
  ) {
    this.id = id;
    this.name = name;
    this.contact_person = contact_person;
    this.contact_email = contact_email;
  }
}
