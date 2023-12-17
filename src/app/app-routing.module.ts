import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'annonces',
    loadChildren: () => import('./Pages/annonces/annonces.module').then(m => m.AnnoncesPageModule),
  },
  {
    path: 'ajout-annonce',
    loadChildren: () => import('./Pages/ajout-annonce/ajout-annonce.module').then(m => m.AjoutAnnoncePageModule),
  },
  {
    path: 'mes-annonces',
    loadChildren: () => import('./Pages/mes-annonces/mes-annonces.module').then(m => m.MesAnnoncesPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login.page.module').then(m => m.LoginPageModule),
  },
  {
    path: '',
    loadChildren: () => import('./login.page.module').then(m => m.LoginPageModule),
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.page.module').then(m => m.SignupPageModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
