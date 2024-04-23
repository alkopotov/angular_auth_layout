import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetComponent } from './pages/reset/reset.component';
import { AuthService } from './services/auth.service';
import { PostListComponent } from './pages/post-list/post-list.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset', component: ResetComponent},
  {path: 'posts', component: PostListComponent, canActivate: [AuthService]},
  {path: '**', redirectTo: 'posts', pathMatch: 'full'}
];
