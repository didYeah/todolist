import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deleteltem',
  templateUrl: './deleteltem.component.html',
  styleUrls: ['./deleteltem.component.css']
})
export class DeleteltemComponent implements OnInit {

  @Input() allItems: [string, boolean][] = [];
  @Output() updateItems = new EventEmitter<[string, boolean][]>(); // Variable d'entrée de type tableau de tuples de string et boolean

  deleteSelected() {
    this.allItems = this.allItems.filter(item => !item[1] === false); // Filtrer les objets avec la valeur booléenne false
    this.updateItems.emit(this.allItems);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
