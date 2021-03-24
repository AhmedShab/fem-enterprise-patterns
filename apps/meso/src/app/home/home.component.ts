import { Component, OnInit } from '@angular/core';

interface BaseEntity {
  id: string | null;
};

interface Client extends BaseEntity {
  firstname: string;
  lastname: string;
  company: string;
};

interface ClientsState {
  clients: Array<Client>;
  currentClient: Client;
};

interface Project extends BaseEntity{
  title: string;
  description: string;
  completed: boolean;
}

interface ProjectsState {
  projects: Array<Project>;
  currentProject: Project;
};

interface AppState {
  clientsState: ClientsState;
  projectsState: ProjectsState;
};

const newClient: Client = {
  id: null,
  firstname: '',
  lastname: '',
  company: '',
};

const newProject: Project = {
  id: null,
  title: '',
  description: '',
  completed: false,
};

const superProject: Project = {
  id: '1',
  title: 'Super Project',
  description: 'This is awesome',
  completed: false,
}

const hellProject: Project = {
  id: '2',
  title: 'Hell Project',
  description: 'Stop...',
  completed: true,
}

const peter: Client = {
  id: '1',
  firstname: 'Peter',
  lastname: 'Poker',
  company: 'Acme, Inc'
};

const john: Client = {
  id: '1',
  firstname: 'John',
  lastname: 'Doe',
  company: 'NA'
}

const projects: Array<Project> = [
 superProject,
 hellProject,
];

const clients: Array<Client> = [
  peter,
  john
];

const initialClientState: ClientsState = {
  clients,
  currentClient: newClient,
}

const initialProjectState: ProjectsState = {
  projects,
  currentProject: newProject,
}

const appState: AppState = {
  clientsState: initialClientState,
  projectsState: initialProjectState,
};

const tango = appState;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
