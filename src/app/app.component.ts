import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLibraryComponent } from '@nazmul_hasan/my-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MyLibraryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LibraryDemo';
}
