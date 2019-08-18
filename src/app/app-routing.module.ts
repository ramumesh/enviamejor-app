import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VerifyPageGuard } from './guards/verify-page-guard.guard';
import { RegisterPageGuard } from './guards/register-page-guard.guard';
import { LoginPageGuard } from './guards/login-page-guard.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: './pages/public/register/register.module#RegisterPageModule',
    canActivate: [RegisterPageGuard]
  },
  { path: 'login', loadChildren: './pages/public/login/login.module#LoginPageModule', canActivate: [LoginPageGuard] },
  {
    path: 'verify',
    loadChildren: './pages/public/verify/verify.module#VerifyPageModule',
    canActivate: [VerifyPageGuard]
  },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'home', loadChildren: './pages/members/home/home.module#HomePageModule' },
  { path: 'dashboard', loadChildren: './pages/members/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'profile', loadChildren: './pages/members/profile/profile.module#ProfilePageModule' },
  { path: 'transactions', loadChildren: './pages/members/transactions/transactions.module#TransactionsPageModule' },
  { path: 'settings', loadChildren: './pages/members/settings/settings.module#SettingsPageModule' },
  { path: 'about', loadChildren: './pages/members/about/about.module#AboutPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
