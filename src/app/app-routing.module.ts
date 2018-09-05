import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// Importar serviço de autenticação
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  // login
  {
      path: '',
      component: LoginComponent
  },
  // home
  {
      path: 'home',
      component: HomeComponent,
      canActivate: [ AuthGuard ]
  },
  // login
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
