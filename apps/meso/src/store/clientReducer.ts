import {
    Action,
    ClientsState,
    Client,
    CLIENT_LOAD,
    CLIENT_SELECT,
    CLIENT_CREATE,
    CLIENT_UPDATE,
    CLIENT_DELETE,
    CLIENT_CLEAR,
} from '../../../../libs/api-interfaces/src/lib/api-interfaces';

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

const clients: Array<Client> = [
    peter,
    john
  ];

  const newClient: Client = {
    id: null,
    firstname: '',
    lastname: '',
    company: '',
  };

const initialClientState: ClientsState = {
    clients,
    currentClient: newClient,
  }


const loadClient = (state: ClientsState, clients: Array<Client>): ClientsState => {
    return {
      clients,
      currentClient: state.currentClient,
    }
  }
  
  const selectClient = (state: ClientsState, client: Client): ClientsState => {
    return {
      clients: state.clients,
      currentClient: client,
    }
  }
  
  const createClient = (state: ClientsState, client: Client): ClientsState => {
    return {
      clients: [...state.clients, client],
      currentClient: state.currentClient,
    }
  }
  
  const updateClient = (state: ClientsState, client: Client): ClientsState => {
    return {
      clients: state.clients.map(matchClient => {
        return (matchClient.id == client.id) ? Object.assign({}, client) : matchClient;
      }),
      currentClient: state.currentClient
    }
  }
  
  const clearClient = (state: ClientsState): ClientsState => {
    return {
      clients: state.clients,
      currentClient: null,
    }
  }
  
  const deleteClient = (state: ClientsState, client: Client): ClientsState => {
    return {
      clients: state.clients.filter(matchClient => {
        return matchClient.id !== client.id
      }),
      currentClient: state.currentClient
    }
  }
  
  const clientsReducer = (state: ClientsState = initialClientState, action: Action): ClientsState => {
    switch (action.type) {
      case CLIENT_LOAD:
        return loadClient(state, action.payload);
  
      case CLIENT_SELECT:
        return selectClient(state, action.payload);
  
      case CLIENT_CREATE:
        return createClient(state, action.payload);
  
      case CLIENT_UPDATE:
        return updateClient(state, action.payload);
  
      case CLIENT_DELETE:
        return deleteClient(state, action.payload);
  
      case CLIENT_CLEAR:
        return clearClient(state);
  
      default:
        return state;
    }
  }

export default clientsReducer;