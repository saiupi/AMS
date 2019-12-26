import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllEmployeesComponent } from './dashboard/reports/all-employees/all-employees.component';
import { AssignmentClinetLinkComponent } from './dashboard/admin/assignment-clinet-link/assignment-clinet-link.component';
import { AssignmentEmployeeLinkComponent } from './dashboard/admin/assignment-employee-link/assignment-employee-link.component';
import { AssignmentsComponent } from './dashboard/admin/assignments/assignments.component';
import { ClientsComponent } from './dashboard/admin/clients/clients.component';
import { EmployeesComponent } from './dashboard/admin/employees/employees.component';
import { ServerNotFoundComponent } from './server-not-found/server-not-found.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  { path: 'login', component: LoginComponent },
  {
    path: '', redirectTo: 'login', pathMatch: 'full',
  },

  { path: 'dashboard', component: DashboardComponent,children: [  
    { path: '', component:  AllEmployeesComponent},   
  { path: 'allEmployees', component:  AllEmployeesComponent},
  { path: 'clients', component: ClientsComponent },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'employees', component: EmployeesComponent },

  { path: 'assignmentClient', component: AssignmentClinetLinkComponent },
  { path: 'assignmentEmployee', component: AssignmentEmployeeLinkComponent } ]},
  { path: '**', component: ServerNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
