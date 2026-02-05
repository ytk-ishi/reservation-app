import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { NavberComponent } from '../app/common/navbar/navber.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavberComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reservation-app';
}
