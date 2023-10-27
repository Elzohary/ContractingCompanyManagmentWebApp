import { Component } from '@angular/core';
import { HeaderService } from '../../Services/header.service';

@Component({
  selector: 'app-sidenav-toggle-btn',
  templateUrl: './sidenav-toggle-btn.component.html',
  styleUrls: ['./sidenav-toggle-btn.component.scss']
})
export class SidenavToggleBtnComponent {

  constructor(private headerService: HeaderService) { }

  toggleSideNav() {
    if (this.headerService.getIsSideNavValue() == true) {
      this.headerService.setIsSideNavFalse();
    }
    this.headerService.toggleSideNav();
  }

}
