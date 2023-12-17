// annonces.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { AnnoncesPage } from './annonces.page';

const routes: Routes = [
  {
    path: '',
    component: AnnoncesPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    // Add other modules as needed
  ],
  declarations: [AnnoncesPage],
})
export class AnnoncesPageModule {}
