import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title: string = "Ma ToDoList";

  items: [string, boolean][] = [   // Tableau items contenant chaque item
    ["Déboucher le siphon du lavabo", false],
    ["Assembler un meuble de rangement", false],
    ["Nettoyer la table du salon", false],
    ["Acheter du liquide vaisselle", false],
    ["Ranger le grenier", false],
    ["S'inscrire à une salle de sport", false],
    ["Renouveler mon abonnement", false],
    ["Prendre un café avec Joe et Emily", false]
  ];
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

  updateItems =(items: [string, boolean][]): void =>{ // Mise à jour des tous les items sélectionnés
    //this.updateItems(items);
    this.items = items;
  }

  constructor() { }

  ngOnInit =(): void =>{}

}
