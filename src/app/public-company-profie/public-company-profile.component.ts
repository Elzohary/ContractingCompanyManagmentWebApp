import { Component, OnInit } from '@angular/core';
import { HeaderService } from './Shared/Services/header.service';

@Component({
  selector: 'app-public-company-profile',
  templateUrl: './public-company-profile.component.html',
  styleUrls: ['./public-company-profile.component.scss']
})
export class PublicCompanyProfileComponent implements OnInit {

  isSideNavOpen = false;

  constructor(private headerService: HeaderService) {
   }

  ngOnInit() {
    this.headerService.getSideNavState().subscribe((isOpen) => {
      this.isSideNavOpen = isOpen;
    });
  }

}
