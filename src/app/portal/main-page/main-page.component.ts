import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { MatDrawer, MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';



@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NavMenuComponent, 
    RouterModule,
    MatSidenavModule,
    MatDrawerContainer,
    MatDrawerContent,
    MatDrawer
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
