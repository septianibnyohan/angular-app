import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  standalone: true,
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  name = 'Angular Learner';
}
