import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public-company-profie/Home/Home.component';
import { AboutUsComponent } from './public-company-profie/about-us/Components/about-us/about-us.component';
import { PublicCompanyProfileComponent } from './public-company-profie/public-company-profile.component';
import { LoginComponent } from './authentication/login/login.component';
import { MainPageComponent } from './portal/main-page/main-page.component';
import { DashboardComponent } from './portal/Pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: PublicCompanyProfileComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'portal', component: MainPageComponent, children: [
    { path:'dashboard', component: DashboardComponent, pathMatch: 'full' },
  ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* { path: '**', component: PageNotFoundComponent } */