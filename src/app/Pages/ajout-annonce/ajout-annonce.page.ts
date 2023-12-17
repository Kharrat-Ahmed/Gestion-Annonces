// ajout-annonce.page.ts

import { Component } from '@angular/core';
import { AnnonceLocalService } from '../../annonce-local.service';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.page.html',
  styleUrls: ['./ajout-annonce.page.scss'],
})
export class AjoutAnnoncePage {
  nouvelleAnnonce = {
    titre: '',
    description: '',
    categorie: '',
    prix: 0,  // Add the appropriate properties for your annonce
  };

  constructor(
    private annonceService: AnnonceLocalService,
    private toastController: ToastController,
    private navCtrl: NavController,
    private fb : AuthService
  ) {}

  async ajouterAnnonce() {
    this.fb.addPost(this.nouvelleAnnonce).then(async (res)=>{
      const toast = await this.toastController.create({
        message: 'Annonce ajoutée avec succès',
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      toast.present();
    }).catch(async(err)=>{
      console.log(err);
      const toast = await this.toastController.create({
        message: 'Erreur lors de l\'ajout de l\'annonce',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      toast.present();
    })

  }
}
