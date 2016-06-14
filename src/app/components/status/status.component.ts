import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'status',
  templateUrl: 'status.component.html',
  directives: [NgClass],
  styleUrls: ['./../../assets/style/signal.css']
})

export class StatusComponent {
  
  title: string;
  isDay: boolean;
  
  constructor () {
    this.isDay = false;
  }
  
  toggle() {
    this.isDay = !this.isDay;
  }
}
