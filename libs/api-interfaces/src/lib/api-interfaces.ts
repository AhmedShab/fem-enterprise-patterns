export interface Message {
  message: string;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface BaseEntity {
  id: string | null;
}

export interface Widget extends BaseEntity {
  title: string;
  description: string;
  price: number;
}

export interface Client extends BaseEntity {
  firstname: string;
  lastname: string;
  company: string;
};

export interface ClientsState {
  clients: Array<Client>;
  currentClient: Client;
};

export interface Project extends BaseEntity{
  title: string;
  description: string;
  completed: boolean;
}

export interface ProjectsState {
  projects: Array<Project>;
  currentProject: Project;
};

export interface AppState {
  clientsState: ClientsState;
  projectsState: ProjectsState;
};

export class ClientsStore {
  state: ClientsState;

  constructor(state: ClientsState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }
}