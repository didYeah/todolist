import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deleteltem',
  templateUrl: './deleteltem.component.html',
  styleUrls: ['./deleteltem.component.css']
})
export class DeleteltemComponent implements OnInit {

  @Input() allItems: [string, boolean][] =[];
  @Output() updateItems: EventEmitter<[string, boolean][]> = new EventEmitter<[string, boolean][]>();

  deleteSelected = (): void =>{
    this.allItems = this.allItems.filter(item => item[1] === true); // Filtrer les objets avec la valeur booléenne true
    this.updateItems.emit(this.allItems); 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
