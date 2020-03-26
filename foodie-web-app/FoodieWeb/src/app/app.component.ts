import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodieWeb';
  currentState=false;

  getValue(value)
  {
     this.currentState=!this.currentState;
  }
}
