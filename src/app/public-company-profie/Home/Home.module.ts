import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared/shared.module';

import { HomeComponent } from './Home.component';
import { HeroComponent } from './Components/hero/hero.component';
import { CardRightPicComponent } from './Components/card-right-pic/card-right-pic.component';
import { StickyBGComponent } from './Components/sticky-bg/sticky-bg.component';
import { StickyCardFrontComponent } from './Components/sticky-card-front/sticky-card-front.component';
import { StickyCard } from '../Models/sticky-card';
import { CardLeftPicComponent } from './Components/card-left-pic/card-left-pic.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HeroComponent,
    CardRightPicComponent,
    StickyBGComponent,
    StickyCardFrontComponent,
    CardLeftPicComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { 
}
