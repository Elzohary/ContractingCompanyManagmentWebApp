import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared/shared.module';

import { HomeComponent } from './Home.component';
import { HeroComponent } from './Components/hero/hero.component';
import { CardRightPicComponent } from './Components/card-right-pic/card-right-pic.component';
import { StickyBGComponent } from './Components/sticky-bg/sticky-bg.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HeroComponent,
    CardRightPicComponent,
    StickyBGComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
