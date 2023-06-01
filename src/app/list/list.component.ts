import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: [string, boolean][] = [["défaut", false]]; // Tableau items contenant chaque item
  addNewItem = (newItem: string): void =>{ // Variable d'ajout d'un item
    this.items.push([newItem, false]);
  }

  updateItem = (index: number, selected: boolean): void =>{
    this.items[index][1] = selected;
  }

  // Connecter l'événement "updateItems" au paramètre "updateItems" de la fonction "updateItems"
  updateItemList = (itemList: [string, boolean][]): void =>{  //Methode permettant de mettre à jour la liste de tous les items
    this.items = itemList;
  }

  updateItems =(event: [string, boolean][]): void =>{ // Mise à jour des tous les items sélectionnés
    this.updateItems(event);
  }

  constructor() { }

  ngOnInit =(): void =>{}

}
