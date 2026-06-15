import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonCardHeader, IonCardSubtitle, IonCard, IonCardContent, IonRow, IonFabButton, IonFab } from '@ionic/angular/standalone';

import { NgIf } from '@angular/common';
import { addIcons } from 'ionicons';
import { create, logoIonic } from 'ionicons/icons';
import { DatePipe, NgForOf } from '@angular/common';


import { IonIcon } from '@ionic/angular/standalone'; // 1. Importa el componente
import { add, ellipse, heart, trashOutline, shareOutline, checkmarkOutline } from 'ionicons/icons'; // 3. Impo

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [NgIf,IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, DatePipe, IonCardHeader, IonCardSubtitle, IonCard, NgForOf, IonIcon, IonCardContent, IonRow, IonFabButton, IonFab],
})
export class HomePage {

  todoList = [
    {
      itemName : 'Coding',
      itemDueDate : '12-13-21',
      itemPriority : 'high',
      itemCategory : 'Work'
    },
    {
      itemName : 'Design',
      itemDueDate : '10-28-21',
      itemPriority : 'low',
      itemCategory : 'Work'
    },
    {
      itemName : 'Shopping',
      itemDueDate : '10-30-21',
      itemPriority : 'middle',
      itemCategory : 'Personal'
    },
    {
      itemName : 'Workout',
      itemDueDate : '10-25-21',
      itemPriority : 'high',
      itemCategory : 'Personal'
    }
  ]



  today : number = Date.now()



  constructor() {

    addIcons({ add, ellipse,logoIonic,  heart, trashOutline, shareOutline, checkmarkOutline });
  }

}
