import { Component } from '@angular/core';

@Component({
  selector: 'app-decoration-picture',
  standalone: true,
  imports: [],
  templateUrl: './decoration-picture.component.html',
  styleUrl: './decoration-picture.component.css'
})
export class DecorationPictureComponent {

  public decorationPicture: string = 'assets/images/decoration.jpg';

}
