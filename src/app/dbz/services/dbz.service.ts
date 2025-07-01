import { Injectable } from '@angular/core';
import{ v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

 public characters : Character[] = [
  {
    id: uuid(),
    name: 'Goku',
    power: 15000,
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 14000,
  },
  {
    id: uuid(),
    name: 'Gohan',
    power: 12000,
  }, {
    id: uuid(),
    name: 'Piccolo',
    power: 8000,
  }
 ];
 onNewCharacter(character: Character): void {

  const newCharacter: Character = {
    id: uuid(), ...character

  };
  this.characters.push(newCharacter);
 }

  onDeleteCharacter(index: number) {

    this.characters.splice(index, 1);

}




}
