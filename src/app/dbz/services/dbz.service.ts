import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  
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

  onNewCharacter( character:Character ):void {
    this.characters.push(character);
  }

  onDeleteCharacterByIndex (index:number):void {
    this.characters.splice(index,1);
  }
}
