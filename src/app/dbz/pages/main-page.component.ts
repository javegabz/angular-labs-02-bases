import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters:Character[]=[
    {
      name:'Krillin',
      power:500
    },
    {
      name:'Gokú',
      power: 9500
    },
    {
      name:'Vegeta',
      power: 7500
    },
  ];
}
