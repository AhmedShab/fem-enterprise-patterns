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

const newClient: Client = {
  id: null,
  firstname: '',
  lastname: '',
  company: '',
};

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

const clients: Array<Client> = [
  peter,
  john
];

const initialClientState: ClientsState = {
  clients,
  currentClient: newClient,
}

const tango = initialClientState;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
