import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();

    }
     getheroDescription(): string {
      return `${this.name} - ${this.age}`;
 }

 changeHero(): void {
    this.name = 'Spiderman';
};
changeAge(): void {
    this.age = 50;
}

resetForm(): void {
    this.name = 'iroman';
    this.age = 45;
}
}
