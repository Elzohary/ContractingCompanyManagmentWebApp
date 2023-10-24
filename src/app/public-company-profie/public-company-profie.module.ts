import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTestToBeRemovedLaterComponent } from './Shared/home-test-to-be-removed-later/home-test-to-be-removed-later.component';
import { HomeModule } from './Home/Home.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from './Shared/shared.module';



@NgModule({
  declarations: [
    HomeTestToBeRemovedLaterComponent,

  ],
  imports: [
    CommonModule,
    HomeModule,
    SharedModule,
    MatSidenavModule
  ],
  exports: [
    HomeTestToBeRemovedLaterComponent,
    HomeModule
  ]
})
export class PublicCompanyProfieModule { }
