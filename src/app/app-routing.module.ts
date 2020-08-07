import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './componenent/about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, NgxWso2AuthenticationGuard, AccessDeniedComponent } from 'ngx-wso2-authentication';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [NgxWso2AuthenticationGuard], data: { expectedRole: '' } },
  { path: '', component: HomeComponent, canActivate: [NgxWso2AuthenticationGuard]  },

  { path: 'login', component: LoginComponent },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: 'about', component: AboutComponent, canActivate: [NgxWso2AuthenticationGuard] },
  { path: 'contacts', component: ContactsComponent, canActivate: [NgxWso2AuthenticationGuard] },
  { path: 'contacts/v1', component: ContactsComponent, canActivate: [NgxWso2AuthenticationGuard] },
  { path: 'contacts/v2/:id', component: ContactsComponent, canActivate: [NgxWso2AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
