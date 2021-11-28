import { Component } from '@angular/core';
import userData from './user.json';
interface User {
  name: string
  account: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = userData;
}
