import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-portal-header',
  standalone: true,
  imports: [
    MatDivider,
    MatInputModule,
    MatMenuModule

  ],
  templateUrl: './portal-header.component.html',
  styleUrl: './portal-header.component.scss'
})
export class PortalHeaderComponent {

}
