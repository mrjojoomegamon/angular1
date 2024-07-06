import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterlist: Character[] = [{
    name: 'trunks',
    power: 10000
  }]

  ondeleteCharacter(index: number): void {
    this.characterlist.splice(index, 1);
  }

}
