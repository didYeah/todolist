import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-selectitem',
  templateUrl: './selectitem.component.html',
  styleUrls: ['./selectitem.component.css']
})
export class SelectitemComponent implements OnInit {
  @Input() allItems: [string, boolean][] =[]; // Variable d'entrée reprenant tous les items de la liste
  @Output() updateItems: EventEmitter<[string, boolean][]> = new EventEmitter<[string, boolean][]>(); // Variable de sortie permettant de stocker les items sélectionnés et de les mettre à jour

  /*selectAll = (): void =>{ // Sélection de tous les items en leur définissant le boolean à true
    this.allItems = this.allItems.map(([item, _]) => [item, true]);
    this.updateItems.emit(this.allItems);
  }

  unselectAll = (): void =>{ // Sélection de tous les items en leur définissant le boolean à false
    this.allItems = this.allItems.map(([item]) => [item, false]);
    this.updateItems.emit(this.allItems);
  }*/

  selectAll() {
    this.allItems.forEach(item => (item[1] = true));
    this.updateItems.emit(this.allItems);
  }

  unselectAll() {
    this.allItems.forEach(item => (item[1] = false));
    this.updateItems.emit(this.allItems);
  }

  deleteSelected() {
    const filteredItems = this.allItems.filter(item => !item[1]);
    this.updateItems.emit(filteredItems);
  }

  constructor() {}

  ngOnInit(): void {
  }
}
