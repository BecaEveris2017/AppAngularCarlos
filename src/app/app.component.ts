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
  
  stats = false;
  message = 'Show';

  addNewColor(color) {
    this.colores.push(color.value);
    color.value = "";
    return false;
  }

  showArrayColors() {
    this.stats = !this.stats;
    if(this.message == 'Hide') {
      this.message = 'Show';
    }
    else {
      this.message = 'Hide';
    }
  }
}
