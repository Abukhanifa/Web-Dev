import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',

  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,

  ]
})
export class AppComponent {
  title = 'hh_front';
}



