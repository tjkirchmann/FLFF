import { Component, OnInit } from '@angular/core';

import { FavoritesPage } from '../modals/favorites/favorites.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit{

    constructor() {
    }

    drivers = [
      {
        id: 1,
        name: 'Lewis Hamilton',
        number: '44',
      },
      {
        id: 2,
        name: 'valterri Bottas',
        number: '77',
      },
      {
        id: 3,
        name: 'Sebastian Vettel',
        number: '5',
      },
      {
        id: 4,
        name: 'Charles Leclerc',
        number: '16',
      },
      {
        id: 5,
        name: 'Max Verstappen',
        number: '33',
      },
      {
        id: 6,
        name: 'Alexander Albon',
        number: '23',
      },
      {
        id: 7,
        name: 'Carlos Sainz',
        number: '55',
      },
      {
        id: 8,
        name: 'Lando Norris',
        number: '4',
      },
      {
        id: 9,
        name: 'Roman Grosjean',
        number: '8',
      },
      {
        id: 10,
        name: 'Kevin Magnussen',
        number: '20',
      },
      {
        id: 11,
        name: 'Daniel Ricciardo',
        number: '3',
      },
      {
        id: 12,
        name: 'Nico Hulkenburg',
        number: '27',
      },
      {
        id: 13,
        name: 'Lance Stroll',
        number: '18',
      },
      {
        id: 14,
        name: 'Sergio Perez',
        number: '11',
      },
      {
        id: 15,
        name: 'Daniel Kvyat',
        number: '23',
      },
      {
        id: 16,
        name: 'Pierre Gasly',
        number: '10',
      },
      {
        id: 17,
        name: 'Kimi Raikkonen',
        number: '7',
      },
      {
        id: 18,
        name: 'Antonio Giovinazzi',
        number: '99',
      },
      {
        id: 19,
        name: 'George Russell',
        number: '63',
      },
      {
        id: 20,
        name: 'Robert Kubica',
        number: '88',
      },
    ]


}
