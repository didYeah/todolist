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
    this.newItemEvent.emit(this.newItem);
    this.newItem = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
