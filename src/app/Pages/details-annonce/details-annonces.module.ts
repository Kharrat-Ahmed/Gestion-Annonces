// details-annonces.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { DetailsAnnoncePage } from './details-annonce.page';

const routes: Routes = [
  {
    path: ':id', // :id is a route parameter to capture the unique identifier of the annonce
    component: DetailsAnnoncePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    // Add other modules as needed
  ],
  declarations: [DetailsAnnoncePage],
})
export class DetailsAnnoncePageModule {}
