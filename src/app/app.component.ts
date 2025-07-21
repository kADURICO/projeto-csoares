import { Component } from '@angular/core';
import { PrincipalCsoaresComponent } from './componentes/principal-csoares/principal-csoares.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [PrincipalCsoaresComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-csoares';
}
