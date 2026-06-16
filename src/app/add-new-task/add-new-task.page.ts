import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, ModalController, IonCard, IonItem, IonTextarea, IonSelectOption, IonSelect, IonButton, IonDatetime, IonModal, IonPopover, IonDatetimeButton } from '@ionic/angular/standalone';

import { IonChip, IonLabel, IonIcon, IonAvatar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

import { ViewChild } from '@angular/core';


import { close, pricetagOutline, calendarOutline, addOutline } from 'ionicons/icons';

import { TodoService } from '../todo-service';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonCard, IonItem, IonTextarea, IonSelectOption, IonSelect, IonLabel, IonChip, IonButton, IonDatetime, IonDatetime, IonModal, IonDatetimeButton]
})
export class AddNewTaskPage implements OnInit {


  categories =['Trabajo','Personal','Casa','Amigos','Deporte']
  selectedCategory: any


  taskName: any
  taskDueDate: any
  taskPriority: any
  taskCategory: any
  taskObject: any




  constructor(public modalCtlr: ModalController, public todoService:TodoService) {

    addIcons({ close, pricetagOutline, calendarOutline, addOutline });
    this.todoService.init();

   }

  ngOnInit() {
  }




  async AddTarea(){
    console.log('inicio');
    console.log(this.taskDueDate);
    this.taskObject = ({itemName: this.taskName,
                        itemDueDate: this.taskDueDate,
                        itemPriority: this.taskPriority,
                        itemCategory: this.selectedCategory
                      })
    console.log('salida');
    console.log(this.taskObject);


    let uid = this.taskName + this.taskDueDate

    if(uid){
      await this.todoService.addTask(uid,this.taskObject)
    }else{
      console.log("can't save empty task");
    }

    this.dismis(this.taskObject )
  }



  selectCategory(index: number){
    this.selectedCategory = this.categories[index]
    //console.log(this.selectedCategory);
  }



  async dismis(taskObject?: any){
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


  // Obtenemos una referencia al modal para poder cerrarlo programáticamente
  @ViewChild(IonModal) modal!: IonModal;

  onFechaCambiada(datetimeComponent: any) {
    // 1. Obtienes el valor seleccionado
    const fechaSeleccionada = datetimeComponent.value;
    this.taskObject = ({
         itemDueDate:fechaSeleccionada
    })

    console.log('Fecha elegida:', fechaSeleccionada);

    // 2. Cierras el modal automáticamente al elegir
    this.modal.dismiss();
  }


}
