import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecorationPictureComponent } from './components/decoration-picture/decoration-picture.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DecorationPictureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
