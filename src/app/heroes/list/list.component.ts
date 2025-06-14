import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = [
    'Superman',
    'Batman',
    'Hulk',
    'Thor' ];

    public deletedHero?: string;

    remonveLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
