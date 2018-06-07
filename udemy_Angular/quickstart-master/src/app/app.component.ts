import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <p>test {{name}}</p>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  name = 'Angular !';
}
