import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  // public onEventDelete:EventEmitter<number> = new EventEmitter();
  // public onEventDelete = new EventEmitter<number>();
  public onEventDelete:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList:Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // onDeleteId(index:number):void{
  //   this.onEventDelete.emit(index);
  // }

  onDelete(id?:string):void{
    if(!id) return;
    this.onEventDelete.emit(id);
  }

  onDeleteCharacter(index:number):void{
    console.log(index);
  }
}
