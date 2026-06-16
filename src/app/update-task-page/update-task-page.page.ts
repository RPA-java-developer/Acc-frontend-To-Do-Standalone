import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-update-task-page',
  templateUrl: './update-task-page.page.html',
  styleUrls: ['./update-task-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UpdateTaskPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
