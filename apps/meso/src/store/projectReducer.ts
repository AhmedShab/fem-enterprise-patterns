import {
    ProjectsState,
    Project,
    Action,
    PROJECT_LOAD,
    PROJECT_CREATE,
    PROJECT_UPDATE,
    PROJECT_DELETE,
    PROJECT_SELECT,
    PROJECT_CLEAR,
} from '../../../../libs/api-interfaces/src/lib/api-interfaces';

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

const projects: Array<Project> = [
    superProject,
    hellProject,
];

const newProject: Project = {
    id: null,
    title: '',
    description: '',
    completed: false,
};

const initialProjectState: ProjectsState = {
    projects,
    currentProject: newProject,
}


const loadProject = (state: ProjectsState, Projects: Array<Project>) => {
    console.log('Load Projects', Projects);
    return state;
}

const selectProject = (state: ProjectsState, Projects: Array<Project>) => {
    console.log('Select Projects', Projects);
    return state;
}

const createProject = (state: ProjectsState, payload: any) => {
    console.log('Create Projects', projects);
    return state;
}

const updateProject = (state: ProjectsState, payload: any) => {
    console.log('update Projects', projects);
    return state;
}

const clearProject = (state: ProjectsState, payload: any) => {
    console.log('Clear Projects', projects);
    return state;
}

const deleteProject = (state: ProjectsState, payload: any) => {
    console.log('Delete Projects', projects);
    return state;
}

const projectReducer = (state: ProjectsState = initialProjectState, action: Action) => {
    switch (action.type) {
        case PROJECT_LOAD:
            return loadProject(state, action.payload);

        case PROJECT_SELECT:
            return selectProject(state, action.payload);

        case PROJECT_CREATE:
            return createProject(state, action.payload);

        case PROJECT_UPDATE:
            return updateProject(state, action.payload);

        case PROJECT_DELETE:
            return deleteProject(state, action.payload);

        case PROJECT_CLEAR:
            return clearProject(state, action.payload);

        default:
            return state;
    }
}

export default projectReducer;