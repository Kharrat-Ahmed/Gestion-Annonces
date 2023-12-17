// mes-annonces.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { MesAnnoncesPage } from './mes-annonces.page';

const routes: Routes = [
  {
    path: '',
    component: MesAnnoncesPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    // Add other modules as needed
  ],
  declarations: [MesAnnoncesPage],
})
export class MesAnnoncesPageModule {}
