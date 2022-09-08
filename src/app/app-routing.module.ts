import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  // {
  //   path: 'account',
  //   loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
  // },
  // {
  //   path: 'intro',
  //   loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroModule),
  // },
  {
    path: 'dashboard',
    data: {
      page: 'Dashboard',
      showBack: false
    },
    // canActivate: [AuthGuard],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  // {
  //   path: 'attention',
  //   data: {
  //     page: 'Uitgelicht',
  //     showBack: true
  //   },
  //   // canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/attention/attention.module').then(m => m.AttentionModule),
  // },
  // {
  //   path: 'favorite',
  //   data: {
  //     page: 'Biedingen',
  //     showBack: true
  //   },
  //   // canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/favorite/favorite.module').then(m => m.FavoriteModule),
  // },
  // {
  //   path: 'saved',
  //   data: {
  //     page: 'Bewaard',
  //     showBack: true
  //   },
  //   // canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/saved/saved.module').then(m => m.SavedModule),
  // },
  // {
  //   path: 'all',
  //   data: {
  //     page: 'Opdrachten',
  //     showBack: true
  //   },
  //   loadChildren: () => import('./pages/all/all.module').then(m => m.AllModule),
  // },
  // {
  //   path: 'profile',
  //   data: {
  //     page: 'Profiel',
  //     showBack: true
  //   },
  //   // canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
  // },
  // { 
  //   path: 'incentive', 
  //   data: {
  //     showBack: true
  //   },
  //   // canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/incentive/incentive.module').then(m => m.IncentiveModule) 
  // },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      paramsInheritanceStrategy: 'always',
      anchorScrolling: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

