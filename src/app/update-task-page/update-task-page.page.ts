import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonCard, IonItem, IonLabel, IonButton, IonModal, IonTextarea, IonSelectOption, IonSelect, IonDatetime, IonChip, ModalController } from '@ionic/angular/standalone';

import { close } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-update-task-page',
  templateUrl: './update-task-page.page.html',
  styleUrls: ['./update-task-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonCard, IonItem, IonLabel, IonButton, IonModal, IonTextarea, IonSelectOption, IonSelect, IonDatetime, IonChip]
})
export class UpdateTaskPagePage implements OnInit {

  constructor(public modalCtlr: ModalController) {

        addIcons({ close });

   }

  ngOnInit() {
  }


  async dismisActualizar(taskObject?: any){
    await this.modalCtlr.dismiss(
      taskObject
      /*
    {
      itemName: 'New Task',
      itemDueDate: '06-15-26',
      itemPriority: 'high',
      itemCategory: 'Work'
    }*/
    )


}
