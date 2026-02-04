import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavberComponent } from '../app/common/navbar/navber.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reservation-app';
}
