import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Carlos Mena';
  colores = ['negro', 'rojo', 'blanco'];

  addNewColor(color) {
    this.colores.push(color.value);
    color.value = "";
    return false;
  }
}
