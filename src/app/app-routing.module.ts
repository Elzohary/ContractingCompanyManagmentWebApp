import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public-company-profie/Home/Home.component';
import { AboutUsComponent } from './public-company-profie/about-us/Components/about-us/about-us.component';
import { PublicCompanyProfileComponent } from './public-company-profie/public-company-profile.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PublicCompanyProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
