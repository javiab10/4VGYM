import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ActivityComponent } from "./activity/activity.component";
import { ListComponent } from "./list/list.component";

@Component({
  selector: 'app-root',
  imports: [MenuComponent, ActivityComponent, ListComponent], //Nombre de la clase a importar
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '4VGYM';
}
