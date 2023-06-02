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
    const filteredItems = this.allItems.filter(item => !item[1]);
    this.updateItems.emit(filteredItems);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
