import { Component, OnInit } from '@angular/core';
import {
  ClientsState,
  Client,
  Project,
  ProjectsState,
  AppState,
  ClientsStore,
  ProjectStore,
  CLIENT_SELECT,
  CLIENT_CREATE,
} from '../../../../../libs/api-interfaces/src/lib/api-interfaces';
import clientsReducer from '../../store/clientReducer';

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
  id: '2',
  firstname: 'John',
  lastname: 'Doe',
  company: 'NA'
}

const jane: Client = {
  id: '3',
  firstname: 'jane',
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

const clientsStore = new ClientsStore(initialClientState, clientsReducer);
const currentClient = clientsStore.select('currentClient');
clientsStore.dispatch({ type: CLIENT_CREATE, payload:  jane })
const allClients = clientsStore.select('clients');

const projectsStore = new ProjectStore(initialProjectState);
const currentProject = projectsStore.select('currentProject');

const tango = allClients;


@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
