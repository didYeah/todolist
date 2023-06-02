import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deleteltem',
  templateUrl: './deleteltem.component.html',
  styleUrls: ['./deleteltem.component.css']
})
export class DeleteltemComponent implements OnInit {

  @Input() allItems: [string, boolean][] =[];
  @Output() updateltems: EventEmitter<[string, boolean][]> = new EventEmitter<[string, boolean][]>();

  deleteSelected = (): void =>{
    this.allItems = this.allItems.filter(item => item[1] === false);
    this.updateltems.emit(this.allItems);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
