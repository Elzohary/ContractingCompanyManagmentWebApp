import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './Components/header/header.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SidenavToggleBtnComponent } from './Components/sidenav-toggle-btn/sidenav-toggle-btn.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavToggleBtnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatSidenavModule,
    HeaderComponent
  ]
})
export class SharedModule { }
