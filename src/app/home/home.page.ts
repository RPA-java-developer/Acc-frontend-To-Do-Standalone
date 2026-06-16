import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonCardHeader, IonCardSubtitle, IonCard, IonCardContent, IonRow, IonFabButton, IonFab, ModalController } from '@ionic/angular/standalone';

import { NgIf } from '@angular/common';
import { addIcons } from 'ionicons';
import { create, logoIonic } from 'ionicons/icons';
import { DatePipe, NgForOf } from '@angular/common';


import { IonIcon } from '@ionic/angular/standalone'; // 1. Importa el componente
import { add, ellipse, heart, trashOutline, shareOutline, checkmarkOutline } from 'ionicons/icons'; // 3. Impo
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { UpdateTaskPagePage } from '../update-task-page/update-task-page.page';
import { TodoService } from '../todo-service';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [NgIf,IonHeader, IonToolbar, IonContent, IonItem, IonLabel, DatePipe, IonCardHeader, IonCardSubtitle, IonCard, NgForOf, IonIcon, IonCardContent, IonRow, IonFabButton, IonFab],
})
export class HomePage {
  [x: string]: any;

  taskPriority: any

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



  constructor(public modalCtlr: ModalController, public todoService:TodoService) {

    addIcons({ add, ellipse,logoIonic,  heart, trashOutline, shareOutline, checkmarkOutline });
     //this.getAllTask()
  }


  async addNewItem(){
    const modal = await this.modalCtlr.create({
      component: AddNewTaskPage
    })
    modal.onDidDismiss().then(result => {
      if (result.data) {
        console.log(result.data);
        this.todoList.push(result.data);
      }
    });
    return await modal.present()
  }


  getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoService.getAllTasks());
  }



  delete(key: number){
    this.todoList.splice(key,1)
    //this.getAllTask()
  }


  async update(selectedTask: any){
    const modal = await this.modalCtlr.create({
      component: UpdateTaskPagePage,
      componentProps: {task: selectedTask}
    })

    modal.onDidDismiss().then(()=>{
      this.getAllTask()
    })

    return await modal.present()
  }

}
