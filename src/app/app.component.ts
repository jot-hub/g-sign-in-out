import {Component} from '@angular/core';

@Component({
  selector: 'app-kaapier',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tagLine     = 'Powered by Google SignOn';
  constructor() { console.clear(); }
}
