import { Component, OnInit } from '@angular/core';
import { HeroesModule } from "../../heroes/heroes.module";
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',


})

export class MainPageComponent {
 public characters : Character[] = [
  {
    name: 'Goku',
    power: 15000,
  }, {
    name: 'Vegeta',
    power: 14000,
  },
  {
    name: 'Gohan',
    power: 12000,
  }, {
    name: 'Piccolo',
    power: 8000,
  }
 ]
}
