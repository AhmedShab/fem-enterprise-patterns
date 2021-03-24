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
  title?: string;
  description?: string;
  completed?: boolean;
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

export class ProjectStore {
  state: ProjectsState;

  constructor(state: ProjectsState) {
    this.state = state;
  }

  getState(){
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }

  update(id: string, project: Project) {
    this.state.projects = this.state.projects.map(proj => {
      return proj.id == id ? Object.assign(proj, project) : proj;
    });
  }
}

export const CLIENT_LOAD    = '[Client] Load';
export const CLIENT_CREATE  = '[Client] Create';
export const CLIENT_UPDATE  = '[Client] Update';
export const CLIENT_DELETE  = '[Client] Delete';
export const CLIENT_SELECT  = '[Client] Select';
export const CLIENT_CLEAR   = '[Client] Clear';

export const PROJECT_LOAD    = '[Project] Load';
export const PROJECT_CREATE  = '[Project] Create';
export const PROJECT_UPDATE  = '[Project] Update';
export const PROJECT_DELETE  = '[Project] Delete';
export const PROJECT_SELECT  = '[Project] Select';
export const PROJECT_CLEAR   = '[Project] Clear';