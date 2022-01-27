import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminUserGuard } from '../../guards/role/admin-user.guard';
import { CreateUserComponent } from './components/admin-users/create-user/create-user.component';
import { ContactGuard } from '../../guards/role/contact.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [ContactGuard],
      },
      {
        path: 'admin-users',
        component: AdminUsersComponent,
        canActivate: [AdminUserGuard],
      },
      {
        path: 'admin-users/create-user',
        component: CreateUserComponent,
        canActivate: [AdminUserGuard],
      },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
