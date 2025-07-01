import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-character',
  standalone: false,
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  @Output()
 public oneNewCharacter: EventEmitter<Character> = new EventEmitter();

   public character: Character = {
    name: '',
    power: 0
  };
  emitCharacter():void{

    console.log(this.character);
    if (this.character.name.trim().length === 0) return;
    this.oneNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0
    };
}
}
