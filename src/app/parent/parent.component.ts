import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent], // Importamos el hijo
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage = 'Hola desde el padre';
  childMessage = '';

  receiveMessage(message: string) {
    this.childMessage = message;
  }
}
