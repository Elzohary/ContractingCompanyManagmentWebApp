import { Component } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MenuContentComponent } from '../Pages/menu-content/menu-content.component';
import { PortalHeaderComponent } from '../Shared/Components/portal-header/portal-header.component';

@Component({
  selector: 'app-portal-main',
  standalone: true,
  imports: [
    PortalHeaderComponent,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatListModule,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    RouterModule,
    MenuContentComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class PortalMainComponent {

}
