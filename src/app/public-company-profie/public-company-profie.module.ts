import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './Home/Home.module';
import { SharedModule } from './Shared/shared.module';
import { FormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';

import { PublicCompanyProfileComponent } from './public-company-profile.component';
import { HomeTestToBeRemovedLaterComponent } from './Shared/home-test-to-be-removed-later/home-test-to-be-removed-later.component';
import { AboutUsModule } from './about-us/about-us.module';



@NgModule({
  declarations: [
    PublicCompanyProfileComponent,
    HomeTestToBeRemovedLaterComponent

  ],
  imports: [
    CommonModule,
    HomeModule,
    SharedModule,
    MatSidenavModule,
    AboutUsModule,
    FormsModule

  ],
  exports: [
    PublicCompanyProfileComponent,
    HomeTestToBeRemovedLaterComponent,
    HomeModule,
    FormsModule

  ],

})
export class PublicCompanyProfieModule { }
