import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {


  newItem: string = '';
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem =(): void =>{
    this.newItemEvent.emit(this.newItem); // NewItemEvent envoie le contenu du nouvel Item
    this.newItem = ''; // On réinitialise Item à une nouvelle valeur vide pour pouvoir recueillir un nouvel éventuel item
  }

  constructor() { }

  ngOnInit(): void {
  }

}
