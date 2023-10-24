import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared/shared.module';

import { HomeComponent } from './Home.component';
import { HeroComponent } from './Components/hero/hero.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HeroComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
