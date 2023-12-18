// ajout-annonce.page.ts

import { Component } from '@angular/core';
import { AnnonceLocalService } from '../../annonce-local.service';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.page.html',
  styleUrls: ['./ajout-annonce.page.scss'],
})
export class AjoutAnnoncePage {
  current :any
  nouvelleAnnonce = {
    userId: '',
    titre: '',
    description: '',
    categorie: '',
    prix: 0,  // Add the appropriate properties for your annonce
  };

  constructor(
    private annonceService: AnnonceLocalService,
    private toastController: ToastController,
    private navCtrl: NavController,
    private fb : AuthService,private auth: AngularFireAuth,private router:Router,
  ) {



 this.auth.authState.subscribe((user) => {
      if (user) {
        console.log(user);
        // Si un utilisateur est connecté, mettre à jour les données utilisateur et les stocker localement
        this.current = user;
        this.nouvelleAnnonce.userId = this.current.uid
       if(!this.current){
        this.router.navigate(['/login']);
       }
      }
    });
  }

  async ajouterAnnonce() {
    this.fb.addPost(this.nouvelleAnnonce).then(async (res)=>{
      console.log(this.current);
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
