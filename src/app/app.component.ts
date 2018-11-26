import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoPhpFront';
  userName = 'Bem vindo'; // JSON.parse(localStorage.getItem('currentUsera'))['user'];
}
