import { Component } from '@angular/core';
import { ActivityComponent } from "../activity/activity.component";

@Component({
  selector: 'app-list',
  imports: [ActivityComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

}
