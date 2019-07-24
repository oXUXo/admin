import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent }    from './register/register.component';
import { LoginComponent }       from './login/login.component';



const userRoutes: Routes = [
  { path: 'login',  component:  LoginComponent},
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }