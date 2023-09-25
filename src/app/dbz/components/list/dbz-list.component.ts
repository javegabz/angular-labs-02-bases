import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})
export class DbzListComponent {

  @Output()
  deleteCharacterbyIndex: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList:Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  onDeleteCharacter(index:number):void {

    console.log(index);
    this.deleteCharacterbyIndex.emit(index);
  }
}
