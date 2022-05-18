import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date_formated = new Date().toDateString().split(' ').splice(1).join(' ');
  
}
