import { NgModule } from '@angular/core';
import { HomeComponent } from './public-company-profie/Home/Home.component';
import { AboutUsComponent } from './public-company-profie/about-us/Components/about-us/about-us.component';
import { PublicCompanyProfileComponent } from './public-company-profie/public-company-profile.component';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './portal/Pages/dashboard/dashboard.component';
import { PortalMainComponent } from './portal/portal-Main/main.component';
import { WorkOrdersComponent } from './portal/Pages/work-orders/work-orders.component';
import { WOComponent } from './portal/Pages/wo/wo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: PublicCompanyProfileComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'portal', component: PortalMainComponent, children: [
    { path:'overview', component: DashboardComponent, pathMatch: 'full' },
    { path: 'workorders', component: WorkOrdersComponent, pathMatch: 'full' },
    { path: 'workorders/:id', component: WOComponent, pathMatch: 'full' },
  ] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* { path: '**', component: PageNotFoundComponent } */