import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardEmployeeComponent } from './dashboard-employee/dashboard-employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard-employee',
    component: DashboardEmployeeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'employees/create',
    component: EmployeeAddComponent
  },
  {
    path: 'employees/edit/:id',
    component: EmployeeEditComponent
  },
  {
    path: 'employees',
    component: EmployeeGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
