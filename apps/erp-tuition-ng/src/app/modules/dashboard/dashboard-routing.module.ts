import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardComponent } from './container/dashboard.component';

const routes: Routes = [ ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }