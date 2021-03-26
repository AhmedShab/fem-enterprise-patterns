import { Component, OnInit } from '@angular/core';
import {
  ClientsState,
  Client,
  Project,
  ProjectsState,
  AppState,
  ClientsStore,
  ProjectStore,
} from '../../../../../libs/api-interfaces/src/lib/api-interfaces';

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

const updateSuperProject: Project = {
  id: '1',
  title: 'rename Super Project',
  description: 'This is awesome',
  completed: true,
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

const clientsStore = new ClientsStore(initialClientState);
const currentClient = clientsStore.select('currentClient');

const projectsStore = new ProjectStore(initialProjectState);
const currentProject = projectsStore.select('currentProject');

const tango = projectsStore;


@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
