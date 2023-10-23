import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PublicCompanyProfieModule } from './public-company-profie/public-company-profie.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicCompanyProfieModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
