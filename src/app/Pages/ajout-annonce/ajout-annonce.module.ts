// ajout-annonce.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule, Routes } from '@angular/router';
import { AjoutAnnoncePage } from './ajout-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutAnnoncePage,
  },
];


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes),
    // Add other modules as needed
  ],
  declarations: [AjoutAnnoncePage],
})
export class AjoutAnnoncePageModule {}
